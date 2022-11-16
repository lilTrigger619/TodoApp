import {
    CardContent,
    Checkbox,
    Typography,
    Button,
} from '@material-ui/core';
import {useState} from 'react';
import { useStyles } from './materialStyles/matStyle';

export default function TodoItems(props){
    const mclasses= useStyles()
    const [isChecked, setCheck]=useState();
    return(
        <>
        <CardContent className={(isChecked)? mclasses.TodoItemCancel:mclasses.TodoItem}>
            <Checkbox 
            className={mclasses.checkbox}
            checked={isChecked}
            onClick={e=>setCheck(e.target.checked)} 
            />
            <div className={(isChecked)? mclasses.TodoItemTextCancel 
            : mclasses.TodoItemText}>
            <Typography>{`${props.number}). ${props.item}`}
            </Typography></div>
            {/* <div>
                {(isChecked)? '':  (<Button 
                size='small'
                variant='contained' 
                color='primary'
                onClick={props.editButton}>
                Edit
                </Button>)}
            </div> */}
            {/* the button above should be able to edit its preceding todo */}
        </CardContent>
        </>
        
    )
}