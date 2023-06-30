import React from "react";
import Banner from "../../components/Banner";
import "../../assets/css/home.css";
import Whyus from "./Whyus";
import OurProducts from "./OurProducts";
const Home = () => {
  return (
    <>
      <section className="home-container">
        <Banner />
        <Whyus />
        <OurProducts />
    </section>
    </>
  );
};

export default Home;
