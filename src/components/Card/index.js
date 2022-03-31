import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

function index({ children, id }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      minW={"300px"}
      // w="full"
      // borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      borderRadius={20}
      id={id}
    >
      {children}
    </Box>
  );
}

export default index;
