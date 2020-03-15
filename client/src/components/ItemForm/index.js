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

const TroveForm = ({onAdd, onItemChange, newItem, trove}) => {
  const classes = useStyles();

  return (
  
  <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
    <form>
      <h2 className="card-heading">Login</h2>

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
          name="imgurl"
          onChange={onItemChange}
          error={newItem.imgsrc === ""}
          value={newItem.imgsrc}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Log in" primary="true" >Submit</Button>
      </div>
    </form>
  </Card>
)};

export default TroveForm;