import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import AddItemBtn from '../AddItemBtn'
import ItemForm from '../ItemForm'
import Card from '@material-ui/core/Card';
import clsx from 'clsx';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function AddItemDialog(props) {
  console.log(props)
  const classes = useStyles();
  const { onClose, open, onItemChange, createItem, newItem } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add Item</DialogTitle>
      <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
        <ItemForm
          onItemChange={onItemChange}
          createItem={createItem}
          newItem={newItem}
        />
      </Card>
    </Dialog>
  );
}

AddItemDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function AddItemDialogModal(props) {
  console.log(props)
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(props.trove._id)
    console.log("Add Button", props.trove._id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddItemBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <AddItemDialog open={open} onClose={handleClose} item={props.item} setItem={props.setItem} newItem={props.newItem} setNewItem={props.setNewItem} onItemChange={props.onItemChange} createItem={props.createItem}/>
    </div>
  );
}

