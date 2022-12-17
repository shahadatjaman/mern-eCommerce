import React, { useEffect, useState } from "react";
import { requestToServerWithGet } from "../../../../utils";
import { ImageWrapper, Img } from "../Styles";
import { Name, SalePrice, Status, StatusWrapper, TableRow, Td } from "./Styles";

const Product = ({ product }) => {
  const [values, setValues] = useState(null);
  const [variation, setVariation] = useState(null);

  useEffect(() => {
    getProdcut();
  }, []);

  const getProdcut = async () => {
    const result = requestToServerWithGet({
      url: `http://localhost:5000/vendor/getproduct/${product.product_id}`,
    });

    const { product: values, variations } = await result();

    setValues(values);

    setVariation(variations[0]);
  };

  return (
    <TableRow>
      <Td>
        <ImageWrapper>
          {variation && <Img src={variation.variation_img} alt="img" />}
        </ImageWrapper>
      </Td>
      <Td>
        <Name> {values?.name} </Name>
      </Td>
      <Td>
        <StatusWrapper>
          <Status>Proccessing</Status>
        </StatusWrapper>
      </Td>

      <Td>
        <Name>
          {product && (
            <SalePrice>
              {product.price?.$numberDecimal * product.qty.$numberDecimal} $
            </SalePrice>
          )}
        </Name>
      </Td>
      <Td>
        <Name> QTY : {product.qty.$numberDecimal} </Name>
      </Td>
    </TableRow>
  );
};

export default Product;
