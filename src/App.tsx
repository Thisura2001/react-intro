import './App.css'
import {useReducer} from "react";
import CountReducer, {initialState} from "./Redusers/CountReducer.ts";

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
