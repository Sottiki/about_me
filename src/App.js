import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return <ChakraProvider>
    <Header />
    <Box>ボデイ</Box>
    <Box>フッタあ</Box>
  </ChakraProvider>
}

export default App
