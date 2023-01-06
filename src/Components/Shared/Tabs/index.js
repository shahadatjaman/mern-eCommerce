import * as React from "react";

import Tabs from "@mui/material/Tabs";
import { Content, TabBar, TabPanelWrapper } from "./Style";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreateReview from "../../ProductDetails/Review/CreateReview";
import Post from "../../ProductDetails/Review/Post";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { callApi, checkRating } from "../../../utils";
import { useSort } from "../../../hooks/useSort";
import { useParams } from "react-router-dom";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Content>
          <Typography>{children}</Typography>
        </Content>
      )}
    </TabPanelWrapper>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const BasicTabs = () => {
  const [product, setProduct] = useState(null);
  const [value, setValue] = useState(0);
  const [isCreated, setCreated] = useState(false);

  const { ratings } = useSelector((state) => state.rating);

  const { user } = useSelector((state) => state.auth);

  const sorted = useSort(ratings);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproduct",
        method: "get",
        _id: id,
      });

      if (res.product) {
        setProduct(res.product);
      }
    })();
  }, [id]);

  // CHECK REVIE EXIST OR NOT
  useEffect(() => {
    if (user) {
      const isReviewed = checkRating(ratings, user._id);
      setCreated(isReviewed);
    }
  }, [ratings, user]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          id="tab"
        >
          {/* <TabBar disabled label="Additional Information" {...a11yProps(0)} /> */}
          <TabBar label="Description" {...a11yProps(0)} />
          <TabBar label={`Reviews(${ratings.length})`} {...a11yProps(1)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Additional Information
      </TabPanel> */}
      <TabPanel value={value} index={0}>
        {product && product.short_desc}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {!isCreated && user && <CreateReview />}

        {ratings.length > 0 &&
          sorted?.map((val, index) => <Post val={val} key={index} />)}
      </TabPanel>
    </Box>
  );
};
