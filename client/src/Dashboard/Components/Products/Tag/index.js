import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../Components/Shared/Form/Input";
import { useForm } from "../../../../hooks/useForm";
import { randomId, shortText } from "../../../../utils";

import { addTag, createTags } from "../../../feature/reducer/createProduct";
import { Close, Data, H5, Icon, P, Text, TextWrapper, Wrapper } from "./Styles";
import TagList from "./Tag";

const initia = {
  tag: "",
};

const Tag = () => {
  const { tags, product } = useSelector((state) => state.createproduct);
  const { formState, handleChange, handleFocus, handleBlur, clear } = useForm({
    init: initia,
    validate: true,
  });

  const dispatch = useDispatch();

  const { tag } = formState;

  const shortedText = shortText(tag.value, 15, 0, 15);

  const submitTag = () => {
    // dispatch(addTag({ tag_name: tag.value, _id: randomId() }));
    dispatch(createTags({ product_id: product._id, tag_name: tag.value }));
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
