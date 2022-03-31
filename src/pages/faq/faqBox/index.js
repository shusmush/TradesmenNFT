import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Colapsible from "../../../components/Colapsible";

const Faq = [
  {
    question: "HOW MANY TRADESMEN WILL THERE BE?",
    answer: "Maximum Supply will be 10,000",
  },
  {
    question: "WILL THERE BE A PRE-SALE?",
    answer:
      "Yes, we will award users with whitelist, opportunities through games, giveaways and events for a cheaper mint",
  },
  {
    question: "WHAT WILL BE THE MINT PRICE?",
    answer: "TBD",
  },
  {
    question: "WHEN WILL THE TRADESMENNFT BE MINTED?",
    answer: "Launch will be Early Q2. Check out our Discord for more details",
  },
  {
    question: "WHEN WILL THE TRADESMENNFT BE MINTED?",
    answer: "Launch will be Early Q2. Check out our Discord for more details",
  },
  {
    question: "WILL THERE BE A PRE-SALE?",
    answer:
      "Yes, we will award users with whitelist, opportunities through games, giveaways and events for a cheaper mint",
  },
];

function index() {
  return (
    <Box
      // margin="auto"
      w="100%"
      mb={5}
      padding={{ base: "10px", md: "15px", lg: "20px" }}
    >
      {Faq.map((i) => (
        <Colapsible question={i.question} answer={i.answer} />
      ))}
    </Box>
  );
}

export default index;
