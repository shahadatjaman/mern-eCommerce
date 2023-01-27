// Components
import NavBar from "../Components/Header/";
import Footer from "../Components/Footer/";
import Headercategories from "../Components/Header/Category";
import { Box } from "@mui/material";

const Layout = ({ children, footer }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Headercategories />
      <NavBar />
      {children}
      {footer && <Footer />}
    </Box>
  );
};

export default Layout;
