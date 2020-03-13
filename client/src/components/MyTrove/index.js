import React, { useEffect } from 'react';
import TroveCard from '../TroveCard/index';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import SearchBar from '../SearchBar';

const useStyles = makeStyles(theme => ({
    layout: {
        padding: "10px",
        marginRight:'50px'
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
            <Grid item xs={12} className={classes.search}>
                <SearchBar />
            </Grid>
            {
            props.trove.trove 
            ? props.trove.map((item, key) =>{
                return (<Grid item xs={4} md={3}>
                <TroveCard trove={item} key={key}/>
            </Grid>)
            }) : null}
            
        </Grid>
    )
}



export default MyTrove;
