import React, { useState, useEffect } from "react";
import { Box, Text, Input, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginPending, loginSuccess, loginError } from "../features/login";
import { getUser } from "../api/fetchData";
import AppSpinner from "./AppSpinner";
import { BiCaretDown, BiStar } from "react-icons/bi";


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
    <Box>
      <Box padding="0.9rem 0.3rem" borderBottom="1px solid gray">
        <Flex alignItems="center">
          <Input
            type="text"
            placeholder="Find a repository..."
            value={filter}
            onChange={searchText.bind(this)}
          />
          <Flex>
            <Button
              border="1px solid gray"
              _focus={{
                outline: 0,
              }}
            >
              Type <BiCaretDown />
            </Button>
            <Button
              border="1px solid gray"
              _focus={{
                outline: 0,
              }}
            >
              Language <BiCaretDown />
            </Button>
            <Button
              border="1px solid gray"
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
                  <Flex>
                    <a href={users.html_url}>
                      <Text color="blue">{users.name}</Text>
                    </a>
                    <Text as="span" ml="1rem">
                      {users.visibility}
                    </Text>
                  </Flex>
                  <Text>{users.description || ""}</Text>
                  <Flex padding="0.9rem 0.1rem" justifyContent="space-between">
                    <Text>{users.language || null}</Text>
                    {users.stargazers_count > 0 ? (
                      <Flex alignItems="center">
                        <BiStar />
                        <Text>{users.stargazers_count}</Text>
                      </Flex>
                    ) : (
                      ""
                    )}
                    <Text>Updated {users.updated_at}</Text>
                  </Flex>
                </Box>

                <Button
                  border="1px solid gray"
                  _focus={{
                    outline: 0,
                  }}
                >
                  <BiStar /> STAR <BiCaretDown />
                </Button>
              </Flex>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Repos;
