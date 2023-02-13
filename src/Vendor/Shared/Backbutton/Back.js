import React from "react";

import { Button, Link } from "./Styles";
import { FiArrowLeft } from "react-icons/fi";
const Back = ({ type }) => {
  return (
    <Button>
      {(type === "create") | "update" ? (
        <Link to={"/dashboard/collections"}>
          <FiArrowLeft />
        </Link>
      ) : (
        <Link to={"/dashboard/collections"}>
          <FiArrowLeft />
        </Link>
      )}
    </Button>
  );
};

export default Back;
