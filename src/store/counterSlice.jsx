import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    defaultValue : 0,
    count : 0,
}

const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.count += 1
        }
    }
})

export default CounterSlice

export const { increment } = CounterSlice.actions