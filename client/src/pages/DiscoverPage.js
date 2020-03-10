import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Avatar from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'
import TroveCard from '../components/TroveCard'

const DiscoverPage = () => {
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
                    <Avatar />
                    <TroveCard />
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default DiscoverPage