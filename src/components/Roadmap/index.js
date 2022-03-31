import React from "react";
import Fade from "react-reveal/Fade";
// import { Fade } from "react-awesome-reveal";
import { Box, Image, Heading, VStack, Text } from "@chakra-ui/react";
import roadmap from "../../assets/images/roadmap.svg";
import roadmapbg from "../../assets/images/roadImage.png";
import "./index.css";
import con1 from "../../assets/images/carpenter_black_24dp.svg";
import con2 from "../../assets/images/construction_black_24dp.svg";
import con3 from "../../assets/images/engineering_black_24dp.svg";
import con4 from "../../assets/images/handyman_black_24dp.svg";
import con5 from "../../assets/images/plumbing_black_24dp.svg";
import con6 from "../../assets/images/hardware_black_24dp.svg";
import con7 from "../../assets/images/roofing_black_24dp.svg";
import touches from "../../assets/images/touches.png";

function index() {
  return (
    <Box
      position="relative"
      height="100%"
      width="100%"
      // bg="rgba(35, 2, 9, 0.4)"
      // bgSize="contain"
      // bgPos="center"
      // // py="15em"
      // bgRepeat="repeat-x"
      my={{ base: 8, lg: 10 }}
      // class="roadmap"
      id="roadmap"
    >
      <VStack>
        <Heading
          size="lg"
          bg="brand.300"
          py={3}
          px={10}
          borderRadius="lg"
          color="#fff"
          fontFamily="Patua One"
          mb={10}
        >
          Roadmap
        </Heading>
      </VStack>
      <div class="timeline">
        <div class="container left">
          <div class="content content-left">
            <Image src={con1} width="50px" />
            <Text fontFamily="Mogra" px={3} color={"gray.600"}>
              Early Roadmap Q2 Tradesmen Launch
            </Text>
          </div>
        </div>

        <div class="container right">
          <div class="content content-right">
            <Image src={con2} width="50px" />
            <Text fontFamily="Mogra" px={3} color={"gray.600"}>
              Form a DAO responsible for choosing families in need to receive
              assistance
            </Text>
          </div>
        </div>
        <div class="container left">
          <div class="content  content-left">
            <Image src={con3} width="50px" />
            <Text fontFamily="Mogra" px={3} color={"gray.600"}>
              20% of funds allocated to DAO to distribute with additional plans
            </Text>
          </div>
        </div>
        <div class="container right">
          <div class="content content-right">
            <Image src={con4} width="50px" />
            <Text fontFamily="Mogra" px={3} color={"gray.600"}>
              Staking created to stake your tradesmen to earn a % of all
              royalties
            </Text>
          </div>
        </div>
        <div class="container left">
          <div class="content  content-left">
            <Image src={con5} width="50px" />
            <Text fontFamily="Mogra" px={3} color={"gray.600"}>
              Merch line release which profits will go back to stakers
            </Text>
          </div>
        </div>
        <div class="container right">
          <div class="content content-right">
            <Image src={con7} width="50px" />
            <Text fontFamily="Mogra" px={3} color={"gray.600"}>
              Phase 2 Roadmap Release
            </Text>
          </div>
        </div>
      </div>
      <Image
        src={touches}
        objectFit="contain"
        width="auto"
        bottom="0"
        pos="absolute"
        left="0"
        zIndex="-50"
      />
    </Box>
  );
}

export default index;
