import {configureStore} from "@reduxjs/toolkit"
import SelectedFormReducer from "../Slices/SelectedFormSlice.js"


export const store = configureStore({
    reducer:{
        SelectedForm: SelectedFormReducer
    }
})