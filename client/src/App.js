import LogInPage from './pages/LogInPage';
import SignupPage from './pages/Sign-UpPage';
import React, { Component, useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button"
import LandingPage from './pages/LandingPage';
import UserProfilePage from './pages/UserProfilePage';
import DiscoverPage from './pages/DiscoverPage';
import theme from './utils/themeUtil'
import MyFriendsPage from './pages/MyFriendsPage'

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
          <Switch>
            <PropsRoute exact path='/' component={LandingPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <LoggedOutRoute exact path='/login' component={LogInPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <LoggedOutRoute exact path='/signup' component={SignupPage} />
            <LoggedOutRoute exact path='/profile' component={UserProfilePage} />
            <LoggedOutRoute exact path='/discover' component={DiscoverPage} />
            <LoggedOutRoute exact path='/myfriends' component={MyFriendsPage} />
    
          </Switch>
        </Grid>


      </ThemeProvider>
    </Router>
  );
}

export default App;
