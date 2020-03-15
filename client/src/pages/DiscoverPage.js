import React, { Fragment, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Avatar from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'
import ItemCard from '../components/ItemCard'
import API from '../utils/API';
import Auth from '../utils/Auth';

const DiscoverPage = (props) => {

    const [user, setUser] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
                setUser(res.data.user)
            });
    }, [])

    useEffect(() => {
        API.getItems()
            .then(res => {
                console.log(res.data)
                setItems(res.data)
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
                <Grid item md={2} sm={2}>
                    <SideBar />
                </Grid>
                <Grid item md={10} sm={10}>
                    <ProfileBanner />
                    <Avatar user={user} />
                    {items
                ? items.map((item, key) => {
                    return (
                        <Grid item xs={4} md={3} key={key}>
                            <ItemCard item={item}/>
                        </Grid>)
                })

                : <Grid container alignItems='center' justify='center' spacing={2}>
                    <Grid item>
                        <h3>No Items</h3>
                    </Grid>
                </Grid>
            }
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default DiscoverPage