import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from './utils/themeUtil';
import LogoutFunction from './pages/LogoutFunction';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// import {
//   PropsRoute,
//   LoggedOutRoute
// } from './components/Routes';

import LoginPage from './pages/LogInPage';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage.js';
import ProfilePage from './pages/ProfilePage';
import DiscoverPage from './pages/DiscoverPage';
import MyFriendsPage from './pages/MyFriendsPage';
import MyTrovePage from './pages/MyTrovePage';

import Auth from './utils/Auth';

// remove tap delay, essential for MaterialUI to work properly

const App = () => {

  const [Authenticate, setAuthenticate] = useState({
    authenticated: false
  })
  console.log(Authenticate)
  useEffect(() => {
    // check if user is logged in on refresh
    toggleAuthenticateStatus()
  }, []);

  useEffect(() => {
    return () => {
      Auth.deauthenticateUser()
      localStorage.removeItem('token');
    }
  }, []);

  const toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    setAuthenticate({ authenticated: Auth.isUserAuthenticated() })

  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
          <Route exact path='/login' render={(props) => <LoginPage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/profile' render={(props) => <ProfilePage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
          <Route exact path='/mytrove' render={(props) => <MyTrovePage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />}/>
          <Route exact path='/discover' component={DiscoverPage} />
          <Route path='/friends' component={MyFriendsPage} />
          <Route path="/logout" render={(props) => <LogoutFunction {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
        </Switch>
      </ThemeProvider>
    </Router >
  )
}

export default App;
