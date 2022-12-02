import React from "react";
import { SearchWrapper } from "./Styles";
import Input from "../../../Components/Shared/Form/Input";

const Search = () => {
  return (
    <SearchWrapper>
      <Input
        search="true"
        radius="50"
        height="36"
        mb="0"
        width="60"
        searchWidth="10"
        placeHolder="Search for tools, apps, help & more..."
      />
    </SearchWrapper>
  );
};

export default Search;
