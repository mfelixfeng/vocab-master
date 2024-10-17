import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./theme.ts";
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  </StrictMode>
);
