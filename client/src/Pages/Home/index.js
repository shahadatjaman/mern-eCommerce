import NavBar from "../../Components/Header/";

import Slider from "../../Components/Home/Slider";

import Support from "../../Components/Home/Support";

import Products from "../../Components/Home/Products";
import Footer from "../../Components/Footer";

import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Support />
      <Products />
    </Layout>
  );
};

export default Home;
