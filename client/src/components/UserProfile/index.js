import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const UserProfile = ({ secretData, user }) => (
  <Card className="container">
    <CardHeader
      title="Profile"
      subtitle="You should get access to this page only after authentication."
    />
    {secretData && <CardContent style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardContent>}
  </Card>
);

UserProfile.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default UserProfile;