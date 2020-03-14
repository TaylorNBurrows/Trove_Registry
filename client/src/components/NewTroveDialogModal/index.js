import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TroveForm from '../TroveForm'
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function TroveDialog(props) {
  console.log(props)
  const classes = useStyles();
  const { onClose, selectedValue, open, onChange, onAdd, newTrove } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
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
  selectedValue: PropTypes.string.isRequired,
};

export default function NewTroveDialogModal(props) {
  console.log(props)
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
      <TroveDialog selectedValue={selectedValue} open={open} onClose={handleClose} newTrove={props.newTrove} onChange={props.onChange} onAdd={props.onAdd}/>
    </div>
  );
}

