import React, { useState, useEffect } from 'react';
import Auth from '../utils/Auth';
import Profile from '../components/Profile.jsx';
import API from '../utils/API';

const ProfilePage = () => {
  const [state, setState] = useState({
    secretData: '',
    user: {}
  })

  /**
   * This method will be executed after initial rendering.
   */
  useEffect(() => {
    API.dashboard(Auth.getToken())
      .then(res => {
        setState({
          secretData: res.data.message,
          user: res.data.user
        });
      })
  }, [])


  /**
   * Render the component.
   */

  return (
    <Profile secretData={state.secretData} user={state.user} />);


}

export default ProfilePage;
