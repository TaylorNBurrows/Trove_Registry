import React from 'react';
import TroveCard from '../TroveCard/index';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import SearchBar from '../SearchBar';

const useStyles = makeStyles(theme => ({
  layout: {
    marginTop: '50px',
    marginBottom: '50px',
    marginLeft: '250px',
  },
  search: {
    backgroundColor: '#FFFFFF',
    border:'1px'
}
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.layout}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.search}>
              <SearchBar />
            </div>
          </Grid>
          <Grid item xs={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={3}>
            <TroveCard />
          </Grid>
          <Grid item xs={3}>
            <TroveCard />
          </Grid>
        </Grid>

      </div>

    </div>

  )
}



export default Profile;
