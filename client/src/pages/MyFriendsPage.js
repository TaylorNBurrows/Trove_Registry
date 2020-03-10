import React, { useState, Fragment } from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import FriendTable from '../components/FriendTable'
import API from '../utils/API'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    layout: {
      marginTop: '75px',
    }
})

const MyFriendsPage = () => {
    const classes = useStyles();
    const [search, setSearch] = useState('');

    const onChange = (e) => setSearch({
        ...search,
        [e.target.name]: e.target.value,
    });

    const onSearch = () => {
        API.findFriends(search).then((err, res) => {
            if (err) throw err;
            console.log(res)
        })
    }

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
                <Grid item md={10} sm={10} className={classes.layout}>
                    <SearchBar onChange={onChange} onSearch={onSearch} />
                    <FriendTable />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default MyFriendsPage