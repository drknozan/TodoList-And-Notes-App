import { configureStore } from '@reduxjs/toolkit'
import tnReducer from '../features/tn/tnSlice'

export default configureStore({
  reducer: {
    tn: tnReducer
  }
})