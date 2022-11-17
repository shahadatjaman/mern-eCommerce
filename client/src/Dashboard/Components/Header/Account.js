import React from "react";
import { useSelector } from "react-redux";
import { shortText } from "../../../utils";
import {
  AccountWrapper,
  Down,
  H4,
  ImageWrapper,
  Img,
  Name,
  NameWrapper,
} from "./Styles";

const Account = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <AccountWrapper>
      {user && (
        <>
          <ImageWrapper>
            <Img src={user.avatar} alt="user" />
          </ImageWrapper>
          <NameWrapper>
            <Name>
              <H4>{shortText(user.username, 10, 0, 10)}</H4>
            </Name>
            <Down>
              <i className="fa-solid fa-chevron-down"></i>
            </Down>
          </NameWrapper>
        </>
      )}
    </AccountWrapper>
  );
};

export default Account;
