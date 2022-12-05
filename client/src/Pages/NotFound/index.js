import React from "react";
import { H4, Img, ImgWrapper, Wrapper } from "./Styles";

import Layout from "../Layout";

const ResourseNotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <ImgWrapper>
          <Img
            src="https://res.cloudinary.com/dza2t1htw/image/upload/v1669235551/browser_kqq3sw.png"
            alt="404"
          />
        </ImgWrapper>
        <H4>Something went wrong!</H4>
      </Wrapper>
    </Layout>
  );
};

export default ResourseNotFound;
