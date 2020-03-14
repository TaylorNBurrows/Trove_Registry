import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import EditTroveForm from '../EditTroveForm'
import { blue } from '@material-ui/core/colors';
import EditTroveBtn from '../EditTroveBtn'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function EditTroveDialog(props) {
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
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} onChange={onChange} onEdit={onEdit} trove={trove}>
      <DialogTitle id="simple-dialog-title">Edit Trove Details</DialogTitle>
      <EditTroveForm 
        onChange ={onChange}
        onEdit = {onEdit}
        trove = {trove}
        newTrove={props.newTrove}
      />
    </Dialog>
  );
}

EditTroveDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function EditTroveDialogModal(props) {
  console.log(props)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(e.target.parentNode.id)
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <EditTroveBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <EditTroveDialog open={open} onClose={handleClose} trove={props.trove} onChange={props.onChange} onEdit={props.onEdit} newTrove={props.newTrove}/>
    </div>
  );
}

