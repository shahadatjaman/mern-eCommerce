// Components
import NavBar from "../Components/Header/";
import Footer from "../Components/Footer/";
import Headercategories from "../Components/Header/Category";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
const Layout = ({ children, footer }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Headercategories />
      <NavBar />
      {children}
      {footer && <Footer />}
    </Box>
  );
};

export default Layout;
