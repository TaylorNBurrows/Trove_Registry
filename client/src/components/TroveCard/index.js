import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditTroveDialogModal from '../EditTroveDialogModal';
import AddItemDialogModal from '../AddItemDialogModal'
import DeleteTroveDialogModal from '../DeleteTroveDialogModal'
import ItemDialogModal from '../ItemDialogModal'

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
const TroveCard = (props) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} id={props.trove._id}>
            <CardHeader title={props.trove.title} >
            </CardHeader>
            <ItemDialogModal trove={props.trove} setTroveId={props.setTroveId} itemId={props.itemId} setItemId={props.setItemId} onItemDelete={props.onItemDelete}/>
            <img src={props.trove.imgurl} alt={props.trove.title} className={classes.root} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="h4">
                    Description: {props.trove.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <AddItemDialogModal aria-label="Add Items" trove={props.trove} setTroveId={props.setTroveId} item={props.item} setItem={props.setItem} newItem={props.newItem} setNewItem={props.setNewItem} onItemChange={props.onItemChange} createItem={props.createItem}/>
                <EditTroveDialogModal aria-label="edit" trove={props.trove} Edit={props.Edit} setTroveId={props.setTroveId} newTrove={props.newTrove} onChange={props.onChange} />
                {/* <ShareBtn aria-label="share" trove={props.trove}/> */}
                <DeleteTroveDialogModal aria-label="delete" trove={props.trove} onDelete={props.onDelete} setTroveId={props.setTroveId} />
            </CardActions>
        </Card>
    );
}
export default TroveCard;