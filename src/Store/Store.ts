
import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../Reducers/CustomerSlice.ts";
import ItemSlice from "../Reducers/ItemSlice.ts";

export const store = configureStore({
    reducer: {
        customers:CustomerSlice,
        items:ItemSlice
    }
});