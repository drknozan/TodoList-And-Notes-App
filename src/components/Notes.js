import React, { useState } from 'react'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { useDispatch } from 'react-redux'
import { addNote } from '../features/tn/tnSlice'
import { Typography } from '@mui/material'

const Notes = () => {
    const dispatch = useDispatch()
    const [ open, setOpen ] = useState(false)
    const [ note, setNote ] = useState('')

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        setOpen(false)
        let noteObj = {
            nt: note
        }
        dispatch(addNote(noteObj))
    }

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    return(
        <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <Typography variant='h6' sx={{marginLeft: 4}}>NOTES</Typography>
                <div>
                    <div>
                        <Button variant='outlined' onClick={handleClick}>Add Note</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogContent>
                                <DialogTitle sx={{ textAlign: 'center' }}>Add Note</DialogTitle>
                                <TextField onChange={(e) => handleChange(e)} fullWidth variant='standard' autoFocus>
                                </TextField>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleSubmit}>Save</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes