import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState: {
        addUser:null,
        removeUser:null,
        isLogin:'false'
    },
    reducers:{
        addUser:(state,action)=> {
            return action.payload
        },
        removeUser:(state,action)=>{
            return null;
        },
        isUserLogin:(state,action)=>{
            state.isLogin=!state.isLogin;
        }
    },

})
export const{addUser,removeUser,isUserLogin}=userSlice.actions
export default userSlice.reducer;