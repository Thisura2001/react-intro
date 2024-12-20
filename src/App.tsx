import './App.css'
import {useReducer} from "react";

const initialState = 0;

function CountReducer(state = initialState, action:{type:string, payload:number}) {
    switch(action.type) {
        case 'ADD_COUNT':
            return state + action.payload;
            case 'REMOVE_COUNT':
                return state - action.payload;
                default:
                    return state;
    }
}
function App() {
    const [count, dispatch] = useReducer(CountReducer,initialState)
    return (
        <>
            {count}
            <button onClick={()=>dispatch({type:'ADD_COUNT',payload:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'REMOVE_COUNT',payload:1})}>Decrement</button>
        </>
    )
}

export default App
