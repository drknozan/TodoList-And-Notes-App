import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../features/tn/tnSlice'

const NoteItem = ({ noteStr }) => {
    const dispatch = useDispatch()

    const [ open, setOpen ] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleDeleteClick = () => {
        dispatch(deleteNote(noteStr))
        setOpen(false)
    }

    const handleItemClick = () => {
        setOpen(true)
    }

    return(
        <React.Fragment>
            <ListItem button onClick={handleItemClick}>
                <ListItemText>
                    <Typography noWrap>
                        {noteStr}
                    </Typography>
                </ListItemText>
            </ListItem>
            <Divider />
            
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogTitle>
                        {noteStr}
                    </DialogTitle>
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handleDeleteClick} size="large">
                        <DeleteIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default NoteItem