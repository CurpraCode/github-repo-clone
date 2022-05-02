import React from "react";
import Repos from "./components/Repos";
import Header from "./components/Header";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Profile from "./components/Profile";
function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Flex maxWidth="1324px" margin="0 auto">
          <Profile />
          <Repos />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
