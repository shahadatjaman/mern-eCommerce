import * as React from "react";
import { useSelector } from "react-redux";
import Img from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Avatar = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <Stack direction="row" spacing={2}>
      <Img
        alt={user?.username}
        src={user?.avatar}
        sx={{ width: 100, height: 100, fontSize: 55 }}
      />
    </Stack>
  );
};

export default Avatar;
