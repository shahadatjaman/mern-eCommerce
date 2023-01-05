import React from "react";
import Facebook from "./Facebook";
import GitHub from "./GitHub";
import Google from "./Google";
import { H5, SignWith } from "./Styles";
const Or = () => {
  return (
    <>
      <H5>Or login with</H5>
      <SignWith>
        <Google />
        <Facebook />
        <GitHub />
      </SignWith>
    </>
  );
};

export default Or;
