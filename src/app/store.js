import { configureStore } from "@reduxjs/toolkit";
import stateReducer from '../redux/stateSlice'

export const store = configureStore({
    reducer: {
        state: stateReducer,
    },
})