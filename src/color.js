import {createSlice} from "@reduxjs/toolkit"

export const colorSlice = createSlice({
    name: "color",
    initialState: {value: "light-bg-color"}, 
    reducers: {
        initColor: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {initColor} = colorSlice.actions

export default colorSlice.reducer