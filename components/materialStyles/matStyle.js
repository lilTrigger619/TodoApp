import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(themes =>({
    outputCard:{
        maxWidth: 800,
        margin: '2rem auto',
    }, 
    theCard1:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    theButton1:{
        width: '100%'
    },
    card1:{
        width: '50%',
        margin: '-4rem auto 0px',
        backgroundColor: 'rgba(247, 245, 245, 0.76)',
    },
    card2:{
        backgroundColor: ' rgba(8, 2, 1, 0.644)',
        height: "22rem",
        overflow: 'auto',
        margin: '-2rem auto 0px',
        width: '70%'
        
    },
    TodoItem:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    //Below will be used when the item is checked
    TodoItemCancel:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        textDecoration: 'line-through',
        fontStyle: 'italic',
        color: 'white',
    },
    TodoItemText:{
        width: '50%',
        border: '.1rem solid white',
        padding: '7px',
        borderRadius: '9px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        color: 'white',
    },
    //Below will be used when the item is checked.
    TodoItemTextCancel:{
        width: '100%',
        border: '.1rem solid white',
        padding: '7px',
        borderRadius: '9px',
        wordWrap: 'break-word',
        color: 'grey'
    },
    checkbox:{
        color: 'white',
    }

}))