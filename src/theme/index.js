import { extendTheme, theme as base } from "@chakra-ui/react";
import "./styles.css";
const theme = extendTheme({
  colors: {
    brand: {
      50: "#FACE08",
      100: "#230209",
      200: "EC1500",
      300: "#BFE5F3",
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
});

export default theme;
