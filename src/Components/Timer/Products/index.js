import { Typography } from "@mui/material";

import { Col, Container, Row } from "react-bootstrap";
import { FcBarChart } from "react-icons/fc";

import { Body, H4, Item, Title } from "../Styles";
import Product from "./Product";

import { Wrapper } from "./Styles";

const Products = ({ title, products }) => {
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
                  {products && products.length === 0 && (
                    <Typography textAlign={"center"} py={5}>
                      No more product!
                    </Typography>
                  )}
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
