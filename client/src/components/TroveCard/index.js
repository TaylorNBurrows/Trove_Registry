import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareBtn from '../../components/ShareBtn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DefaultImage from '../../images/pngIcons/016-lifebuoy.png'
import EditIcon from '../EditProfileBtn'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize:'contain'
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

const TroveCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} id={props.key}>
            <CardHeader>{props.trove.title}</CardHeader>
            <CardMedia
                className={classes.media}
                src={props.trove.imgurl}
                title="Default Image"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h4>Description:</h4>
                    {props.trove.description}
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareBtn />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default TroveCard;