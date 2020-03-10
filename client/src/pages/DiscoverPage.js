import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Avatar from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'
import TroveCard from '../components/TroveCard'

const DiscoverPage = () => {
    const [user, setUser] = useState({});

    return (
        <Fragment>
            <Grid container spacing={0} direction="row">
                <Grid item md={12}>
                    <Nav />
                </Grid>
            </Grid>
            <Grid container spacing={0} direction="row">
                <Grid item md={2} sm={2}>
                    <SideBar />
                </Grid>
                <Grid item md={10} sm={10}>
                    <ProfileBanner />
                    <Avatar user={user} />
                    <TroveCard />
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default DiscoverPage