import { createSlice } from "@reduxjs/toolkit";


const userslice = createSlice ({
    name:"USERS",
    initialState:{count:0},
    reducers: {
       increament(state){
        state.count += 1;
       },
       decreament(state){
        if(state.count<=0) state.count = 0;
        else state.count -= 1;
       },
    },
});
export const {increament,decreament} = userslice.actions;
export  default userslice.reducer;