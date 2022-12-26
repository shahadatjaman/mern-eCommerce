// Components
// import Slider from "../../Components/Home/Slider";

import Layout from "../Layout";
import Slider from "../../Components/Slider";
import TimerPart from "../../Components/Timer";
import Banner from "../../Components/Home/Banner";
import SpeOffer from "../../Components/Home/SpecialOffer";

import VerifiedCompany from "../../Components/Home/Verified";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];

    body.style.overflow = "auto";
  });
  return (
    <Layout footer={true}>
      <Slider />
      <TimerPart />
      <Banner />
      <SpeOffer />
      {/* <Categories /> */}
      <VerifiedCompany />
      {/* <Support />*/}
      {/* <Products /> */}
    </Layout>
  );
};

export default Home;
