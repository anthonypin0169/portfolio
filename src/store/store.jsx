import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterSlice";

const store = configureStore({
    reducer : {
        counter : CounterSlice.reducer
    }
})

export default store