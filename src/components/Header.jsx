import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { BiStar, BiBookContent } from "react-icons/bi";
import { IoCubeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Box padding="3rem 0rem"  >
      <Flex
      // flex="2"
        alignItems="center"
        justifyContent="space-evenly"
        // maxWidth="900px"
        // margin="0 auto"
        borderBottom="1px solid gray"
      >
        <Flex alignItems="center">
          <FiBookOpen />
          <Text  ml="0.5rem">Overview</Text>
        </Flex>
        <Flex alignItems="center" borderBottom="2px solid red">
          <FiBook />
          <Text ml="0.5rem">Repositories</Text>
        </Flex>
        <Flex alignItems="center">
        <BiBookContent/>
          <Text  ml="0.5rem">Projects</Text>
        </Flex>
        <Flex alignItems="center">
          <IoCubeOutline />
          <Text  ml="0.5rem">Packages</Text>
        </Flex>

        <Flex alignItems="center">
          <BiStar />
          <Text  ml="0.5rem">Stars</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
