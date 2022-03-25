import { createSlice } from '@reduxjs/toolkit'

export const tnSlice = createSlice({
  name: 'tn',
  initialState: {
    todos: [],
    showTodos: [],
    achievedTodos: [],
    notes: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload]
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.td !== action.payload)
    },
    addShowTodo: (state, action) => {
      state.showTodos = [...state.showTodos, action.payload]
    },
    deleteShowTodo: (state, action) => {
      state.showTodos = state.showTodos.filter((todo) => todo.td!==action.payload)
    },
    addAchievedTodo: (state, action) => {
      state.achievedTodos = [...state.achievedTodos, action.payload]
    },
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload]
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.nt !== action.payload)
    }
  }
})

export const { addTodo, deleteTodo, addAchievedTodo, addNote, deleteNote, addShowTodo, deleteShowTodo } = tnSlice.actions

export default tnSlice.reducer