import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import NoTroveImg from "../../images/Logos/TrovePageDefault.png";
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    image: {
        width: '950px',
        height: '700px'
    },
    bodyDiv: {
        fontSize: '20px',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '15px',
    },
}));

const NoTrove = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems='center' justify='center' spacing={2}>
            <Grid item>
                <Paper elevation={1} className={classes.bodyDiv}>
                    <div>
                        <img className={classes.image} src={NoTroveImg} alt="No Trove" />
                    </div>
                </Paper>
            </Grid>
        </Grid>


    )

}

export default NoTrove;