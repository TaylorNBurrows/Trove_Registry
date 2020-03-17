import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import ShowItemsBtn from '../ShowItemsBtn'
import Grid from '@material-ui/core/Grid'
import ItemCard from '../ItemCard'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function ItemDialog(props) {
  console.log(props)
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Trove Items</DialogTitle>
      {props.trove.items ? props.trove.items.map((item, key) => {
        return (
          <Grid item xs={12} md={12} key={key}>
            <ItemCard item={item} key={key} setItemId={props.setItemId} onItemDelete={props.onItemDelete}/>
          </Grid>)
      }) : null}
    </Dialog>
  );
}

ItemDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function AddItemDialogModal(props) {
  console.log(props)
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setTroveId(props.trove._id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ShowItemsBtn aria-label="edit" id={props.trove._id} onClick={handleClickOpen} />
      <ItemDialog open={open} onClose={handleClose} item={props.item} trove={props.trove} setItemId={props.setItemId} onItemDelete={props.onItemDelete} />
    </div>
  );
}

