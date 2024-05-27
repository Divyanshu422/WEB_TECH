

import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slice/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
    // or 
    // counter: counterSlice.reducer
  },
})


