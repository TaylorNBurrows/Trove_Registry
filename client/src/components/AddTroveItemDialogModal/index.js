import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import AddItemBtn from '../AddItemBtn'
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function AddTroveItemDialog(props) {
  console.log(props)
  const classes = useStyles();
  const { onClose, open, onItemChange, createItem, newItem } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="add-item" open={open}>
      <DialogTitle id="add-item">Add Item</DialogTitle>
      <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
        <form>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Trove Title</InputLabel>
            <Select
              native
              value={props.troveTitle}
              onChange={props.onChange}
              inputProps={{
                name: 'title',
                id: 'age-native-simple',
              }}
            >
              {props.trove.troves ? props.trove.troves.map((t, key) => {
                return <option value={t.title}>{t.title}</option>
              }) : null}

            </Select>

          </FormControl>
          <div className="button-line">
            <Button type="submit" label="Add Item" primary="true" onClick={props.addItem}>Add Item</Button>
          </div>
        </form>


      </Card>
    </Dialog>
  );
}

AddTroveItemDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function AddTroveItemDialogModal(props) {
  console.log(props)
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    props.setItemId(props.item._id)
    console.log("Add Button", props.item._id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <AddItemBtn aria-label="edit" onClick={handleClickOpen} />
      <AddTroveItemDialog open={open} onClose={handleClose} item={props.item} setItem={props.setItem} onChange={props.onChange} troveTitle={props.troveTitle} trove={props.trove} addItem={props.addItem} />
    </div>
  );
}

