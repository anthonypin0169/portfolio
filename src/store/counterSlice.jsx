import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    defaultValue : 0,
    count : 0,
    visible : false
}

const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        show : (state) => {
            state.visible = true
        },
        increment : (state) => {
            state.count += 1
        }
    }
})

export default CounterSlice

export const { show, increment } = CounterSlice.actions