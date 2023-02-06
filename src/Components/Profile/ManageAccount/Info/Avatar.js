import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Img from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
import { uploadAvatar } from "../../../../feature/reducer/user";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
const Avatar = () => {
  const [img, setImg] = useState("");

  const { user, isLoadingUpload } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const value = e.target.files[0];
    if (value) {
      var reader = new FileReader();
      reader.onload = function () {
        // The file's text will be printed here
        setImg(reader.result);
      };

      let formData = new FormData();
      formData.append("image", value);

      dispatch(
        uploadAvatar({
          pathOne: "auth",
          pathTwo: "upload_avatar",
          method: "post",
          values: formData,
        })
      );

      reader.readAsDataURL(value);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        {img ? (
          <Img
            alt={user?.firstName}
            src={img}
            sx={{ width: 150, height: 150, fontSize: 55 }}
          />
        ) : (
          <Img
            alt={user?.username}
            src={user?.avatar}
            sx={{ width: 150, height: 150, fontSize: 55 }}
          />
        )}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}
      >
        {isLoadingUpload ? (
          <LoadingButton
            color="secondary"
            loading={true}
            loadingPosition="start"
            startIcon={<SendIcon />}
            variant="outlined"
          >
            Uploading...
          </LoadingButton>
        ) : (
          <Button component="label" variant="outlined">
            Upload File
            <input type="file" hidden onChange={changeHandler} />
          </Button>
        )}
      </Box>
    </>
  );
};

export default Avatar;
