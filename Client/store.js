import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './states/app'

const store = configureStore({
    reducer: AppReducer
})

export default store;