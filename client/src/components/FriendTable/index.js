import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    marginLeft: '250px',
  },
  avatar: {
    height: '5px',
    width: '5px',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Yogurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const FriendTable = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Paper elevation={1} className={classes.HeaderDiv}>
        <div>
          <span className={classes.span}>Your Friends</span>
        </div>
      </Paper>



      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">ViewLink</TableCell>
                <TableCell align="center">Action (+)</TableCell>
                <TableCell align="center">Action (-)</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default FriendTable;