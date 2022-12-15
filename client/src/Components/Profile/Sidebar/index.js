import React from "react";
import { menu } from "./data";
import { Li, LinkName, Menu, Ul, Wrapper } from "./styles";

const SideBar = () => {
  return (
    <Wrapper>
      <Menu>
        <Ul>
          {menu?.map((val, i) => (
            <Li key={i}>
              <LinkName to={`${val.path}`}>{val.name} </LinkName>
            </Li>
          ))}
        </Ul>
      </Menu>
    </Wrapper>
  );
};

export default SideBar;
