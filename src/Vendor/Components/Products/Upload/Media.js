import React from "react";
import { Actions, AddUrl, Images, MediaWrapper, Span } from "../Styles";

import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import AddFileURL from "./AddURL";

import { useDispatch, useSelector } from "react-redux";
import Img from "./Img";
import { Button } from "@mui/material";
import { uploadFile } from "../../../feature/reducer/Product/productVariation";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

const Media = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { product } = useSelector((state) => state.createproduct);

  const _param = useParams();

  const dispatch = useDispatch();

  const { productVariations, loading } = useSelector(
    (state) => state.variation
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fileChangeHandler = (e) => {
    const value = e.target.files[0];

    const formData = new FormData();

    formData.append("image", value);
    formData.append("test", "test");

    const values = {
      pathOne: "v1",
      pathTwo: "upload_file_variation",
      values: formData,
      method: "post",
    };

    if (value && product?._id) {
      dispatch(
        uploadFile({
          _id: product._id,
          ...values,
        })
      );
    } else {
      if (value) {
        dispatch(
          uploadFile({
            _id: _param.product_id,
            ...values,
          })
        );
      }
    }
  };

  return (
    <MediaWrapper isEmpty={productVariations.length < 0}>
      <Actions>
        {loading ? (
          <LoadingButton
            color="primary"
            loading={true}
            loadingPosition="start"
            variant="text"
          >
            Add files
            <input type="file" hidden onChange={fileChangeHandler} />
          </LoadingButton>
        ) : (
          <Button variant="text" component="label">
            Add files
            <input type="file" hidden onChange={fileChangeHandler} />
          </Button>
        )}

        <AddUrl>
          <Span onClick={openModal}>Add from URL</Span>
        </AddUrl>
      </Actions>
      <Images>
        {productVariations.length > 0 &&
          productVariations?.map((file, index) => (
            <Img index={index} file={file} />
          ))}
      </Images>
      <AddFileURL isOpen={isOpen} closeModal={closeModal} />
    </MediaWrapper>
  );
};

export default Media;
