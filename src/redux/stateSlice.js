import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: 0,
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        show: state => {
            state.modal +=1
        },
        close: state => {
            state.modal -=1
        }}
    })

export const { show, close } = stateSlice.actions

export default stateSlice.reducer