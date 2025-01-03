import {createSlice} from "@reduxjs/toolkit";
import {Items} from "../Model/Items.ts";

const initialState = [];

const ItemSlice = createSlice({
    name:'items',
    initialState:initialState,
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload);
        },
        updateItem:(state,action)=>{
            return state.map((item:Items)=>
                item.id===action.payload.id?{...item,...action.payload}:item);
        },
        deleteItem:(state,action)=>{
            return state.slice(0,-1)
        }
    }
});
export const {addItem, updateItem,deleteItem} = ItemSlice.actions;
export default ItemSlice.reducer;