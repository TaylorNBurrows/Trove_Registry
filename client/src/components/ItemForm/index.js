import React from 'react';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'



const useStyles = makeStyles(theme => ({

  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '0',
    boxShadow: 'none',
    margin: '15px'
  },
  root: {
    backgroundColor: "white", 
    color: 'white'
  }
}));

const ItemForm = ({createItem, onItemChange, newItem}) => {
  const classes = useStyles();

  return (
  
  <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
    <form onSubmit={createItem}>
      <h2 className="card-heading">Login</h2>

      <div className="field-line">
        <TextField
          placeholder="Product URL"
          name="url"
          onChange={onItemChange}
          error={newItem.url === ""}
          value={newItem.url}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Title"
          name="title"
          onChange={onItemChange}
          error={newItem.title === ""}
          value={newItem.title}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Price"
          name="price"
          onChange={onItemChange}
          error={newItem.price === ""}
          value={newItem.price}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Description"
          name="description"
          onChange={onItemChange}
          error={newItem.description === ""}
          value={newItem.description}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Image URL"
          name="imagesrc"
          onChange={onItemChange}
          error={newItem.imagesrc === ""}
          value={newItem.imagesrc}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Add Item" primary="true" >Submit</Button>
      </div>
    </form>
  </Card>
)};

export default ItemForm;