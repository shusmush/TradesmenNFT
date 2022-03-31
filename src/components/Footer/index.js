import React from "react";
import {
  Box,
  Image,
  Container,
  VStack,
  HStack,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

import logo2 from "../../assets/images/logo2.png";
import logo from "../../assets/images/logo.svg";
import IonIcon from "@reacticons/ionicons";

function index() {
  const navItem = [
    { title: "About", href: "/#about" },
    { title: "Vision", href: "/#vision" },
    { title: "Roadmap", href: "/#roadmap" },
    { title: "FAQ", href: "/faq" },
  ];

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box bgColor="#f4f4f4">
      <Container maxW="container.xl">
        <Box
          bg={`url(${logo2})`}
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          height={{ base: "70vh", md: "50vh" }}
        >
          <Flex
            w="100%"
            align="center"
            height="100%"
            flexDirection={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Box w="100%">
              <HashLink to="/">
                <VStack spacing={0} w="100%" justify="center" h="full">
                  <Image src={logo} />
                  <Text
                    fontFamily="Mogra"
                    textShadow="1px 1px 1px #EC1500"
                    // display={{ base: "", lg: "block" }}
                    color={"gray.600"}
                  >
                    TradesmenNFT
                  </Text>
                </VStack>
              </HashLink>
            </Box>

            <VStack w="100%" h="full" justify="center">
              <Heading size="sm">Navigation</Heading>
              <VStack spacing={0}>
                {navItem.map((item) => (
                  <HashLink to={item.href}>
                    <Text
                      p={2}
                      fontSize={"md"}
                      fontWeight={600}
                      color={linkColor}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                    >
                      {item.title}
                    </Text>
                  </HashLink>
                ))}
              </VStack>
            </VStack>

            <VStack w="100%" spacing={5} h="full" justify="center">
              <Heading size="sm">Join Our Community</Heading>

              <HStack>
                <Button
                  size="md"
                  bg="#EC1500"
                  color="white"
                  _hover={{
                    bg: "brand.300",
                    color: "gray.600",
                  }}
                  leftIcon={<IonIcon name="logo-discord" size=""></IonIcon>}
                >
                  Discord
                </Button>
                <Button
                  size="md"
                  bg="#EC1500"
                  color="white"
                  _hover={{
                    bg: "brand.300",
                    color: "gray.600",
                  }}
                  leftIcon={<IonIcon name="logo-twitter" size=""></IonIcon>}
                >
                  Twitter
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </Box>
      </Container>
      <Box
        w="100%"
        bgColor="#dddddd"
        h="5vh"
        textAlign="center"
        lineHeight="5vh"
      >
        Copyright © 2022. Tradesmen NFT. All right reserved
      </Box>
    </Box>
  );
}

export default index;
