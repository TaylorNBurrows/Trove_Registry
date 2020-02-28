import React, { Component } from "react";
import logo from "./logo.svg";
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import "./App.css";
import theme from '../utils/themeUtil'

const App =() => (
 <Router>
        <ThemeProvider theme={theme} />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/signup" component={ SignupPage } />
        </Switch>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h2">Welcome to React</Typography>
        </div>

        <Button variant={outlined}>Hello World</Button>
      </Router>
    )


export default App;
