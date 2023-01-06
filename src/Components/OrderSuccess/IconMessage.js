import React from "react";
import { useSelector } from "react-redux";

import { H4, Name, SuccessMessage, Thank } from "./Styles";
const Icon = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <SuccessMessage>
      <H4>
        <Thank>Thank you</Thank>
        {user && <Name> {user?.firstName} </Name>}, Your Order has been
        received.
      </H4>
    </SuccessMessage>
  );
};

export default Icon;
