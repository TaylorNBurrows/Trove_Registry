import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TroveForm from '../TroveForm'

function TroveDialog(props) {
  const { onClose, open, onChange, onAdd, newTrove } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} onChange={onChange} onAdd={onAdd} newTrove={newTrove}>
      <DialogTitle id="simple-dialog-title">Add New Trove</DialogTitle>
      <TroveForm 
        onChange ={onChange}
        onAdd = {onAdd}
        newTrove = {newTrove}
      />
    </Dialog>
  );
}

TroveDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function NewTroveDialogModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Trove
      </Button>
      <TroveDialog open={open} onClose={handleClose} newTrove={props.newTrove} onChange={props.onChange} onAdd={props.onAdd}/>
    </div>
  );
}

