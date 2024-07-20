import {configureStore} from "@reduxjs/toolkit";
import querySlice from "./QuerySlice.jsx";

export const store = configureStore({
    reducer: {
        apiQueryAndMutation: querySlice
    }
})