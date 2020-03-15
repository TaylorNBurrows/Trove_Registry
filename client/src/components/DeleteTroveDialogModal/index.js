import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DeleteBtn from '../DeleteBtn'
import Button from '@material-ui/core/Button'

function DeleteTroveDialog(props) {
  console.log(props)
  const { onClose, selectedValue, open, trove } = props;

  const handleClose = () => {
    onClose(selectedValue);
    
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="edit-trove" open={open} trove={trove}>
      <DialogTitle id="edit-trove">Delete Trove?</DialogTitle>
      <Button type='submit' variant='outlined' onClick={props.onDelete}>Delete</Button>
    </Dialog>
  );
}

DeleteTroveDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function DeleteTroveDialogModal(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    console.log("Delete id", props.trove._id)
    props.setTroveId(props.trove._id)
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <DeleteTroveDialog open={open} onClose={handleClose} trove={props.trove} onChange={props.onChange} onDelete={props.onDelete} newTrove={props.newTrove}/>
    </div>
  );
}

