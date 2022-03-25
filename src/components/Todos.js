import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Grid from '@mui/material/Grid'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux'
import { addTodo, addShowTodo } from '../features/tn/tnSlice'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

const Todos = () => {
    const dispatch = useDispatch()

    const [ todo, setTodo ] = useState('')
    const [ openbackdrop, setOpenbackdrop ] = useState(false)
    const [ opensnackbar, setOpensnackbar ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpenbackdrop(true)
        let todoObj = {
            td: todo
        }
        setTimeout(()=>{
            setOpenbackdrop(false)
            setOpensnackbar(true)
            dispatch(addTodo(todoObj))
            dispatch(addShowTodo(todoObj))
        }, 1000)
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpensnackbar(false);
      };

    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid sx={{display: 'flex', alignItems: 'center'}} container spacing={1}>
                        <Grid item xs={10}>
                            <TextField fullWidth label="To-Do" onChange={handleChange} size="small"></TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Button size="medium" variant="outlined" type="submit" endIcon={<AddIcon/>}>Add</Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={openbackdrop}>
                <CircularProgress color="inherit" />    
            </Backdrop>
            <Snackbar open={opensnackbar} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    To-Do Added!
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Todos