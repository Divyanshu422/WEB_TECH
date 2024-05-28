import { createSlice } from "@reduxjs/toolkit"
export const cartSlice = createSlice({
    name: 'cart',
    initialState:[],  // empty array
    reducers: {
        add: (state)=>{

        },
        remove: (state)=>{

        }
    }

})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;