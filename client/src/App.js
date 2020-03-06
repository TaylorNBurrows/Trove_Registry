import React, { Component, useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Nav from './components/Nav';
import { ThemeProvider } from "@material-ui/styles";
import theme from './utils/themeUtil'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  PrivateRoute,
  PropsRoute,
  LoggedOutRoute
} from './components/Routes';

import LoginPage from './pages/LogInPage.js';
import LandingPage from './pages/LandingPage.js';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignupPage from './pages/SignupPage.js';
import ProfilePage from './pages/ProfilePage.js';
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
        {Authenticate.authenticated ? (
          <Nav />) : null}
          <Switch>
            <Route exact path='/' component={LandingPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/login' component={LoginPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/discover' component={DiscoverPage} />
            <Route path="/logout" component={LogoutFunction}/>
            {/*<Route exact path='/mytrove' component={TrovePage} />*/}
          </Switch>
        </Grid>


      </ThemeProvider>
    </Router>

)}

export default App;
