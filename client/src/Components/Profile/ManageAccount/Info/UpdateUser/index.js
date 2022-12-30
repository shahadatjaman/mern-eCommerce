import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

const UpdateUser = () => {
  const { user } = useSelector((state) => state.user);

  return user && <Form />;
};

export default UpdateUser;
