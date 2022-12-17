import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import { IconImg, Img, MentItems, MenuItem } from "../../Shared/Drawer/Styles";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <CategoryIcon color="red" sx={{ marginRight: 1 }} /> All Categories
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <MentItems>
            {categories &&
              categories.map((item, index) => (
                <>
                  {item.category_name !== "All categories" && (
                    <MenuItem key={index}>
                      <NavLink to={"/categories"}>
                        <IconImg>
                          <Img src={item.icon_name} alt={item.category_name} />
                        </IconImg>{" "}
                        {item.category_name}
                      </NavLink>
                    </MenuItem>
                  )}
                </>
              ))}
          </MentItems>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Categories;
