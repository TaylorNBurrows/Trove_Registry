import React from 'react';
import TroveCard from '../TroveCard/index';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import NoTroveDefault from '../NoTrove'

const useStyles = makeStyles(theme => ({
    layout: {
        padding: "10px",
        marginRight: '50px'
    },
    search: {
        backgroundColor: '#FFFFFF',
        border: '1px'
    }
}));

const MyTrove = (props) => {
    const classes = useStyles();

    return (

        <Grid container direction="row" spacing={1} className={classes.layout}>
            {props.trove.troves
                ? props.trove.troves.map((trove, key) => {
                    return (
                        <Grid item xs={4} md={3} key={key}>
                            <TroveCard trove={trove} Edit={props.Edit} onDelete={props.onDelete} setTroveId={props.setTroveId} newTrove={props.newTrove} onChange={props.onChange} item={props.item} setItem={props.setItem} newItem={props.newItem} setNewItem={props.setNewItem} onItemChange={props.onItemChange} createItem={props.createItem}/>
                        </Grid>)
                })

                : <Grid container alignItems='center' justify='center' spacing={2}>
                    <Grid item>
                        <NoTroveDefault />
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}



export default MyTrove;
