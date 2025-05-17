import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userReducer from "../user_frontend_redux_15_05/src/Components/UsersSlice"

const store = configureStore({
    reducer :{
        user : userReducer
    }
})

export default store

