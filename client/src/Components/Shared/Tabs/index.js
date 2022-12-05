import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { Content, TabBar, TabPanelWrapper } from "./Style";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <TabBar label="Reviews(1)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Additional Information
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};
