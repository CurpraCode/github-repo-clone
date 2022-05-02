import React, { useEffect } from "react";
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { getUserDetails } from "../api/fetchData";
import {
  userDetailsPending,
  userDetailsSuccess,
  userDetailsError,
} from "../features/userDetail";
import { useSelector, useDispatch } from "react-redux";
import { GoLocation } from "react-icons/go";
const Profile = () => {
  const { userD } = useSelector((state) => state.userDetails);
  console.log(userD);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails()
      .then((res) => {
        dispatch(userDetailsPending());
        dispatch(userDetailsSuccess(res));
        console.log(res);
      })
      .catch((err) => {
        dispatch(userDetailsError(err));
        console.log(err);
      });
  }, []);
  return (
    <Box mr="5rem" flex="1">
      <Box>
        <Box>
          <Image borderRadius="50rem" src={userD.avatar_url} alt="" />
          <Text fontWeight="bold" fontSize="2rem" mt="0.5rem">
            {userD.name}
          </Text>
          <Text fontSize="1rem" mb="0.9rem">
            {userD.login}
          </Text>
          <Text>{userD.bio}</Text>
          <Button
            m="1rem 0rem"
            p="0rem 0.1rem"
            width="90%"
            border="1px solid gray"
            mr="0.5rem"
            _focus={{
              outline: 0,
            }}
          >
            Follow
          </Button>
          <Text></Text>
          <Flex>
            <Text mr="0.5rem">{userD.followers}followers</Text>.
            <Text ml="0.7rem">{userD.following}following</Text>
          </Flex>
          <Box>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </Box>
        </Box>
        <Box>
          <Text display="flex" alignItems='center'>
            <GoLocation /> {userD.location}
          </Text>
          <Text>Achievements</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
