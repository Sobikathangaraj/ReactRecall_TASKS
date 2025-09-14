// Space creation for allocation
import {configureStore} from '@reduxjs/toolkit'
import useReducer from './Slice'
export const store = configureStore({
  reducer:{
    users:useReducer,       
  }
})

