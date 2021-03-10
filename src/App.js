import React, { useState, useEffect } from "react";
import './App.css';
import Routes from './Routes';
import Appbar from './components/Appbar';
import { Theme } from './Theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import KavosApi from "./KavosApi";
import { decode } from "jsonwebtoken";
import UserContext from "./context/UserContext";
import useLocalStorage from './hooks/useLocalStorage';

export const LOCAL_TOKEN = "kavos-token";

// function App() {
//   return (
//     <MuiThemeProvider theme={Theme}>
//       <div className="App">
//         <Appbar />
//         <Routes />
//       </div>
//     </MuiThemeProvider>
//   );
// }

// export default App;


function App() {
  const [token, setToken] = useLocalStorage(LOCAL_TOKEN);
  const [currentUser, setCurrentUser] = useState();
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = decode(token);
          // put the token on the Api class so it can use it to call the API.
          KavosApi.token = token;
          let currentUser = await KavosApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  const handleLogOut = () => {
    setCurrentUser(null);
    setToken(null);
  };

  if (!infoLoaded) return  <div>Loading....</div>;

  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Appbar handleLogOut={handleLogOut} />
          <Routes setToken={setToken} />
        </UserContext.Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;