import React, { useState, useEffect, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import theme from '../../utils/themeUtil';
import NoFriends from '../NoFriends/index';
import NewFriendsDialogModal from '../NewFriendsDialogModal';
import API from '../../utils/API';
import Auth from '../../utils/Auth';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },

  HeaderDiv: {
    backgroundColor: theme.palette.secondary.light,
    fontSize: '20px',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
  },

  BodyDiv: {
    fontSize: '20px',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
  },

  layout: {
    marginTop: '20px',
    marginBottom: '50px',
    marginRight: '50px',
  },
  avatar: {
    height: '5px',
    width: '5px',
  },
  noFriendsStyle: {
    margin: '0 auto'
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row-reverse'
  }

});


const FriendTable = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState();

  console.log(props.friends)


  const onChange = (e) => setSearch(
    e.target.value
  );

  const onSearch = () => {
    API.findFriends(search, Auth.getToken()).then(res => {
      console.log(res.data)
    })
  }

  return (
    <Grid className={classes.layout}>
      <Paper elevation={1} className={classes.HeaderDiv}>
        <div className={classes.span}>
          <Grid container spacing={3}>
            <Grid item xs>

            </Grid>
            <Grid item xs>
              Your Friends
            </Grid>
            <Grid item xs className={classes.modalButton}>
              <NewFriendsDialogModal onChange={onChange} onSearch={onSearch} searchResult={props.searchResult} setFriends={props.setFriends} user={props.user} />
            </Grid>
            <Grid item xs>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    {props.friends
                      ? (
                        props.friends.map(friend => (
                          <TableRow key={friend.name}>
                            <TableCell align="center">Avatar</TableCell>
                            <TableCell align="center">{friend.username}</TableCell>
                            <TableCell align="center">{friend.name}</TableCell>
                            <TableCell align="center">ViewLink</TableCell>
                            <TableCell align="center">Action (-)</TableCell>
                          </TableRow>
                        ))
                      ) : <Paper elevation={1} className={classes.BodyDiv}>

                        <NoFriends />

                      </Paper>
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>



        </div>
      </Paper>



    </Grid>

  );
}
export default FriendTable;