import React, {Fragment, useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import AvatarImage from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'
import TroveCard from '../components/TroveCard'
import API from '../utils/API';
import Auth from '../utils/Auth';

const DiscoverPage = (props) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
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
                    <AvatarImage user={user}/>
                    <TroveCard />
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default DiscoverPage