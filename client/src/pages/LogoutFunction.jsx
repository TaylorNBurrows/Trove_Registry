import React, { Fragment } from 'react';
import Auth from '../utils/Auth';


const LogoutFunction = (props) => {

    Auth.deauthenticateUser();
    // change the current URL to / after logout
    props.history.push('/');

    return (
      <Fragment>
        <p>Logging out...</p>
      </Fragment>
    )

}

export default LogoutFunction;
