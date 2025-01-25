import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Items} from "../Model/Items.ts";
import axios from "axios";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:3000/items",
})

export const saveItem = createAsyncThunk(
    'customers/saveItem',
    async (item:Items)=>{
        try {
            const response = await api.post('/add',item)
            return response.data;
        }catch (err){
            console.log(err)
        }
    }
)
export const deleteItem = createAsyncThunk(
    'customers/deleteItem',
    async (name:string)=>{
        try {
            const response = await api.delete(`/delete/${name}`);
            return response.data;
        }catch (err){
            console.log(err)
        }
    }
)
export const updateItem = createAsyncThunk(
    'customers/updateItem',
    async (item:Items)=>{
        try {
            const response = await api.put(`/update/${item.name}`,item);
            return response.data;
        }catch (err){
            console.log(err)
        }
    }
)
export const getAllItems = createAsyncThunk(
    'customers/getAllItems',
    async ()=>{
        try {
            const response = await api.get('/view');
            return response.data;
        }catch (err){
            console.log(err)
        }
    }
)

const ItemSlice = createSlice({
    name:'items',
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            // Save Item
            .addCase(saveItem.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveItem.rejected, (_, action) => {
                console.error(action.payload);
            })
            .addCase(saveItem.pending, () => {
                console.log("Saving item...");
            })
            // Delete Item
            .addCase(deleteItem.fulfilled, (state, action) => {
                return state.filter((item) => item.name !== action.payload);
            })
            .addCase(deleteItem.rejected, (_, action) => {
                console.error(action.payload);
            })
            .addCase(deleteItem.pending, () => {
                console.log("Deleting item...");
            })
            // Update Item
            .addCase(updateItem.fulfilled, (state, action) => {
                const index = state.findIndex((item) => item.name === action.payload.name);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateItem.rejected, (_, action) => {
                console.error(action.payload);
            })
            .addCase(updateItem.pending, () => {
                console.log("Updating item...");
            })
            // Get All Items
            .addCase(getAllItems.fulfilled, (_, action) => {
                return action.payload;
            })
            .addCase(getAllItems.rejected, (_, action) => {
                console.error(action.payload);
            })
            .addCase(getAllItems.pending, () => {
                console.log("Fetching items...");
            });
    },
});

export default ItemSlice.reducer;