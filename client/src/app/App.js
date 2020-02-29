import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LogInPage'
import SignupPage from '../pages/Sign-UpPage'

import theme from '../utils/themeUtil'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignupPage} />
            {/*<Route exact path='/mytrove' component={TrovePage} />*/}
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
