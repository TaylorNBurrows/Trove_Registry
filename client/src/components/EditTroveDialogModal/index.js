import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EditTroveForm from '../EditTroveForm'
import EditTroveBtn from '../EditTroveBtn';

function EditTroveDialog(props) {
  console.log(props)
  const { onClose, selectedValue, open, onChange, Edit, trove } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="edit-trove" open={open} onChange={onChange} trove={trove}>
      <DialogTitle id="edit-trove">Edit Trove Details</DialogTitle>
      <EditTroveForm 
        onChange ={onChange}
        Edit = {Edit}
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(props.trove._id)
    console.log(props.trove._id)
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <EditTroveBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <EditTroveDialog open={open} onClose={handleClose} trove={props.trove} onChange={props.onChange} Edit={props.Edit} newTrove={props.newTrove}/>
    </div>
  );
}

