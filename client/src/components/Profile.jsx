import React from 'react';
import TroveCard from './TroveCard';
import Grid from '@material-ui/core/Grid'

const Profile = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <TroveCard />
        </Grid>
        <Grid item xs={4}>
          <TroveCard />
        </Grid>
        <Grid item xs={4}>
          <TroveCard />
        </Grid>
        <Grid item xs={4}>
          <TroveCard />
        </Grid>
        <Grid item xs={4}>
          <TroveCard />
        </Grid>
        <Grid item xs={4}>
          <TroveCard />
        </Grid>
      </Grid>

    </div>

  )}



export default Profile;
