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
          pathOne: "vendor",
          pathTwo: "getproducts",
          method: "post",
          from: 0,
          to: 15,
        })
      );
    } else {
      const res = await callApi({
        values: { category_id: newValue },
        pathOne: "vendor",
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
            <Tab label="All" value="1" />
            <Tab label="Furniture" value="638d70f0c57c08cdc0b59c88" />
            <Tab label="Electronics" value="638d7127c57c08cdc0b59c90" />
            <Tab label="Fashion" value="638d7154c57c08cdc0b59c98" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};

export default LabTabs;
