import React, { useState } from "react";

import { FaBars, FaThList } from "react-icons/fa";

import {
  Bars,
  SelfContainer,
  Link,
  LinkText,
  Logo,
  Main,
  SidebarWrape,
  TopSection,
  Wrapper,
  Fixed,
} from "./Styles";

import { BiHome } from "react-icons/bi";
import { BsFillInboxFill, BsFillTagFill } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <BiHome />,
    },
    {
      path: "/",
      name: "Orders",
      icon: <BsFillInboxFill />,
    },
    {
      path: "/admin/dsd/products",
      name: "Products",
      icon: <BsFillTagFill />,
    },
    {
      path: "/",
      name: "Customers",
      icon: <HiOutlineUser />,
    },
    {
      path: "/",
      name: "Analytics",
      icon: <GoGraph />,
    },
    {
      path: "/",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <Wrapper>
      <SelfContainer fluid>
        <SidebarWrape
          style={{ width: isOpen ? "250px" : "50px" }}
          className="sidebar"
        >
          <Fixed>
            <TopSection>
              {/* <Logo style={{ display: isOpen ? "block" : "none" }}>Logo</Logo> */}
              <Bars style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                <FaBars onClick={toggle} />
              </Bars>
            </TopSection>
            {menuItem.map((item, index) => (
              <Link to={item.path} key={index} activeclassName="active">
                <LinkText className="icon">{item.icon}</LinkText>
                <LinkText style={{ display: isOpen ? "block" : "none" }}>
                  {item.name}
                </LinkText>
              </Link>
            ))}
          </Fixed>
        </SidebarWrape>
        <Main>
          <Outlet />
        </Main>
      </SelfContainer>
    </Wrapper>
  );
};

export default Sidebar;
