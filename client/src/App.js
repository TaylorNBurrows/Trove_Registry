import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import theme from './utils/themeUtil'
import MyFriendsPage from './pages/MyFriendsPage'
import { Router, Switch } from 'react-router-dom'

import {
  PropsRoute,
  LoggedOutRoute
} from './components/Routes';

import LoginPage from './pages/LogInPage';
import LandingPage from './pages/LandingPage';
import LogoutFunction from './pages/LogoutFunction';
import SignupPage from './pages/SignupPage.js';
import ProfilePage from './pages/ProfilePage';
import DiscoverPage from './pages/DiscoverPage';

import Auth from './utils/Auth';

// remove tap delay, essential for MaterialUI to work properly

const App = () => {

  const [Authenticate, setAuthenticate] = useState({
    authenticated: false
  })

  useEffect(() => {
    // check if user is logged in on refresh
    toggleAuthenticateStatus()
  }, []);

  const toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    setAuthenticate({ authenticated: Auth.isUserAuthenticated() })
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container direction="row">
          <Switch>
            <PropsRoute exact path='/' component={LandingPage} toggleAuthenticateStatus={toggleAuthenticateStatus} />
            <LoggedOutRoute exact path='/login' component={LoginPage} toggleAuthenticateStatus={toggleAuthenticateStatus} />
            <LoggedOutRoute exact path='/signup' component={SignupPage} />
            <LoggedOutRoute exact path='/profile' component={ProfilePage} />
            <LoggedOutRoute exact path='/discover' component={DiscoverPage} />
            <LoggedOutRoute exact path='/myfriends' component={MyFriendsPage} />
            <LoggedOutRoute exact path='/logout' component={LogoutFunction} />
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>

  )
}

export default App;
