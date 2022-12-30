import { Avatar, Box, Button, Rating, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { callApi, requestToServerWithGet } from "../../../../utils";
import {
  Date,
  DateWrapper,
  Descriptios,
  H5,
  H6,
  Header,
  Helpful,
  Name,
  RatingWrapper,
  Wrapper,
} from "./Styles";

import { useTimeFormat } from "../../../../hooks/useTimeFormate";
import Delete from "./Delete";
import Update from "./Update";

const Post = ({ val }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdte] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const date = useTimeFormat(val.createdAt);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: val.user_id,
        method: "get",
        pathOne: "auth",
        pathTwo: "getuser",
      });

      if (res.user) {
        setCurrentUser(res.user);
      }
    })();
  }, [val]);

  return (
    <Wrapper>
      <Header>
        <Stack direction="row" spacing={2}>
          {currentUser && (
            <Avatar
              alt={currentUser?.fistName}
              src={currentUser?.avatar}
              sx={{ width: 30, height: 30 }}
            />
          )}
        </Stack>

        <Name>
          {currentUser && (
            <H5>{currentUser.firstName + " " + currentUser.lastName}</H5>
          )}
        </Name>
      </Header>
      <DateWrapper>
        <Date>{date}</Date>
      </DateWrapper>
      <RatingWrapper>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            name="half-rating-read"
            defaultValue={val.rating}
            precision={val.rating}
            readOnly
          />
        </Box>
      </RatingWrapper>
      <Descriptios>{val.text}</Descriptios>

      <Helpful>
        {user?._id !== currentUser?._id ? (
          <>
            <H6>Did you find this helpful?</H6>
            <Button
              variant="outlined"
              size="small"
              style={{ borderRadius: 50, marginRight: " 0.8rem" }}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              size="small"
              style={{ borderRadius: 50 }}
            >
              No
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              size="small"
              style={{ borderRadius: 50, marginRight: "1rem" }}
              onClick={() => setIsOpenUpdte(true)}
            >
              Edit your review
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
              style={{ borderRadius: 50 }}
              onClick={() => setIsOpen(true)}
            >
              Delete
            </Button>
          </>
        )}
        <Update
          product_id={val.product_id}
          isOpenUpdate={isOpenUpdate}
          setIsOpenUpdte={setIsOpenUpdte}
        />
        <Delete
          product_id={val.product_id}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </Helpful>
    </Wrapper>
  );
};

export default Post;
