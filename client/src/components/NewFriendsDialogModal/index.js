import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import API from '../../utils/API'
import Auth from '../../utils/Auth'
import SearchBar from '../SearchBar'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function NewFriendsDialog(props) {
  console.log(props)
  const classes = useStyles();

  const { onClose, open, selectedValue } = props;
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const onChange = (e) => setSearch(
    e.target.value
  );

  const onSearch = () => {
    API.findFriends(search, Auth.getToken()).then(res => {
      setResult(res.data)
    })
  }

  const addFriend = (e) => {
    console.log(Auth.getToken())
    var data={id: props.user._id, friend: e.target.parentNode.id}
    API.addFriend(data, Auth.getToken()).then((res) =>{
      props.setFriends(res.data.friends)
    })

  }


  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Find New Friends</DialogTitle>
      {/* <SearchBar className={classes.search} onChange={onChange} onSearch={onSearch} />  */}

      <SearchBar className={classes.search} onChange={onChange} onSearch={onSearch} />

      {result ? result.map((person, key) => {
        console.log(person)
        return <div><li key={person._id}>{person.name}<Button id={person._id} variant="outlined" color="primary" onClick={addFriend}>Add Friend</Button></li></div>
      }) : console.log("error")}

    </Dialog>
  );
}

export default function NewFriendsDialogModal(props) {
  console.log(props)
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>

      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Find Friends
      </Button>
      <NewFriendsDialog open={open} onClose={handleClose} setFriends={props.setFriends} user={props.user}/>
    </div>
  );
}

