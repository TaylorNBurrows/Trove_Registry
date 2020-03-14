import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import EditTroveForm from '../EditTroveForm'
import { blue } from '@material-ui/core/colors';
import DeleteBtn from '../DeleteBtn'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function DeleteTroveDialog(props) {
  console.log(props)
  const classes = useStyles();
  const { onClose, selectedValue, open, onChange, onEdit, trove } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labeledby="simple-dialog-title" open={open} onChange={onChange} onEdit={onEdit} trove={trove}>
      <DialogTitle id="simple-dialog-title">Edit Trove Details</DialogTitle>
      
    </Dialog>
  );
}

DeleteTroveDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function DeleteTroveDialogModal(props) {
  console.log(props)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(e.target.parentNode.id)
    console.log(e.target.parentNode.id)
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <DeleteTroveDialog open={open} onClose={handleClose} trove={props.trove} onDelete={props.onDelete}/>
    </div>
  );
}