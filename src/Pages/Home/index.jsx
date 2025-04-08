import React from "react";

import Navbar from "../../Layoutes/Navbar";
import Header from "./Header";

import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};

export default Home;
