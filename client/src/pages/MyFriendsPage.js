import React, { useState, Fragment } from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import FriendTable from '../components/FriendTable'
import NewFriendsDialogModal from '../components/NewFriendsDialogModal'
import API from '../utils/API'
import Auth from '../utils/Auth'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    layout: {
        marginTop: '75px',
    },
})

const MyFriendsPage = () => {
    const classes = useStyles();
    const [search, setSearch] = useState();
    const [searchResult, setSearchResult] = useState();
    const [open, setOpen] = React.useState(false);


    console.log(search)

    const onChange = (e) => setSearch(
        e.target.value
    );
    const handleClickOpen = () => {
        setOpen(true);
      };


    const onSearch = () => {
        API.findFriends(search, Auth.getToken()).then(res => {
            console.log(res.data)
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
                {/* <Link to="/logout"><Button color="inherit" >Logout</Button></Link> */}
                    {/* <SearchBar className={classes.search} onChange={onChange} onSearch={onSearch} /> */}
                    {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
  Search Friends
</Button> */}
<NewFriendsDialogModal/>
                    <FriendTable />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default MyFriendsPage