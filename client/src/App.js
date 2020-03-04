import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles"
// import Button from "@material-ui/core/Button"
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LogInPage'
import SignupPage from './pages/Sign-UpPage'
import UserProfilePage from './pages/UserProfilePage'
import Nav from './components/Nav'
import DiscoverPage from './pages/DiscoverPage'

import theme from './utils/themeUtil'

const App =() => {
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <Nav />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/profile' component ={UserProfilePage} />
            <Route exact path='/discover' component ={DiscoverPage} />
            {/*<Route exact path='/mytrove' component={TrovePage} />*/}
          </Switch>

        </ThemeProvider>
      </Router>
    );
}

export default App;
