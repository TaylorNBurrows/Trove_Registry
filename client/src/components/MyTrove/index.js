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
    console.log(props.trove.length)

    return (

        <Grid container direction="row" spacing={1} className={classes.layout}>
            {props.trove.troves

                ? props.trove.troves.map((trove) => {
                    return (
                        <Grid item xs={4} md={3} key={props.trove.troves._id}>
                            <TroveCard trove={trove} onEdit={props.onEdit} onDelete={props.onDelete} setTroveId={props.setTroveId} newTrove={props.newTrove} onChange={props.onChange} item={props.item} setItem={props.setItem} newItem={props.newItem} setNewItem={props.setNewItem} onItemChange={props.onItemChange}/>
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
