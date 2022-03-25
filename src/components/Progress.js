import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Badge from '@mui/material/Badge'

const Progress = () => {
    const receivedAchieveds = useSelector(state=>state.tn.achievedTodos.length)
    const receivedTodos = useSelector(state=>state.tn.todos.length)
    let calculatedAchieved = 0
    if(receivedTodos !== 0) {
        calculatedAchieved = (100*receivedAchieveds)/receivedTodos 
    }

    return(
        <Box sx={{ width: '90%', marginBottom:4 }}>
            <LinearProgress variant="determinate" value={calculatedAchieved} sx={{ marginTop: 4, marginBottom: 4 }}/>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Badge badgeContent={receivedAchieveds} color="success"><EmojiEventsIcon/></Badge>
            </Box>
        </Box>
    )
}

export default Progress