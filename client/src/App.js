import LogInPage from './pages/LogInPage';
import SignupPage from './pages/Sign-UpPage';
import React, { Component, useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button"
import LandingPage from './pages/LandingPage';
import UserProfilePage from './pages/UserProfilePage';
import Nav from './components/Nav';
import DiscoverPage from './pages/DiscoverPage';
import theme from './utils/themeUtil'

import { 
  PrivateRoute, 
  PropsRoute, 
  LoggedOutRoute 
} from './components/Routes';

import Auth from './utils/Auth';

const App = () => {

  const [Authenticate, setAuthenticate] = useState({
    authenticated: false
  })

  useEffect(() => {
    // check if user is logged in on refresh
    toggleAuthenticateStatus()
  },[]);

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
            <PropsRoute exact path='/' component={LandingPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <PrivateRoute exact path='/profile' component={UserProfilePage} />
            <LoggedOutRoute exact path='/login' component={LogInPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <LoggedOutRoute exact path='/signup' component={SignupPage} />
            <PrivateRoute exact path='/discover' component={DiscoverPage} />
            {/*<Route exact path='/mytrove' component={TrovePage} />*/}
          </Switch>
        </Grid>


      </ThemeProvider>
    </Router>
  );
}

export default App;
