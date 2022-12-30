import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FaAngleRight } from "react-icons/fa";
import { callApi, shortText } from "../../../utils";
import Image from "./Image";

import { Caption, Title } from "./Styles";

const RigthColumn = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        values: { category_id: "63ab3d9bba6e5a0fde1ec5ef" },
        pathOne: "v1",
        pathTwo: "getproducts",
        method: "post",
        from: 0,
        to: 3,
      });

      if (res.products) {
        setProducts(res.products);
      }
    })();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, background: "#fff" }}>
      {products?.map((product, index) => {
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                maxWidth={140}
                overflow={"hidden"}
                sx={{ margin: 1, borderRadius: 2 }}
              >
                <Image _id={product._id} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Caption>
                <Title>
                  <Typography>{shortText(product.name, 20, 0, 40)}</Typography>
                </Title>
                <Box>
                  <Button>
                    <span>Shop Now</span>
                    <FaAngleRight />
                  </Button>
                </Box>
              </Caption>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};
// {
//    {products?.map((product, index) => (
//         <FeaturesItems key={index}>
//           <Container fluid className="p-0">
//             <Row>
//               <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12"></Col>
//               <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
//                 <Caption>
//                   <Title>
//                     <Typography>
//                       {shortText(product.name, 20, 0, 40)}
//                     </Typography>
//                   </Title>
//                   <Box>
//                     <Button>
//                       <span>Shop Now</span>
//                       <FaAngleRight />
//                     </Button>
//                   </Box>
//                 </Caption>
//               </Col>
//             </Row>
//           </Container>
//         </FeaturesItems>
//       ))}
// }
export default RigthColumn;
