import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import AddItemBtn from '../AddItemBtn'
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
  const { onClose, selectedValue, open, onChange, onEdit, trove } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} onChange={onChange} onEdit={onEdit} trove={trove} searchItem={props.searchItem} onSearchChange={props.onSearchChange} findItem={props.findItem}>
      <DialogTitle id="simple-dialog-title">Edit Trove Details</DialogTitle>
      <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
        <form onSubmit={props.findItem}>
          <h2 className="card-heading">Find Item</h2>

          <div className="field-line">
            <TextField
              placeholder="Find Item"
              name="url"
              onChange={props.onSearchChange}
              error={props.searchItem === ""}
              value={props.searchItem}
            />
          </div>

          <div className="button-line">
            <Button type="submit" label="Log in" primary="true" >Search</Button>
          </div>
        </form>
      </Card>
    </Dialog>
  );
}

AddItemDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddItemDialogModal(props) {
  console.log(props)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(e.target.parentNode.id)
  };

  // const handleClose = value => {
  //   setOpen(false);
  // };

  return (
    <div>
      <br />
      <AddItemBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <AddItemDialog open={open} trove={props.trove} onChange={props.onChange} onEdit={props.onEdit} newTrove={props.newTrove} searchItem={props.searchItem} onSearchChange={props.onSearchChange} findItem={props.findItem} />
    </div>
  );
}

