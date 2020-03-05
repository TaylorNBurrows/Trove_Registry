import PropTypes from 'prop-types';
import Auth from '../utils/Auth';
import LoginForm from '../components/LoginForm';
import API from '../utils/API';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';;


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: theme.palette.primary.main, 
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
}))

const LogInPage = () => {
  const [loginState, setLoginState] = useState({
    errors: {},
    successMessage: '',
    user: {
      username: '',
      password: ''
    }
  })

  useEffect(() => {
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    setLoginState({ ...loginState, successMessage });
  },[]);

  useEffect(() => {
    setLoginState({ ...loginState, errors: {} });
  },[]);

  const processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    const { username, password } = loginState.user;

    API.login({username, password}).then(res => {
        // save the token
        Auth.authenticateUser(res.data.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()
        
        // redirect signed in user to dashboard
        this.props.history.push('/profile');
        
    }).catch(( {response} ) => {

        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        setLoginState({...loginState, errors});
      });
  };

  const changeUser = event => {
    const field = event.target.name;
    const user = loginState.user;
    user[field] = event.target.value;
    console.log(field, user[field])
    setLoginState({...loginState, user });
  }

  return (
    <LoginForm
        onSubmit={processForm}
        onChange={changeUser}
        errors={loginState.errors}
        successMessage={loginState.successMessage}
        user={loginState.user}
      />
  );
}

LogInPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogInPage;

