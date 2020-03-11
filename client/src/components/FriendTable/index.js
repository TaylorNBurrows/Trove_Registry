import React from 'react';
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

  layout: {
    marginTop: '50px',
    marginBottom: '50px',
    marginRight: '50px',
  },
  avatar: {
    height: '5px',
    width: '5px',
  },
});


const FriendTable = ( props ) => {
  const classes = useStyles();

  return (
    <Grid className={classes.layout}>
      <Paper elevation={1} className={classes.HeaderDiv}>
        <div>
          <span className={classes.span}>Your Friends</span>
        </div>
      </Paper>


    {
      props.friends
      ? <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {props.friends.map(friend => (
                <TableRow key={friend.name}>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="center">{friend.username}</TableCell>
                  <TableCell align="center">{friend.name}</TableCell>
                  <TableCell align="center">ViewLink</TableCell>
                  <TableCell align="center">Action (-)</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      : null
    }
</Grid>
      
  );
}
export default FriendTable;