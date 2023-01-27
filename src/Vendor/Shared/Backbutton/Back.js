import React from "react";

import { Button, Link } from "./Styles";
import { FiArrowLeft } from "react-icons/fi";
const Back = () => {
  return (
    <Button>
      <Link to={"/admin/username"}>
        <FiArrowLeft />
      </Link>
    </Button>
  );
};

export default Back;
