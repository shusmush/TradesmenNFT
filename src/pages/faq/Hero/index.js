import bgImage from "../../../assets/images/BgImage2.png";
import heroImage from "../../../assets/images/heroImage.png";
import { Image, Box, Heading, Flex, VStack } from "@chakra-ui/react";

import Countdown from "../../../components/Countdown";
import Faqbox from "../faqBox";

import React from "react";

export default function index() {
  return (
    <Box
      py={{ base: "", md: "5", lg: "32" }}
      bg={`url(${bgImage})`}
      bgSize="cover"
      bgRepeat="repeat-y"
      position="left top"
      height={{ base: "100vh", md: "auto" }}
    >
      <VStack
        w="100%"
        align="center"
        h="100%"
        justify="center"
        // height="100vh"
        flexDirection="column"
      >
        {/* <Image
          src={bgImage}
          objectFit="cover"
          width="auto"
          pos="absolute"
          top="0"
          zIndex="-1000"
          // h="100vh"
        /> */}
        <Heading fontSize="2xl">FAQ</Heading>
        <Faqbox />

        {/* <VStack spacing={10} positon="relative">
          <Heading
            fontFamily="Mogra"
            textShadow="1px 1px 1px #fb6087"
            size={"4xl"}
            color={"gray.600"}
          >
            <Heading
              fontFamily="Mogra"
              textShadow="1px 1px 1px #fb6087"
              size={"lg"}
              color={"gray.600"}
            >
              The
            </Heading>
            TradesmenNFT
          </Heading>
          <Countdown />
          <Heading
            size={"4xl"}
            color={"#2D85AD"}
            fontFamily="Patua One"
            transform="rotate(-5deg)"
            // pos="absolute"
            // top="50%"
            // zIndex="10"
          >
            <p>To Mint</p>
          </Heading>
        </VStack>
        <Box></Box>
        <Image
          src={heroImage}
          objectFit="contain"
          width="650px"
          top="30"
          pos="absolute"
          right="0"
          zIndex="-50"
        /> */}
      </VStack>
    </Box>
  );
}
