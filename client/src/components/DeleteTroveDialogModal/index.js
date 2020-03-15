import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
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
    <Dialog onClose={handleClose} aria-labelledby="delete-trove" open={open} onChange={onChange} onEdit={onEdit} trove={trove}>
      <DialogTitle id="delete-trove">Delete this trove?</DialogTitle>

      
    </Dialog>
  );
}

DeleteTroveDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function DeleteTroveDialogModal(props) {
  console.log("Delete Trove", props)
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(e.target.parentNode.id)
    console.log(e.target.parentNode.id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteBtn aria-label="delete" id={props.trove._id} onClick={handleClickOpen}/>
      <DeleteTroveDialog open={open} onClose={handleClose} trove={props.trove} onDelete={props.onDelete}/>
    </div>
  );
}