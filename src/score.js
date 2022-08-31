import {createSlice} from "@reduxjs/toolkit"

export const scoreSlice = createSlice({
    name: "score",
    initialState: {value: 0}, 
    reducers: {
        calculate: (state,action) => {
            state.value += action.payload
        },
        resetState: (state) => {
            state.value = 0
        }
    }
})

export const {calculate, resetState} = scoreSlice.actions

export default scoreSlice.reducer