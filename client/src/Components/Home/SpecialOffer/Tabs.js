import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useDispatch } from "react-redux";
import { fetchProducts, getProducts } from "../../../feature/reducer/product";
import { callApi } from "../../../utils";

const LabTabs = ({ children }) => {
  const [value, setValue] = React.useState("1");

  const dispatch = useDispatch();

  const handleChange = async (event, newValue) => {
    setValue(newValue);

    if (newValue.toString() === "1") {
      dispatch(
        fetchProducts({
          pathOne: "v1",
          pathTwo: "getproducts",
          method: "post",
          from: 0,
          to: 15,
        })
      );
    } else {
      const res = await callApi({
        values: { category_id: newValue },
        pathOne: "v1",
        pathTwo: "getproducts",
        method: "post",
        from: 0,
        to: 15,
      });

      dispatch(getProducts(res.products));
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        backgroundColor: "white",
        padding: 1,
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Recent Products" value="1" />
            <Tab label="Juwelry" value="63ab3e66ba6e5a0fde1ec5fb" />
            <Tab label="Electronics" value="63ab3d9bba6e5a0fde1ec5ef" />
            <Tab label="Apparel" value="63ab3d7fba6e5a0fde1ec5eb" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};

export default LabTabs;
