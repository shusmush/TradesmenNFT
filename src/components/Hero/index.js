import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import TradesmenNFT from "../../TradesmenNFT.json";

import {
  Image,
  Box,
  Heading,
  Flex,
  HStack,
  VStack,
  Text,
  Input,
  Stack,
} from "@chakra-ui/react";

import Countdown from "../Countdown";

import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import bgImage from "../../assets/images/BgImage2.png";
import heroImage from "../../assets/images/heroImage.png";

export default function index({ accounts }) {
  return (
    <Box mb={{ lg: "20em" }} h={{ base: "100vh" }}>
      <Flex w="100%" align="center" justify="space-around" height="100vh">
        <Image
          src={bgImage}
          objectFit="cover"
          width="auto"
          pos="absolute"
          top="0"
          zIndex="-1000"
        />
        <VStack spacing={10} positon="relative" w="100%">
          <Heading
            fontFamily="Mogra"
            textShadow="1px 1px 1px #fb6087"
            fontSize={"4xl"}
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
          {/* <Countdown /> */}
          <MintContainer accounts={accounts} />
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
        <Image
          src={heroImage}
          objectFit="contain"
          width={{ base: "650px", md: "500px", lg: "650px" }}
          top="30"
          transform={{
            base: "translateY(50%)",
            md: "translateY(50%)",
            lg: "translateY(0)",
          }}
          pos="absolute"
          right="0"
          zIndex="-50"
          opacity={{ base: "0.4", md: "0.5", lg: "1" }}
        />
      </Flex>
    </Box>
  );
}

const tradesmenNFTAddress = "0x247fAa464Cc160e90544C1bF868824A664FfD7Af";

const MintContainer = ({ accounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [totalSupply, setTotalSupply] = useState("");
  const [maxSupply, setMaxSupply] = useState("");
  const isConnected = Boolean(accounts[0]);
  const currentAccount = accounts ? accounts[0] : "";

  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      tradesmenNFTAddress,
      TradesmenNFT.abi,
      signer
    );
    const totalSupply = await contract.totalSupply();
    const maxSupply = await contract.maxSupply();

    setTotalSupply(
      String(
        Math.round(parseFloat(ethers.utils.formatEther(totalSupply) * 10 ** 18))
      )
    );
    setMaxSupply(
      String(
        Math.round(parseFloat(ethers.utils.formatEther(maxSupply) * 10 ** 18))
      )
    );
  }, []);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        tradesmenNFTAddress,
        TradesmenNFT.abi,
        signer
      );

      try {
        const response = await contract.mint(
          currentAccount,
          BigNumber.from(mintAmount),
          {
            value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
          }
        );
        const afterResponse = await response.wait();
        console.log(response, afterResponse);
      } catch (error) {
        console.log(error);
        // console.log(error.reason);
        // console.log(error.address);
        // console.log(error.args);
        // console.log(error.method);
        // console.log(error.errorSignature);
        // console.log(error.errorArgs);
        // console.log(error.transaction);
      }
    }
  }

  const handleIncrement = () => {
    setMintAmount(mintAmount + 1);
    console.log(currentAccount);
    console.log(accounts);
  };
  const handleDecrement = () => {
    if (mintAmount <= 1) {
      return;
    }
    setMintAmount(mintAmount - 1);
  };
  return (
    <Box
      width={{ base: "80%", md: "500px" }}
      height="350px"
      borderRadius="xl"
      bgColor="#33354d"
      py={5}
    >
      {isConnected ? (
        <VStack spacing="10" align="center" justify="center">
          <Text color="#fb6087" fontSize="2xl" fontWeight="bold">
            {totalSupply} / {maxSupply}
          </Text>
          <HStack spacing={3}>
            <Box
              as="button"
              boxShadow="0px 3px #a0344f"
              color="white"
              bg="#fb6087"
              w="50px"
              h="35px"
              textAlign="center"
              alignItems="center"
              justify="center"
              borderRadius="md"
              onClick={handleDecrement}
            >
              <Text fontSize="lg" fontWeight="bold">
                <MinusIcon />
              </Text>
            </Box>
            <Box>
              <Input
                type="number"
                h="100px"
                color="white"
                fontWeight="bold"
                fontSize="3xl"
                maxW={{ base: "150px", md: "200px" }}
                textAlign="center"
                value={mintAmount}
              />
              <Text
                as="span"
                display="block"
                textAlign="center"
                color="white"
                fontSize="md"
              >
                <strong>0.1 ETH</strong> per NFT
              </Text>
            </Box>
            <Box
              as="button"
              boxShadow="0px 3px #a0344f"
              color="white"
              bg="#fb6087"
              w="50px"
              h="35px"
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              onClick={handleIncrement}
            >
              <Text fontSize="md" fontWeight="bold">
                <AddIcon />
              </Text>
            </Box>
          </HStack>
          <Box
            as="button"
            mt="10px"
            border="2px solid #fb6087"
            borderRadius="md"
            color="#fb6087"
            fontSize="lg"
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            onClick={handleMint}
          >
            MINT
          </Box>
        </VStack>
      ) : (
        <Stack align="center" justify="center" w="100%" h="100%">
          <Text
            color="#fb6087"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
          >
            {totalSupply}/ {maxSupply} NFTs <br />
            Minted
          </Text>
          <Text color="#fb6087" fontSize="xl" fontWeight="">
            Connect wallet to mint
          </Text>
        </Stack>
      )}
    </Box>
  );
};
