import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import React from "react";

const Menues = () => {
    return <Box>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                他も知りたい
            </MenuButton>
            <MenuList>
                <MenuItem>トップページ</MenuItem>
                <MenuItem> Sottikiについて</MenuItem>
                <MenuItem>ポートフォリオ</MenuItem>
                <MenuItem>SNS</MenuItem>
            </MenuList>
        </Menu>
    </Box >

}

export default Menues;
