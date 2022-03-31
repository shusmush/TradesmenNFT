import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import Header from "./Header";

function index() {
  return (
    <Box overflow="hidden">
      <Header />
      <Hero />
    </Box>
  );
}

export default index;
