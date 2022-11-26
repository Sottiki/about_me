import { Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import Menues from "./Menu"


const Header = () => {
    return <Box w="100%" m="0 2rem">
        <Flex mb="2rem">
            <Heading > Header </Heading>
            <Spacer />
            <Menues />

        </Flex>
        <Divider />
    </Box >

}

export default Header;
