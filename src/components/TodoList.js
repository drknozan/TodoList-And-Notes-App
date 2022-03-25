import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TodoItem from './items/TodoItem'

const TodoList = () => {
    const receivedTodos = useSelector(state => state.tn.showTodos)
    const allTodos = receivedTodos.map((mTodo) => {
        return(
            <Grid key={mTodo.td} item xs={4}>
                <TodoItem TodoStr={mTodo.td}/>
            </Grid>
        )
    })

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {allTodos}
            </Grid>
        </Box>
    )
}

export default TodoList