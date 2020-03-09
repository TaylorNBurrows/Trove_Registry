import React, { useEffect } from 'react';
import TroveCard from '../TroveCard/index';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SearchBar from '../SearchBar';
import Auth from '../../utils/Auth'

const useStyles = makeStyles(theme => ({
  layout: {
    padding: "10px"
  },
  search: {
    backgroundColor: '#FFFFFF',
    border: '1px'
  }
}));

const Profile = () => {
  const classes = useStyles();

  return (
      <Grid container direction="row" spacing={1} className={classes.layout}>
          <Card className="container">
            {Auth.isUserAuthenticated() ? (
              <CardContent style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardContent>
            ) : (
                <CardContent style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardContent>
              )}
          </Card>
          <Grid item xs={12}>
              <SearchBar />
          </Grid>
          <Grid item xs={4} md={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={4} md={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={4} md={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={4} md={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={4} md={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={4} md={3}>
            <TroveCard />
          </Grid>
      </Grid>
  )
}



export default Profile;
