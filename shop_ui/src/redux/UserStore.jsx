import { configureStore } from "@reduxjs/toolkit";
import myUserSlice from './UserSlice.jsx'

const store = configureStore({
    reducer:{
        userData:myUserSlice
    }
})
export default store;