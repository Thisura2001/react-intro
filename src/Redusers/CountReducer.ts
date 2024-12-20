export const initialState = 0;
export default function CountReducer(state = initialState, action:{type:string, payload:number}) {
    switch(action.type) {
        case 'ADD_COUNT':
            return state + action.payload;
        case 'REMOVE_COUNT':
            return state - action.payload;
        default:
            return state;
    }
}