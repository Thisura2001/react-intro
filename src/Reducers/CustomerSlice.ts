import {createSlice} from "@reduxjs/toolkit";
import {Customer} from "../Model/Customer.ts";

const initialState = [];

const CustomerSlice = createSlice({
    name:'customers',
    initialState:initialState,
    reducers:{
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        updateCustomer: (state, action) => {
            return state.map((customer: Customer) =>
                    customer.email === action.payload.email ?
                        {...customer,...action.payload} : customer);
        },
        deleteCustomer: (state, action) => {
            return state.slice(0,-1)
        }
    }
});
export const{addCustomer,updateCustomer,deleteCustomer}=CustomerSlice.actions;
export default CustomerSlice.reducer;