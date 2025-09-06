import {configureStore} from '@reduxjs/toolkit';
import  userReducer from './Slice';
const store = configureStore({
    reducer:{
      todo: userReducer
    }
})
export default store;