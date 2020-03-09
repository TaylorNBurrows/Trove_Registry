import React, { useState, useEffect, Fragment } from 'react';
import Auth from '../utils/Auth';
import Profile from '../components/Profile/index'
import Main from '../components/Main'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import API from '../utils/API';
import Avatar from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'
import Grid from '@material-ui/core/Grid'

const ProfilePage = (props) => {
    const [secretData, setSecretData] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        // update authenticated state on logout
        props.checkAuthenticateStatus()
    }, [])

    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
                setSecretData(res.data.message)
                setUser(res.data.user)
            });
    }, [])

    return (
        <Fragment>
            <Grid container spacing={0} direction="row">
                <Grid item md={12}>
                    <Nav />
                </Grid>
            </Grid>
            <Grid container spacing={0} direction="row">
                <Grid item md={3} sm={3}>
                    <SideBar />
                </Grid>
                <Grid item md={9} sm={9}>
                    <ProfileBanner />
                    <Avatar user={user}/>
                    <Profile />
                </Grid>
            </Grid>
        </Fragment>

    )

}

export default ProfilePage;
