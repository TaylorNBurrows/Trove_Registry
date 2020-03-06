import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Profile = ({ secretData, user }) => (
  <Card className="container">
    <CardHeader
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardContent style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.username}</strong>!<br />{secretData}</CardContent>}
  </Card>
);

Profile.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Profile;
