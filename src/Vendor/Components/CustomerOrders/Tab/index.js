import { Box } from "@mui/material";
import { useState } from "react";
import { tabs } from "./data";
import { Li, Ul } from "./Styles";

export default function Tabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Ul>
        {tabs?.map((val, index) => (
          <Li ke={index}>{val.name}</Li>
        ))}
      </Ul>
    </Box>
  );
}
