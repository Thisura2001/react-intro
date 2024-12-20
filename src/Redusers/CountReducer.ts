export const initialState = {
    firstName: '',
    lastName: '',
};

const CountReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAMES':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        default:
            return state;
    }
};

export default CountReducer;
