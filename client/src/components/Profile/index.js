import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { maxWidth } from '@material-ui/system';
import EditProfileBtn from '../EditProfileBtn';
import SaveProfileBtn from '../SaveBtn'
import { set } from 'mongoose';
import API from '../../utils/API'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '10px',
    margin: '50px auto',
    maxWidth: '800px',
    padding: '20px'
  },
  userInfo: {
    borderRadius: '10px',
    margin: '10px auto'
  },
  display: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

const Profile = (props) => {
  const classes = useStyles();
  const handleChange = event => {
    setValue(event.target.value);
  };
  const [value, setValue] = useState('Controlled');
  const [editable, setEditable] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [readonly, setReadonly] = useState(true);

  const handleSave = event => {
    setEditable(false)
    API.updateUser(username, password, name)

  }

  const handleEdit = () => {
    setEditable(true)
    setReadonly(false)
  }

  const onChange = (e) => {
    props.setUser({
      ...props.user,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <div>
      <div className={classes.background}>
        <h3>Username: {props.user.username}</h3>
        <h3>Name: {props.user.name}</h3>
        <hr />
        <h3>About Me: </h3>
        <div className={classes.display}><EditProfileBtn onClick={handleEdit} /></div>
        {editable
          ?
          <div>
            <form className={classes.background} noValidate autoComplete="off">
              <Grid container alignItems='center' justify='center' spacing={2}>
                <Grid item xs={6} md={6}>
                  <TextField
                    id="filled-full-width"
                    label="Username"
                    name='username'
                    placeholder={props.user.username}
                    value={props.user.username}
                    onChange={e => setUsername(e.target.value)}
                    readOnly={readonly}
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
                    label="Name"
                    name="name"
                    value={props.user.name}
                    placeholder={props.user.name}
                    onChange={e => setName(e.target.value)}
                    readOnly={readonly}
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
                    label="Password"
                    name="password"
                    type="password"
                    value={props.user.password}
                    placeholder={props.user.password}
                    onChange={e => setPassword(e.target.value)}
                    readOnly={readonly}
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
                    name="about"
                    value=""
                    readOnly={readonly}
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
                <Grid item xs={12} md={12}>
                  <SaveProfileBtn onClick={handleSave} />
                </Grid>
              </Grid>
            </form>
          </div>
          : null
        }
      </div>


    </div >

  );
}

export default Profile
