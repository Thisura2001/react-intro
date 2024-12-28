import {Items} from "../Model/Items.ts";

export const initialState:Items[] = [];
export function itemReducer(state:Items[],action:{type:string,payload:Items}) {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
            case 'DELETE_ITEM':
                return state.slice(0,-1)
                    case 'UPDATE_ITEM':
                        return state.map((item:Items)=>
                            item.id === action.payload.id ?
                                {...item,id:action.payload.id,
                                    name : action.payload.name,
                                    price : action.payload.price,
                                    quantity : action.payload.quantity,
                                }:item
                        )
    }
}