const SET_DEMO = 'SET_DEMO';
const initialState = {
    ip: "",
    age: ""
}

const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEMO:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default demoReducer;
