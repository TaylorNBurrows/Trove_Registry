import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
<<<<<<< HEAD
import EditTroveDialogModal from '../EditTroveDialogModal'
import AddItemBtn from '../AddItemBtn'

=======
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareBtn from '../../components/ShareBtn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DefaultImage from '../../images/pngIcons/016-lifebuoy.png'
import EditIcon from '../EditProfileBtn'
>>>>>>> f07c6b7beaf5bdd4d282720ed343ca5d66119fe0
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
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
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root} id={props.key}>
            <CardHeader title ={props.trove.title} />
            <CardMedia
                className={classes.media}
                src={props.trove.imgurl}
                title={props.trove.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="h4">
                    Description: {props.trove.description}
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <AddItemBtn aria-label="Add Items"/>
                <EditTroveDialogModal aria-label="edit" trove={props.trove} onEdit={props.onEdit} setTroveId={props.setTroveId} newTrove={props.newTrove} onChange={props.onChange}/>
                {/* <ShareBtn aria-label="share" trove={props.trove}/> */}
            </CardActions>
        </Card>
    );
}
export default TroveCard;