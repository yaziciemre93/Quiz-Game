import {createSlice} from "@reduxjs/toolkit"

export const scoreSlice = createSlice({
    name: "score",
    initialState: {value: 0}, 
    reducers: {
        calculate: (state,action) => {
            state.value += action.payload
        }
    }
})

export const {calculate} = scoreSlice.actions

export default scoreSlice.reducer