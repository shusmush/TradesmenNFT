import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Slider from "../../components/Slider";
import Vision from "../../components/Vision";
import Roadmap from "../../components/Roadmap";
import Footer from "../../components/Footer";

const index = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <Box
      // w={"full"}
      // h="full"
      // backgroundImage={`url(${bgImage})`}
      // backgroundSize={"cover"}
      // backgroundPosition={""}
      position="relative"
      overflow="hidden"
    >
      <Header accounts={accounts} setAccounts={setAccounts} />
      <Hero accounts={accounts} />
      <About />
      <Slider />
      <Vision />
      <Roadmap />
      <Footer />
    </Box>
  );
};

export default index;
