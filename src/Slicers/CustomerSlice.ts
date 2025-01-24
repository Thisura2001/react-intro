import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../Model/Customer.ts";
import axios from "axios";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:3000/customers",
})

export const saveCustomer = createAsyncThunk(
    'customers/saveCustomer',
    async (customer:Customer)=>{
        try{
            const response = await api.post('/add',customer)
            return response.data;
        }catch (error){
            console.log('error ',error);
        }
    }
)
export const deleteCustomer = createAsyncThunk(
    'customers/deleteCustomer',
    async (email:string)=>{
        try {
            const response = await api.delete(`/delete/${email}`);
            return response.data;
        }catch (e) {
            console.log(e)
        }
    }
)
export const updateCustomer = createAsyncThunk(
    'customers/updateCustomer',
    async (customer:Customer)=>{
        try {
            const response = await api.put(`/update/${customer.email}`,customer);
            return response.data;
        }catch (err){
            console.log(err)
        }
    }
)
export const getCustomer = createAsyncThunk(
    'customers/getCustomer',
    async ()=>{
        try {
            const response = await api.get('/view');
            return response.data;
        }catch (error){
            console.log(error)
        }
    }

)
const CustomerSlice = createSlice({
    name:'customers',
    initialState:initialState,
    reducers:{
        addCustomer:(state,action:PayloadAction<Customer>)=>{
            state.push(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(saveCustomer.fulfilled,(state,action)=>{
            state.push(action.payload);
        })
            .addCase(saveCustomer.rejected,(state,action)=>{
                console.log("Fail to save customer ",action.payload);
            })
            .addCase(saveCustomer.pending,(state,action)=>{
                console.log("Pending adding customer ",action.payload);
            })
        builder
            .addCase(deleteCustomer.fulfilled,(state,action)=>{
            return state = state.filter((customer:Customer)=>customer.email !== action.payload.email);
        })
            .addCase(deleteCustomer.rejected,(state,action)=>{
            console.log("Fail to save customer ",action.payload);
        })
            .addCase(deleteCustomer.pending,(state,action)=>{
            console.log("Pending Deleting Customer",action.payload);
        })
        builder
            .addCase(updateCustomer.fulfilled,(state,action)=>{
                const customer = state.find((customer:Customer)=> customer.email === action.payload.email)
                if (customer) {
                    customer.name = action.payload.name;
                    customer.phone = action.payload.phone;
                }
            })
            .addCase(updateCustomer.rejected,(state,action)=>{
                console.log("Fail to save customer ",action.payload);
            })
            .addCase(updateCustomer.pending,(state,action)=>{
                console.log("Pending Updating Customer ",action.payload);
            })
        builder
            .addCase(getCustomer.fulfilled,(state,action)=>{
                action.payload.map((customer:Customer)=>{
                    state.push(customer)
                })
            })
            .addCase(getCustomer.rejected,(state,action)=>{
                console.log("Fail to save customer ",action.payload);
            })
            .addCase(getCustomer.pending,(state,action)=>{
                console.log("Pending Updating Customer ",action.payload);
            })

    }
});
export const{addCustomer}=CustomerSlice.actions;
export default CustomerSlice.reducer;