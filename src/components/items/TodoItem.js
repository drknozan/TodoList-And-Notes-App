import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux'
import { deleteTodo, addAchievedTodo, deleteShowTodo } from '../../features/tn/tnSlice'

const TodoItem = ({ TodoStr}) => {
    const dispatch = useDispatch()

    const handleDeleteClick = () => {
        dispatch(deleteTodo(TodoStr))
        dispatch(deleteShowTodo(TodoStr))
    }

    const handleAchievedClick = () => {
        dispatch(addAchievedTodo(TodoStr))
        dispatch(deleteShowTodo(TodoStr))
    }

    return(
        <div>
            <Card>
                <CardContent>
                    <Typography variant='h6'>
                        {TodoStr}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleAchievedClick} size="large">
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton onClick={handleDeleteClick} size="large">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default TodoItem