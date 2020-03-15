import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

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
                <Typography variant="h4" color="textSecondary" component="h4">
                    <b>Url:</b> <Link to={props.item.url}>{props.item.url}</Link>
                </Typography>
                <br />
                <Typography variant="h4" color="textSecondary" component="h4">
                    <b>Description:</b> {props.item.description}
                </Typography>
                <br />
                <Typography variant="h4" color="textSecondary" component="h4">
                    <b>Price:</b> {props.item.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

            </CardActions>
        </Card >
    );
}
export default ItemCard;