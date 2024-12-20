import './App.css';
import { useReducer } from 'react';
import CountReducer, {initialState} from "./Redusers/CountReducer.ts";

function App() {
    const [state, dispatch] = useReducer(CountReducer, initialState);

    let firstNameInput = '';
    let lastNameInput = '';

    return (
        <>
            <input
                type="text"
                placeholder="Enter the first name"
                onChange={(e) => (firstNameInput = e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Enter the Last name"
                onChange={(e) => (lastNameInput = e.target.value)}
            />
            <br />
            <button
                onClick={() => {
                    dispatch({
                        type: 'SET_NAMES',
                        payload: { firstName: firstNameInput, lastName: lastNameInput },
                    });
                }}
            >
                Click
            </button>
            <p>
                Full Name: {state.firstName} {state.lastName}
            </p>
        </>
    );
}

export default App;
