import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  Collapse,
  Icon,
  // Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../../../assets/images/logo.svg";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom/";
import { HashLink } from "react-router-hash-link";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pos="absolute" top={0} left={0} w="100%">
      <Flex
        bg={"transparent"}
        color={useColorModeValue("gray.600", "white")}
        maxH={{ base: "50px", md: "80px" }}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"space-around"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <HashLink to="/">
          <HStack>
            <Image
              src={logo}
              objectFit={{ base: "" }}
              w={{ base: "50px", md: "80px" }}
            />
            <Text
              fontFamily="Mogra"
              textShadow="1px 1px 1px #fb6087"
              display={{ base: "none", lg: "block" }}
              color={"gray.600"}
            >
              TradesmenNFT
            </Text>
          </HStack>
        </HashLink>

        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>

        <HStack spacing={6}>
          <Text
            cursor="pointer"
            color={"gray.600"}
            display={{ base: "none", md: "block" }}
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("gray.800", "white"),
            }}
          >
            <IonIcon name="logo-discord" size="large"></IonIcon>
          </Text>
          <Text
            cursor="pointer"
            color={"gray.600"}
            display={{ base: "none", md: "block" }}
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("gray.800", "white"),
            }}
          >
            <IonIcon name="logo-twitter" size="large"></IonIcon>
          </Text>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"gray.600"}
            bg={"white"}
            size={"lg"}
            href={"#"}
            _hover={{
              bg: "#EC1500",
              color: "white",
            }}
          >
            Connect Your Wallet
          </Button>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            {/* <PopoverTrigger> */}
            <HashLink to={navItem.href}>
              <Text
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Text>
            </HashLink>
            {/* </PopoverTrigger> */}

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <HStack spacing={3}>
        <Text
          cursor="pointer"
          color={"gray.600"}
          display={{ base: "block" }}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("gray.800", "white"),
          }}
        >
          <IonIcon name="logo-discord" size="large"></IonIcon>
        </Text>
        <Text
          cursor="pointer"
          color={"gray.600"}
          display={{ base: "block" }}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("gray.800", "white"),
          }}
        >
          <IonIcon name="logo-twitter" size="large"></IonIcon>
        </Text>
        <Button
          display={{ base: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"gray.600"}
          bg={"white"}
          size={"lg"}
          href={"#"}
          border="1px solid #EC1500"
          _hover={{
            bg: "#EC1500",
            color: "white",
          }}
        >
          Connect Your Wallet
        </Button>
      </HStack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <HashLink to={href}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </HashLink>

        {/* {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )} */}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Vision",
    href: "/#vision",
  },
  {
    label: "RoadMap",
    href: "/#roadmap",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];
