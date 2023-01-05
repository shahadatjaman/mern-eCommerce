import React from "react";

import { Box, List, ListItem, Typography } from "@mui/material";
import { Image } from "./Styles";
import { useNavigate } from "react-router-dom";

const Categories = ({ categories }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/categories");
  };
  return (
    <Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Typography>All categories</Typography>
        {categories &&
          categories.map((cat, index) => {
            return (
              <>
                {cat.category_name !== "All categories" && (
                  <ListItem key={index} my={2} onClick={navigateHandler}>
                    <Box sx={{ width: "20px", marginRight: 1 }}>
                      <Image src={cat.icon_name} />
                    </Box>

                    {cat.category_name}
                  </ListItem>
                )}
              </>
            );
          })}
      </List>
    </Box>
  );
};

export default Categories;
