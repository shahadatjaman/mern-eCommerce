import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { menu } from "./data";
import { Li, LinkName, Menu, Ul, Wrapper } from "./styles";

const SideBar = ({ closeHandler }) => {
  const params = useLocation();

  return (
    <Wrapper>
      <Menu>
        <Ul>
          {menu?.map((val, i) => (
            <Li key={i}>
              <LinkName
                to={`${val.path}`}
                isActive={val.path === params.pathname}
                onClick={closeHandler && closeHandler}
              >
                {val.name}
              </LinkName>
            </Li>
          ))}
        </Ul>
      </Menu>
    </Wrapper>
  );
};

export default SideBar;
