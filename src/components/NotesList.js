import React from 'react'
import NoteItem from './items/NoteItem'
import { useSelector } from 'react-redux'
import List from '@mui/material/List'

const NotesList = () => {
    const receivedNotes = useSelector(state=>state.tn.notes)
    const allNotes = receivedNotes.map((note) => {
        return(
            <NoteItem key={note.nt} noteStr={note.nt}></NoteItem>
        )
    }) 

    return(
        <List sx={{width:'100%'}}>
            {allNotes}
        </List>
    )
}

export default NotesList