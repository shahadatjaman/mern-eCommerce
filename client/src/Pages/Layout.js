// Components
import NavBar from "../Components/Header";
import Footer from "../Components/Footer/";
import Headercategories from "../Components/Header/Category";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Headercategories />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
