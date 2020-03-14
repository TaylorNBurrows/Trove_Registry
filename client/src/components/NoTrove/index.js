import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import NoTroveImg from "../../images/Logos/TrovePageDefault.png";

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
        <Paper elevation={1} className={classes.bodyDiv}>
            <div>
                <img className={classes.image} src={NoTroveImg} alt="No Trove" />
            </div>
        </Paper>

    )

}

export default NoTrove;