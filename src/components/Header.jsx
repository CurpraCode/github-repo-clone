import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { BiStar } from "react-icons/bi";
import { IoCubeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Box padding="1rem 0.3rem">
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        borderBottom="1px solid gray"
      >
        <Flex alignItems="center">
          <FiBookOpen />
          <Text>Overview</Text>
        </Flex>
        <Flex alignItems="center" borderBottom="2px solid red">
          <FiBook />
          <Text>Repositories</Text>
        </Flex>
        <Flex alignItems="center">
          <Text>Projects</Text>
        </Flex>
        <Flex alignItems="center">
          <IoCubeOutline />
          <Text>Packages</Text>
        </Flex>

        <Flex alignItems="center">
          <BiStar />
          <Text>Stars</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
