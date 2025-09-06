import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice ({
    name:"todo",
    initialState:{
        list:[],
    },
    reducers:{
      addtodo(state,action){
          state.list.push({
          id:Date.now(),
          text:action.payload,
          completed:false,
        }); 
      },
      toggletodo(state,action){
           const todo = state.list.find((t)=> t.id === action.payload)
           if(todo){
             todo.completed = !todo.completed;
           }
      }
    }
});

export const {addtodo,toggletodo} = slice.actions;
export default slice.reducer;