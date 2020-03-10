import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      marginTop: '50px'
    },
  },
  divStyles: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '10px',
    marginBottom: '50px',
    marginRight: '20px',
    alignItems: 'center',
    justify: 'center'
  },
}));

const Profile = () => {
  const classes = useStyles();
  const handleChange = event => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState('Controlled');

  return (
    <Grid container alignItems='center' justify='center'>
      <div className={classes.divStyles}>
        <form className={classes.root} noValidate autoComplete="off">
          <div style={{ alignItems: 'center' }}>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="filled-required"
                label="Username"
                defaultValue="Username"
                variant="filled"
              />
              <TextField
                id="filled-password-input-required"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="filled-required"
                label="First Name"
                defaultValue="First Name"
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Last Name"
                defaultValue="Last Name"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="filled-full-width"
                label="About Me"
                style={{ margin: 8 }}
                rows='8'
                placeholder="About Me"
                fullWidth
                multiline
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <TextField
                id="filled-full-width"
                label="About Me"
                style={{ margin: 8 }}
                rows='8'
                placeholder="About Me"
                fullWidth
                multiline
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Grid>

            {/* <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        /> */}
          </div>
        </form>
      </div>
    </Grid>

  );
}

export default Profile
