import React, { useEffect } from "react";
// import { githubAuth } from "./api/auth";
// import { githubProvider } from "./config/authAction";
// import OAuth2Login from "react-simple-oauth2-login";
// import { getUser } from "./api/fetchData";
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
        {/* <OAuth2Login
       authorizationUrl="https://github.com/login/oauth/authorize"
       responseType="token"
       clientId="8aaf831776990ffb9220"
       redirectUri="http://localhost:3000/"
        onSuccess={onSuccess}
        onFailure={onFailure}
      /> */}
        {/* <button onClick={() => handleOnClick(githubProvider)}>
        Github Login
      </button> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
