import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import { ChangePassword } from "./ChangePassword";
import {
  boxStyled,
  Email,
  H5,
  ProfileWrapper,
  Span,
  UpdateWrapper,
  Username,
  Wrapper,
} from "./Styles";

const LeftSide = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <UpdateWrapper>
        <Box sx={{ ...boxStyled, width: 700 }}>
          <ProfileWrapper>
            <Avatar />
            <Username>
              <H5>{user?.username}</H5>
            </Username>
          </ProfileWrapper>
          {/* <Email>
            <Span>Email : </Span> {user?.email}
          </Email> */}
          <ChangePassword />
        </Box>
      </UpdateWrapper>
    </Wrapper>
  );
};

export default LeftSide;
