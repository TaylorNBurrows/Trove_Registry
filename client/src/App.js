import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import theme from './utils/themeUtil'
import Nav from './components/Nav/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

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
import MyFriendsPage from './pages/MyFriendsPage'

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
          <Switch>
            <Route exact path='/' render={(props) => <LandingPage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
            
            <Route exact path='/login' render={(props) => <LoginPage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/discover' component={DiscoverPage} />    
            <Route path='/myfriends' component={MyFriendsPage} />
            <Route path="/logout" component={LogoutFunction} />

          </Switch>
      </ThemeProvider>
    </Router >

  )
}

export default App;
