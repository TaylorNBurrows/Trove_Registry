import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';


const LogoutFunction = (props) => {

    Auth.deauthenticateUser();
    // change the current URL to / after logout
    props.history.push('/');
    props.checkAuthenticateStatus();

    return (
      <div>
        <p>Logging out...</p>
      </div>
    )

}

export default LogoutFunction;
