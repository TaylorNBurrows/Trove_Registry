import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { maxWidth } from '@material-ui/system';

const useStyles = makeStyles(theme => ({

  background: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '10px',
    margin:'50px auto',
    maxWidth: '600px',
    padding: '20px'
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const handleChange = event => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState('Controlled');

  return (

    <form className={classes.background} noValidate autoComplete="off">
        <Grid container alignItems='center' justify='center' spacing={2}>
          <Grid item xs={6} md={6}>
          <TextField
              id="filled-full-width"
              label="Name"
              value={props.user.username}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6} md={6}>
          <TextField
              id="filled-full-width"
              label="Password"
              type="password"
              value={props.user.name}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="filled-full-width"
              label="Name"
              value={props.user.name}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="filled-full-width"
              label="About Me"
              rows='8'
              placeholder="Tell us about yourself..."
              fullWidth
              multiline
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </Grid>
        </Grid>
    </form>

  );
}

export default Profile
