
import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../Slicers/CustomerSlice.ts";
import ItemSlice from "../Slicers/ItemSlice.ts";

export const store = configureStore({
    reducer: {
        customers:CustomerSlice,
        items:ItemSlice
    }
});