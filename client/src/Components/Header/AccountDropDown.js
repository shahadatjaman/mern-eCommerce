import React from "react";
import { AccountWrap, Href, List, UList } from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/reducer/user/";

const AccountDropDown = ({ toggle }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <AccountWrap toggle={toggle}>
      <UList>
        <List>
          <Href to="/admin/user">Dashboard</Href>
        </List>
        <List>
          <Href to="" onClick={logoutHandler}>
            Log Out
          </Href>
        </List>
      </UList>
    </AccountWrap>
  );
};

export default AccountDropDown;
