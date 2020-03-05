import React from 'react';
import Auth from '../utils/Auth';
import UserProfile from '../components/UserProfile';
import API from '../utils/API';

class UserProfilePage extends React.Component {
  state = {
    secretData: '',
    user: {}
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    API.dashboard(Auth.getToken())
    .then(res => {
      this.setState({
          secretData: res.data.message,
          user: res.data.user
        });
    })
  }

  /**
   * Render the component.
   */
  render() {
    return (<UserProfile secretData={this.state.secretData} user={this.state.user} />);
  }

}

export default UserProfilePage;