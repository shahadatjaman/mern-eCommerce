import React from "react";
import { Li, Ul, Wrapper } from "./Style";

const Poper = () => {
  return (
    <Wrapper>
      <Ul>
        <Li>
          <i className="fa-solid fa-pencil"></i>Edit
        </Li>
        <Li>
          <i className="fa-regular fa-clone"></i> Duplicate
        </Li>
        <Li>
          <i class="fa-regular fa-trash-can"></i>Delete
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Poper;
