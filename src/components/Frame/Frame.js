import React from "react"
import { Box, Center, Stack } from "@chakra-ui/react"
import Header from "./Header"
import FooterSumple from "./Footer";

function Frame(children) {
    return (
        <Stack mt="2rem">
            <Center minWidth="700px" >
                <Header />
            </Center>
            {children.children}
            <Box mt="auto">
                <FooterSumple />
            </Box>

        </Stack>

    )

}

export default Frame;
