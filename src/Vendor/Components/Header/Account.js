import React from "react";
import { useSelector } from "react-redux";

import BadgeAvatar from "../../Shared/Avatar";
import { AccountWrapper } from "./Styles";

const Account = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <AccountWrapper>
      <>{user && <BadgeAvatar avatar={user.avatar} />}</>
    </AccountWrapper>
  );
};

export default Account;
