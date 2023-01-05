import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { callApi } from "../../../utils";
import { Img, ImgWrapper } from "./Styles";

const Image = ({ _id }) => {
  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id,
        pathOne: "v1",
        pathTwo: "getvariation",
        method: "get",
      });

      setVariation(res.variation);

      if (res.totalRating) {
        setTotalRating(res.totalRating);
      }
    })();
  }, [_id]);

  console.log(variation);
  return (
    variation && (
      <ImgWrapper>
        <Img src={variation?.variation_img} alt="phone" />{" "}
      </ImgWrapper>
    )
  );
};

export default Image;
