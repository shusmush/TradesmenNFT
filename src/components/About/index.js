import React from "react";
import { Box, Image, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import touches from "../../assets/images/touches.png";

function index() {
  return (
    <Box
      position="relative"
      height="auto"
      width="100%"
      mb={{ base: "0", md: 10 }}
      pb={{ base: "0", md: 10 }}
      id="about"
    >
      <Image
        src={touches}
        objectFit="contain"
        width="auto"
        top="0"
        pos="absolute"
        right="0"
        zIndex="-50"
        opacity={{ base: "0.5", md: "1" }}
      />
      <VStack
        spacing={10}
        w={{ base: "100%", lg: "60%" }}
        justify="center"
        margin="auto"
        px={5}
        // align="center"
        textAlign="center"
      >
        <Heading
          size="lg"
          bg="brand.300"
          py={3}
          px={10}
          borderRadius="lg"
          color="#fff"
          fontFamily="Patua One"
          // textDecoration="line-through 5px #E9C556"
        >
          About
        </Heading>
        <Text fontSize="xl" lineHeight={{ lg: "300%" }} textAlign="center">
          <Text fontWeight="bold">What is the Tradesmen NFT?</Text> We see
          countless apes, bulls and robots being created for the metaverse...
          and while that's cool don't forget you will need the work force
          including construction workers, plumbers, electricians, and hvac
          techs. <br />
          That's where we come in! The tradesmen NFT is a fun take on many of
          the trade professionals including Plumbers, Hvac , Electricians, and
          Construction workers. Created by 2 tradesmen that grew up working in a
          family business.
        </Text>
      </VStack>
      <Image
        src={touches}
        objectFit="contain"
        width="auto"
        opacity={{ base: "0.5", md: "1" }}
        bottom="0"
        pos="absolute"
        left="0"
        zIndex="-50"
      />
    </Box>
  );
}

export default index;
