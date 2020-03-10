import React, { useState, useEffect, Fragment } from 'react';
import Auth from '../utils/Auth';
import MyTrove from '../components/MyTrove'
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
        <Main>
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
                        <MyTrove />
                    </Grid>
                </Grid>
            </Fragment>
        </Main>
    )

}

export default ProfilePage;
