import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'



export const addUser = createAsyncThunk('user/saveUser',async(user)=>{
      const response = await axios.post(`https://localhost:9292/api/user/save`,user)
      return response.data.data
 })


 export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers',async()=>{
  const response = await axios.get(`http://localhost:9292/api/user/fetchAll`)
  return response.data
 })



const UsersSlice = createSlice({
    name :'users',
    initialState : {
      users :[],
      error :null,
      status:'idle'
    },
    reducers:{},
    extraReducers : (builder)=>{
          builder
          .addCase(addUser.pending,(state)=>{
            state.status = 'Loading'
          })
          .addCase(addUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.status ='Success',
            state.users.push(action.payload);
          })
          .addCase(addUser.rejected,(state,action)=>{
            state.status = 'Failed'
            state.error = action.error.message;
          })

          .addCase(fetchAllUsers.pending,(state)=>{
            state.status ='Loading'
          })
          .addCase(fetchAllUsers.fulfilled,(state,action)=>{
            state.status = 'Success',
            state.users = action.payload;
          })
          .addCase(fetchAllUsers.rejected,(state,action)=>{
            state.status = 'Failed',
            state.error = action.error.message
          })
    }

})


export default UsersSlice.reducer;

