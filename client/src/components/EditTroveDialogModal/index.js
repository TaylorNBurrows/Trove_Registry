import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EditTroveForm from '../EditTroveForm'
import EditTroveBtn from '../EditTroveBtn';

function EditTroveDialog(props) {
  console.log(props)
  const { onClose, selectedValue, open, onChange, onEdit, trove } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="edit-trove" open={open} onChange={onChange} onEdit={onEdit} trove={trove}>
      <DialogTitle id="edit-trove">Edit Trove Details</DialogTitle>
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(e.target.parentNode.id)
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <EditTroveBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <EditTroveDialog open={open} onClose={handleClose} trove={props.trove} onChange={props.onChange} onEdit={props.onEdit} newTrove={props.newTrove}/>
    </div>
  );
}

