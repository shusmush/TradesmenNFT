import React from "react";
import {
  Box,
  Image,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

import visionImg from "../../assets/images/visionImage.png";
import touches from "../../assets/images/touches.png";

const index = () => {
  return (
    <Box
      height={{ base: "70vh", lg: "100vh" }}
      position="relative"
      my={{ base: 20 }}
      id="vision"
    >
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Image
          src={visionImg}
          objectFit="contain"
          width={{ base: "100%", md: "45%" }}
          position={{ base: "absolute", md: "absolute" }}
          zIndex={{ base: "-60", md: "0" }}
          top={{ base: "50%", md: "-15%" }}
          transform={{ base: "translateY(-50%)", md: "translateY(0)" }}
          opacity={{ base: "0.5", md: "1" }}
        />
        <Text w="45%"></Text>
        <VStack
          spacing={10}
          w={{ base: "100%", md: "60%" }}
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
            Vision
          </Heading>
          <Text
            fontSize="xl"
            lineHeight={{ lg: "300%" }}
            textAlign="center"
            px={5}
          >
            Our Vison is to create a community of tradesmen that enjoy serving
            other people. We will be using a portion of the funds to help
            families in need by providing the funds for a new plumbing system,
            electrical system, or hvac. With that being said out main mission is
            also serving our tradesmen holders by creating a unique society,
            providing utility, metaverse inclusion and collaboration, and
            different ways of passive income for staking
          </Text>
          <Image
            src={touches}
            objectFit="contain"
            width="auto"
            bottom="0"
            pos="absolute"
            right="0"
            zIndex="-50"
            opacity={{ base: "0", md: "1" }}
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default index;
