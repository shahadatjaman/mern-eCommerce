import React from "react";
import { Search, Wrapper } from "./Styles";
import Input from "../../../../Components/Shared/Form/Input";
const Query = () => {
  return (
    <Wrapper>
      <Search>
        <Input
          height="46"
          type="search"
          radius="4"
          placeHolder="Search..."
          search="true"
        />
      </Search>
    </Wrapper>
  );
};

export default Query;
