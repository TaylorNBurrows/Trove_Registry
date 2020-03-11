import React from 'react';
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

const SignUpForm = ({errors, user, onChange, onSubmit}) =>{
console.log(user)
const classes = useStyles();

return(
  <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>
      {console.log(errors.summary)}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          label="Username"
          type="text"
          name="username"
          error={user.username === ""}
          helperText={user.username === "" ? errors.username : ' '}
          onChange={onChange}
          value={user.username}
        />
      </div>

      <div className="field-line">
        <TextField
        type="text"
          label="Name"
          name="name"
          error={user.name === ""}
          helperText={user.name === "" ? errors.name : ' '}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
        type="text"
          label="Email"
          name="email"
          error={user.email === ""}
          helperText={user.email === "" ? errors.email : ' '}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
        
          label="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={user.password === ""}
          helperText={user.password === "" ? errors.name : ' '}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button variant="outlined" type="submit" label="Create New Account" primary="true">Create User</Button>
      </div>

      <CardContent>Already have an account? <Link to={'/login'}>Log in</Link></CardContent>
    </form>
  </Card>
)};

export default SignUpForm;
