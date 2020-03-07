import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import theme from './utils/themeUtil'
import Nav from './components/Nav/index'
import LogoutFunction from './pages/LogoutFunction'

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
import SignupPage from './pages/SignupPage.js';
import ProfilePage from './pages/ProfilePage';
import DiscoverPage from './pages/DiscoverPage';
import MyFriendsPage from './pages/MyFriendsPage'


import Auth from './utils/Auth';
import SideBar from "./components/SideBar";

// remove tap delay, essential for MaterialUI to work properly

const App = () => {

  const [Authenticate, setAuthenticate] = useState({
    authenticated: false
  })

  useEffect(() => {
    // check if user is logged in on refresh
    toggleAuthenticateStatus()
    console.log(Authenticate);
  }, []);

  const toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    setAuthenticate({authenticated: Auth.isUserAuthenticated()})
    console.log(Authenticate)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container direction="row">
          {localStorage.getItem('token') ? (
            <div>
              <Nav />
              <SideBar />
            </div>

          ) : (
              null
            )}
          <Switch>

            <Route exact path='/' render={(props) => <LandingPage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/login' render={(props) => <LoginPage {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/discover' component={DiscoverPage} />
            {/* <Route exact path='/mytrove' component={TrovePage} /> */}
            <Route path="/logout" render={(props) => <LogoutFunction {...props} checkAuthenticateStatus={toggleAuthenticateStatus} />} />
            <Route path='/myfriends' component={MyFriendsPage} />

          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>

  )
}

export default App;
