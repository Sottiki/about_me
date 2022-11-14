import React from "react";
import { Center, ChakraProvider } from "@chakra-ui/react";
import Frame from "./components/Frame/Frame";

function App() {
  return (
    <>
      <ChakraProvider >
        <Center>
          <Frame>
            <div>a</div>
          </Frame>
        </Center>
      </ChakraProvider>
    </>
  )
}

export default App
