import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyArray, shortText } from "../../../utils/";
import { Close, P, TagName, Tags } from "./Styles";
import {
  deleteTag,
  removeTag,
} from "../../../feature/reducer/Product/createProduct";

const TagList = () => {
  const { tags } = useSelector((state) => state.createproduct);

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(
      deleteTag({
        pathOne: "v1",
        pathTwo: "romvetag",
        method: "post",
        values: { tag_id: id },
      })
    );

    const filtered = tags.filter((item) => item._id !== id);
    dispatch(removeTag(filtered));
  };

  return (
    <Tags>
      {!isEmptyArray(tags) &&
        tags.map((tagName, index) => (
          <TagName key={index}>
            <P>{shortText(tagName.tag_name, 10, 0, 10)}</P>
            <Close onClick={() => removeHandler(tagName._id)}>X</Close>
          </TagName>
        ))}
    </Tags>
  );
};

export default TagList;
