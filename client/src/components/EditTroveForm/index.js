import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
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
    boxShadow: 'none'
  },
  root: {
    backgroundColor: "white", 
    color: 'white'
  }
}));

const EditTroveForm = ({onEdit, onChange, trove, newTrove}) => {
  const classes = useStyles();

  return (
  
  <Card className={clsx(classes.alignItemsAndJustifyContent, classes.root)}>
    <form onSubmit={onEdit}>
      <h2 className="card-heading">Login</h2>

      <div className="field-line">
        <TextField
          placeholder="Title"
          name="title"
          onChange={onChange}
          error={trove.title === ""}
          value={newTrove.title}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Description"
          name="description"
          onChange={onChange}
          error={trove.description === ""}
          value={newTrove.description}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Image URL"
          name="imgurl"
          onChange={onChange}
          error={trove.imgurl === ""}
          value={newTrove.imgurl}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Log in" primary="true" >Save</Button>
      </div>
    </form>
  </Card>
)};

export default EditTroveForm;