import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'
import todoSlice from './todo'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
    }
})