import React, { useState, useEffect } from "react";
import { Box, Text, Input, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginPending, loginSuccess, loginError } from "../features/login";
import { getUser } from "../api/fetchData";
import AppSpinner from "./AppSpinner";
import { BiCaretDown, BiStar } from "react-icons/bi";
import moment from "moment";

const Repos = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const { user } = useSelector((state) => state.login);

  console.log(user);
  useEffect(() => {
    setLoading(true);
    getUser()
      .then((res) => {
        console.log(res, "reso");
        dispatch(loginPending());
        dispatch(loginSuccess(res));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        dispatch(loginError(err));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchText = (e) => {
    setFilter(e.target.value);
  };
  console.log(filter);
  let dataSearch = user.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        ?.toString()
        ?.toLowerCase()
        ?.includes(filter.toString().toLowerCase())
    );
  });
  return (
    <Box flex="2">
      <Box padding="0.9rem 0.3rem" borderBottom="1px solid gray">
        <Flex alignItems="center">
          <Input
            type="text"
            placeholder="Find a repository..."
            value={filter}
            onChange={searchText.bind(this)}
            border="1px solid gray"
            padding="0.1rem 0.5rem"
            mr="1rem"
            size="md"
            _focus={{
              outline: 0,
            }}
          />
          <Flex>
            <Flex
              bg="gray.100"
              alignItems="center"
              borderRadius="0.3rem"
              padding=" 0.1rem 0.9rem"
              border="1px solid gray"
              mr="0.5rem"
            >
              Type <BiCaretDown />
            </Flex>
            <Button
              border="1px solid gray"
              mr="0.5rem"
              _focus={{
                outline: 0,
              }}
            >
              Language <BiCaretDown />
            </Button>
            <Button
            sm="sm"
              border="1px solid gray"
              mr="0.5rem"
              _focus={{
                outline: 0,
              }}
            >
              Sort <BiCaretDown />
            </Button>
          </Flex>
        </Flex>
      </Box>
      {loading ? (
        <AppSpinner />
      ) : (
        <Box>
          {dataSearch.map((users) => {
            return (
              <Flex
                alignItems="center"
                key={users.id}
                borderBottom="1px solid gray"
                padding="0.9rem 0.3rem"
                justifyContent="space-between"
              >
                <Box>
                  <Flex alignItems="center">
                    <a href={users.html_url}>
                      <Text color="#58a6ff" fontSize="1.3rem" fontWeight="bold">
                        {users.name}
                      </Text>
                    </a>
                    <Text
                      as="span"
                      ml="1rem"
                      fontSize="0.6rem"
                      fontWeight="bold"
                      padding="0.1rem 0.5rem"
                      borderRadius="1rem"
                      border="1px solid gray"
                    >
                      {users.visibility}
                    </Text>
                  </Flex>
                  <Text  fontWeight="bold">{users.description || ""}</Text>
                  <Flex
                    padding="0.9rem 0.1rem"
                    justifyContent="space-between"
                    fontSize="0.7rem"
                    fontWeight="bold"
                  >
                    <Text>{users.language || null}</Text>
                    {users.stargazers_count > 0 ? (
                      <Flex alignItems="center">
                        <BiStar />
                        <Text>{users.stargazers_count}</Text>
                      </Flex>
                    ) : (
                      ""
                    )}
                    <Text>
                      Updated {moment(users.updated_at).format("DD MMM, YYYY")}
                    </Text>
                  </Flex>
                </Box>
                <Flex borderLeftRadius="0.5rem" fontSize="0.9rem">
                  <Flex
                    bg="gray.100"
                    alignItems="center"
                    borderLeftRadius="0.3rem"
                    borderRight="1px solid gray"
                    padding="0.1rem 0.6rem"
                    border="1px solid gray"
                  >
                    <BiStar />
                    <Text ml="0.5rem"> Star</Text>
                  </Flex>
                  <Flex
                    bg="gray.100"
                    borderRightRadius="0.3rem"
                    alignItems="center"
                    padding=" 0.1rem 0.6rem"
                    border="1px solid gray"
                  >
                    <BiCaretDown />
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Repos;
