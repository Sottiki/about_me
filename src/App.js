import React from "react";
import { Center, ChakraProvider } from "@chakra-ui/react";
import Frame from "./components/Frame/Frame";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (

    <ChakraProvider >
      <Router>
        <Center h="100%"><Frame>
          <Routes>

            <Route path="/a" element={<div>a</div>} />
            <Route path="/b" element={<div>b</div>} />
            <Route path="/c" element={<div>c</div>} />
            {/* 404実装 topぺーじをsottikiかabout_meで固定したい */}
          </Routes>  </Frame>
        </Center>
      </Router>
    </ChakraProvider>

  )
}

export default App
