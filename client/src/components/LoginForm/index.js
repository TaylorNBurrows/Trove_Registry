import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'



const useStyles = makeStyles(theme => ({

  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '0',
    boxShadow: 'none'
  },
  root: {
    backgroundColor: "white", 
    color: 'white'
  }
}));

const LoginForm = ({successMessage, errors, onSubmit, onChange, user}) => {
  console.log(successMessage)
  const classes = useStyles();

  return (
  
  <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          placeholder="Username"
          name="username"
          error={user.username === ""}
          helperText={user.username === "" ? errors.username : ' '}
          onChange={onChange}
          value={user.username}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={user.password === ""}
          helperText={user.password === "" ? errors.name : ' '}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Log in" primary="true" >Login</Button>
      </div>

      <CardContent >Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardContent>
    </form>
  </Card>
)};

export default LoginForm;