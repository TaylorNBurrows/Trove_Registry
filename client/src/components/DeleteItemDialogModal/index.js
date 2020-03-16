import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DeleteBtn from '../DeleteBtn'
import Button from '@material-ui/core/Button'

function DeleteItemDialog(props) {
  console.log(props)
  const { onClose, selectedValue, open, trove } = props;

  const handleClose = () => {
    onClose(selectedValue);
    
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="edit-trove" open={open} trove={trove}>
      <DialogTitle id="edit-trove">Delete Item?</DialogTitle>
      <Button type='submit' variant='outlined' onClick={props.onItemDelete}>Delete</Button>
    </Dialog>
  );
}

DeleteItemDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function DeleteTroveDialogModal(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    console.log("Delete id", props.item._id)
    props.setItemId(props.item._id)
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteBtn aria-label="edit" id={props.item._id} onClick={handleClickOpen} />
      <DeleteItemDialog open={open} onClose={handleClose} item={props.item} onItemDelete={props.onItemDelete}/>
    </div>
  );
}

