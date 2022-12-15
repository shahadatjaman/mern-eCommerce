import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcBarChart } from "react-icons/fc";
import { callApi } from "../../../utils";
import { Body, H4, Item, Title } from "../Styles";
import Product from "./Product";

import { Wrapper } from "./Styles";

const Products = ({ id, title }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        values: { category_id: id },
        pathOne: "vendor",
        pathTwo: "getproducts",
        method: "post",
        from: 0,
        to: 3,
      });

      if (res.products) {
        setProducts(res.products);
      }
    })();
  }, [id]);

  return (
    <Wrapper>
      <Container fluid className="p-0 msmt-2">
        <Row>
          <Col className="px-2">
            <Item>
              <Title>
                <FcBarChart />
                <H4> {title}</H4>
              </Title>
              <Body>
                <Row>
                  {products?.map((item, index) => (
                    <Product product={item} key={index} />
                  ))}
                </Row>
              </Body>
            </Item>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Products;
