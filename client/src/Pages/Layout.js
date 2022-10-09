// Components
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
