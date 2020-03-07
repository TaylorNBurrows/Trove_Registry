import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SignUpForm = (props) =>{

return(
  <Card className="container">
    <form action="/" >
      <h2 className="card-heading">Sign Up</h2>
      {console.log(props.errors.summary)}
      {/* {props.state.errors.summary && <p className="error-message">{props.state.errors.summary}</p>} */}

      <div className="field-line">
        <TextField
          placeholder="Username"
          name="username"
          error={props.errors.username}
          onChange={props.onChange}
          value={props.user.username}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Name"
          name="name"
          error={props.errors.name}
          onChange={props.onChange}
          value={props.user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Email"
          name="email"
          error={props.errors.email}
          onChange={props.onChange}
          value={props.user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Password"
          type="password"
          name="password"
          onChange={props.onChange}
          error={props.errors.password}
          value={props.user.password}
        />
      </div>

      <div className="button-line">
        <Button variant="outlined" type="submit" label="Create New Account" primary="true" onSubmit={props.onSubmit}>Create New</Button>
      </div>

      <CardContent>Already have an account? <Link to={'/login'}>Log in</Link></CardContent>
    </form>
  </Card>
)};

export default SignUpForm;
