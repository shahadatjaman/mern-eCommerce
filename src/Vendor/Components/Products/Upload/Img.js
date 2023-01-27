import React from "react";
import { Delete, DeleteAction, Image, ImgWrapper } from "../Styles";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFile,
  removeVariation,
} from "../../../feature/reducer/Product/productVariation";

const Img = ({ file }) => {
  const { productVariations } = useSelector((state) => state.variation);

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    const removed = productVariations.filter((item) => item._id !== id);

    // REMOVE VARIATION FROM LOCAL GLOBAL STATE
    dispatch(removeFile(removed));

    // REMOVE VARIATION FROM CLOUD
    dispatch(
      removeVariation({
        pathOne: "v1",
        pathTwo: "removevariation",
        values: { variation_id: id },
        method: "post",
      })
    );
  };

  return (
    <ImgWrapper>
      <Image src={file.variation_img} alt="img" />
      <DeleteAction>
        <Delete onClick={() => removeHandler(file._id)}>
          <AiFillDelete />
        </Delete>
      </DeleteAction>
    </ImgWrapper>
  );
};

export default Img;
