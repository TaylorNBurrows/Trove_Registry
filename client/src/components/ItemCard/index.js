import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditTroveDialogModal from '../EditTroveDialogModal'
import AddItemBtn from '../AddItemBtn'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const ItemCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} id={props.key}>
            <CardHeader title={props.item.title} />
            <img src={props.item.imagesrc} alt={props.item.title} className={classes.root} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="h4">
                    Url: {props.item.url}
                    Description: {props.item.description}
                    Price: {props.item.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

            </CardActions>
        </Card>
    );
}
export default ItemCard;