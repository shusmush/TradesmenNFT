import React from "react";
import {
  Box,
  Collapse,
  Text,
  Button,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import IonIcon from "@reacticons/ionicons";

function CollapseEx({ ...props }) {
  const { isOpen, onToggle, onClose, defaultIsOpen, id } = useDisclosure();

  const openCollapsible = () => {
    onToggle();
  };

  return (
    <Box
      border="2px solid black"
      width={{ base: "80%", md: "60%" }}
      margin="auto"
      mb={5}
      padding={{ base: "10px", md: "15px", lg: "20px" }}
      borderRadius={5}
      color="gray.600"
      // cursor="pointer"
    >
      <Box onClick={openCollapsible} fontWeight="Bold" cursor="pointer">
        <HStack justify="space-between">
          <Text>{props.question}</Text>
          <IonIcon
            name={isOpen ? "remove-circle" : "add-circle"}
            size="large"
          />
          {/* <IonIcon name="add-circle" size="large"></IonIcon>
          <IonIcon name="remove-circle" size="large"></IonIcon> */}
        </HStack>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box
          py="10px"
          px={{ base: "10px" }}
          mt=""
          // bg="teal.500"
          // rounded="md"
          // shadow="md"
        >
          <Text>{props.answer}</Text>
        </Box>
      </Collapse>
    </Box>
  );
}

export default CollapseEx;
