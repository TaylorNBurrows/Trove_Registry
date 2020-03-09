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
      <Grid container direction="row" spacing={0} className={classes.layout}>
        <p>this is the profile page</p>
      </Grid>
  )
}



export default Profile;
