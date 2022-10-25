import React from "react";
import { H5, Li } from "../../../Shared/Styles";
import { Name, Value } from "../Styles";
import { ActionWrapper, Attribute, Del, Edit } from "./Styles";

const List = ({ item }) => {
  return (
    <Li>
      <Attribute>
        <Name>{item.name}</Name>

        {item.color && <Value> {item.color}</Value>}
        {item.size && <Value> {item.size}</Value>}
      </Attribute>

      <ActionWrapper>
        <Edit>Edit</Edit>
        <Del>Delete</Del>
      </ActionWrapper>
    </Li>
  );
};

export default List;
