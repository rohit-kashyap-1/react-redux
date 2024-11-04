import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{name:'Not set',admin:'Not set'}
}

const projectSlice = createSlice({
    name:'project',
    initialState,
    reducers:{
        set:(state,action)=>{
            state.value = {name:action.payload.name, admin:action.payload.admin}
        }
    }
})

export const {set} = projectSlice.actions
export default projectSlice.reducer