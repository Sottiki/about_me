import React from "react"
import { Box, Center, Flex } from "@chakra-ui/react"
import Header from "./Header"
import FooterSumple from "./Footer";

function Frame(children) {
    return (
        <Flex m="2rem auto auto" flexDirection="column" minHeight="100vh">
            <Center minWidth="700px" >
                <Header />
            </Center>

            <Box mt="1rem" minWidth="700px">
                {children.children}
            </Box>

            <Box m="auto auto 2rem">
                <FooterSumple />
            </Box>
        </Flex >

    )

}

export default Frame;
