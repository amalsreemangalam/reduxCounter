import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlices'
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})
export default store