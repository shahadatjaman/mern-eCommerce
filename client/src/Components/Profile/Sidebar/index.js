import React from "react";
import { menu } from "./data";
import { Li, LinkName, Menu, Ul, Wrapper } from "./styles";

const SideBar = ({ closeHandler }) => {
  return (
    <Wrapper>
      <Menu>
        <Ul>
          {menu?.map((val, i) => (
            <Li key={i}>
              <LinkName
                to={`${val.path}`}
                onClick={closeHandler && closeHandler}
              >
                {val.name}{" "}
              </LinkName>
            </Li>
          ))}
        </Ul>
      </Menu>
    </Wrapper>
  );
};

export default SideBar;
