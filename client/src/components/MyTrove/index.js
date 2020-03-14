import React, { useEffect } from 'react';
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
                ? props.trove.troves.map((item, key) => {
                    return (
                        <Grid item xs={4} md={3}>
                            <TroveCard trove={item} key={key} onEdit={props.onEdit} onDelete={props.onDelete} setTroveId={props.setTroveId} newTrove={props.newTrove} onChange={props.onChange} />
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
