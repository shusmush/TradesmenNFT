import React from "react";
import { Box, Image, Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import "./index.css";
import sliderImg from "../../assets/images/sliderImg.png";
import Card from "../Card";
import nft1 from "../../assets/images/nft1.png";
import nft2 from "../../assets/images/nft2.png";
import nft3 from "../../assets/images/nft3.png";
import nft4 from "../../assets/images/nft4.png";
import nft5 from "../../assets/images/nft1.png";

let ImageLoop = [nft1, nft2, nft3, nft4, nft5, nft1, nft2, nft3, nft4, nft5];

function index() {
  const [isMediumSize] = useMediaQuery("(max-width: 700px)");
  const [isSmallSize] = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      position="relative"
      height={{ base: "70vh", md: "70vh" }}
      width="100%"
      bg={`url(${sliderImg})`}
      // bgColor={isSmallSize ? "gray.100" : "transparent"}
      bgSize={{ base: "cover", lg: "contain" }}
      bgPos="left top"
      // py="15em"
      bgRepeat="repeat-x"
      // ={{ lg: "20em" }}
      class="slider"
    >
      {/* <Flex align="center" justify="flex-start" height="100%" overflow="auto"> */}
      {/* <Image
          src={sliderImg}
          objectFit="contain"
          width="100%"
          h="100%"
          pos="absolute"
          top="0"
          zIndex="-10"
          borderRadius={20}
        /> */}
      <HStack w="auto" height="100%">
        {ImageLoop.map((item) => (
          <Card id="items">
            <Image src={item} width="100%" objectFit="contain" />
          </Card>
        ))}
      </HStack>
      {/* </Flex> */}
    </Box>
  );
}

export default index;
