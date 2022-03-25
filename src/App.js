import React from 'react'
import Notes from './components/Notes'
import Todos from './components/Todos'
import Progress from './components/Progress'
import TodoList from './components/TodoList'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import NotesList from './components/NotesList'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import './css/app.css'

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: green[400],
      }
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1, marginTop: 4}}>
          <Grid container rowSpacing={1} columnSpacing={6}>
            <Grid item xs={4}>
              <Notes></Notes>
              <NotesList></NotesList>
            </Grid>
            <Grid item xs={8}>
              <Todos></Todos>
              <Progress></Progress>
              <TodoList></TodoList>
            </Grid>
          </Grid>
        </Box>
    </ThemeProvider>
  );
}

export default App;
