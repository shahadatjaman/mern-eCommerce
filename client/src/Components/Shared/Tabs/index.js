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
import { checkRating } from "../../../utils";
import { useSort } from "../../../hooks/useSort";

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
  const [value, setValue] = useState(0);
  const [isCreated, setCreated] = useState(false);

  const { ratings } = useSelector((state) => state.rating);

  const { user } = useSelector((state) => state.user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sorted = useSort(ratings);

  useEffect(() => {
    if (user) {
      const isReviewed = checkRating(ratings, user._id);
      setCreated(isReviewed);
    }
  }, [ratings, user]);

  console.log(sorted);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          id="tab"
        >
          <TabBar label="Additional Information" {...a11yProps(0)} />
          <TabBar label="Description" {...a11yProps(1)} />
          <TabBar label={`Reviews(${ratings.length})`} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Additional Information
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium dolo
      </TabPanel>
      <TabPanel value={value} index={2}>
        {!isCreated && <CreateReview />}

        {sorted?.map((val, index) => (
          <Post val={val} key={index} />
        ))}
      </TabPanel>
    </Box>
  );
};
