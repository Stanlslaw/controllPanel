import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: 1,
}

export const SelectedFormSlice=createSlice({
    name: "SelectedForm",
    initialState,
    reducers:{
        UpdateSelected:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {UpdateSelected}=SelectedFormSlice.actions

export default SelectedFormSlice.reducer