import React, { useEffect } from "react";
import { Wrapper } from "./Styles";
import { H5 } from "../Styles";
import { Box, Chip } from "@mui/material";
import { useState } from "react";

import { callApi, shortText } from "../../../../utils";
import { useDispatch } from "react-redux";
import { addFilterdProducts } from "../../../../feature/reducer/product";
const Tags = () => {
  const [tags, setTags] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFilterdProducts({ products: [] }));
  };

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "gettags",
        method: "get",
        from: 0,
        to: 10,
      });

      if (res.tags) {
        setTags(res.tags);
      }
    })();
  }, []);
  return (
    <Wrapper>
      <H5>Tags</H5>
      <Box>
        {tags?.map((tag, i) => (
          <Chip
            key={i}
            sx={{ m: 1 }}
            label={shortText(tag.tag_name, 15, 0, 10)}
            variant="outlined"
            onClick={handleClick}
          />
        ))}
      </Box>
    </Wrapper>
  );
};

export default Tags;
