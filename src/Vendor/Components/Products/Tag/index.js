import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../Shared/Form/Input";
import { useForm } from "../../../hooks/useForm";
import { shortText } from "../../../utils/";

import { createTags } from "../../../feature/reducer/Product/createProduct";
import { Data, H5, Icon, P, Text, TextWrapper, Wrapper } from "./Styles";
import TagList from "./Tag";
import { useParams } from "react-router-dom";

const initia = {
  tag: "",
};

const Tag = () => {
  const { product } = useSelector((state) => state.createproduct);
  const { formState, handleChange, handleFocus, handleBlur, clear } = useForm({
    init: initia,
    validate: true,
  });

  const _param = useParams();

  const dispatch = useDispatch();

  const { tag } = formState;

  const shortedText = shortText(tag.value, 15, 0, 15);

  const submitTag = () => {
    dispatch(
      createTags({
        pathOne: "v1",
        pathTwo: "createtag",
        values: {
          product_id: _param.product_id ? _param.product_id : product._id,
          tag_name: tag.value,
        },
        method: "post",
      })
    );
    clear();
  };

  return (
    <Wrapper>
      <Input
        type="text"
        name="tag"
        label="Tags"
        placeHolder="create tags"
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        value={tag.value}
        mb="0.8"
      />
      {tag.value.trim().length > 0 && (
        <TextWrapper onClick={submitTag}>
          <Data>
            <Icon>+</Icon>
            <Text>
              <H5>
                Add
                <P>{shortedText}</P>
              </H5>
            </Text>
          </Data>
        </TextWrapper>
      )}
      <TagList />
    </Wrapper>
  );
};

export default Tag;
