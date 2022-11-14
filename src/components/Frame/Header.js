import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import Menues from "./Menu"


const Header = () => {
    return <Box w="100%" m="0 2rem">
        <Flex >
            <Heading > Header </Heading>
            <Spacer />
            <Menues />
        </Flex>

    </Box >

}

export default Header;
