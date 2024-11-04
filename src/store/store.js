import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice"
import storeReducer from "../reducers/projectSlice"
export const store = configureStore({
    reducer:{
        todo:todoReducer,
        project:storeReducer
    }
})