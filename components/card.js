import {
    Card,
    CardContent,
    TextField,
    Button,
} from '@material-ui/core/';
import {useStyles} from './materialStyles/matStyle'
import TodoItems from './todoItems';
import { useState } from 'react';

export default function Ccard(){
    const mclasses = useStyles();
    const [itemText, setItemText] = useState('');
    const [todos, setTodos] = useState(['',]);
    const [itemNumber, setItemNumber] = useState(0);

    const changeHandler=(event)=>{
        return (setItemText(event.target.value))
    };

    const buttonHandler=()=>{
        let newItem = <TodoItems number={todos.length} item={itemText} />
            todos.push(newItem)
            setItemText('')
            console.log(todos, todos.length);
    };

    const clearAllHandler=()=>{
        setTodos([])
    }

    // window.addEventListener('keydown', (event)=>{
    //       if (event.key=='Enter'){
    //          return buttonHandler();
    //       }
    // })
    // window.removeEventListener;
    
    return(
        <div className={mclasses.outputCard}>
            <Card className={mclasses.card1}>
                <CardContent className={mclasses.theCard1}>
                    <TextField 
                    label='Item'
                    value={itemText}
                    onChange={changeHandler}
                    />
                    <Button 
                    onClick={buttonHandler}
                    variant='contained'
                    color='primary'
                    size='small'>
                    Add
                    </Button>
                </CardContent>

                <CardContent >
                    <Button 
                    className={mclasses.theButton1}
                    variant='contained' 
                    color="secondary"
                    onClick={clearAllHandler}>
                        clearAll
                    </Button>

                </CardContent>
            </Card>
                <br /> <br /> 
            <Card className={mclasses.card2}>
                <CardContent>
                {todos.map((value, index)=>(
                    value
                ))}
                </CardContent>
            </Card>
        </div>
    )
}