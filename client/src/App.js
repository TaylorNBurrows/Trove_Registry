import React, { Component, useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Nav from './components/Nav';
import { ThemeProvider } from "@material-ui/styles";
import theme from './utils/themeUtil'
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
=======
import MyFriendsPage from './pages/MyFriendsPage'
>>>>>>> 084e61de6516203e0d3ddd76106b43b90d2c3c89

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
          <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={LandingPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/login' component={LoginPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/discover' component={DiscoverPage} />
            <Route path="/logout" component={LogoutFunction}/>
            {/*<Route exact path='/mytrove' component={TrovePage} />*/}
=======
            <PropsRoute exact path='/' component={LandingPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <LoggedOutRoute exact path='/login' component={LogInPage} toggleAuthenticateStatus={toggleAuthenticateStatus}/>
            <LoggedOutRoute exact path='/signup' component={SignupPage} />
            <LoggedOutRoute exact path='/profile' component={UserProfilePage} />
            <LoggedOutRoute exact path='/discover' component={DiscoverPage} />
            <LoggedOutRoute exact path='/myfriends' component={MyFriendsPage} />
    
>>>>>>> 084e61de6516203e0d3ddd76106b43b90d2c3c89
          </Switch>
        </Grid>


      </ThemeProvider>
    </Router>

)}

export default App;
