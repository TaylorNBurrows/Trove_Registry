import React, { useState, useEffect, Fragment } from 'react';
import Auth from '../utils/Auth';
import Nav from '../components/Nav';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../components/LoginForm';
import API from '../utils/API';

const LoginPage = (props) => {
  console.log(props)
  // set the initial component state

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setUser] = useState({
    username: '',
    password: ''
  })


  useEffect(() => {
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    setSuccessMessage(successMessage);
    console.log(successMessage)

  }, [])

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  const processForm = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message

    const { username, password } = user;

    API.login({ username, password }).then(res => {
      console.log(res)

      // save the token
      Auth.authenticateUser(res.data.token);

      // update authenticated state
      props.checkAuthenticateStatus();

      // redirect signed in user to dashboard
      props.history.push('/profile');

    }).catch((err) => {
      console.log(err)

      const errors = err.data.errors ? err.data.errors : {};
      errors.summary = err.data.message;

      setErrors(
        errors
      );
    });
  }

  useEffect(() => {
    return () => {
      setErrors({
        errors: {}
      })
    }
  }, [])
  
  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  const changeUser = (e) => setUser({
    ...user,
    [e.target.name]: e.target.value,
  });

  /**
   * Render the component.
   */

  return (
    <Fragment>
      <Grid>

    <Nav />
    <br></br>
    

    <LoginForm
      onSubmit={processForm}
      onChange={changeUser}
      errors={errors}
      successMessage={successMessage}
      user={user}
    />
    </Grid>
    </Fragment>
  );
}

export default LoginPage;