import * as React from "react";
import { useSelector } from "react-redux";
import Img from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const Avatar = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Img
          alt={user?.username}
          src={user?.avatar}
          sx={{ width: 150, height: 150, fontSize: 55 }}
        />
      </Stack>
      <Button sx={{ marginTop: "1rem" }} variant="outlined">
        Change Avatar
      </Button>
    </>
  );
};

export default Avatar;
