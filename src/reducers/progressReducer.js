const DISABLE_BUTTON = 'DISABLE_BUTTON',
    ENABLE_BUTTON = 'ENABLE_BUTTON',
    PREV_SLIDE = 'PREV_SLIDE',
    NEXT_SLIDE = 'NEXT_SLIDE',
    SUBMIT = 'SUBMIT';

const initialState = {
    slide: 0,
    is_enabled: false,
    is_submitted: false
}

const progressReducer = (state = initialState, action) => {
    switch (action.type) {
        case PREV_SLIDE:
            return Object.assign({}, state, action.payload);
        case NEXT_SLIDE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default progressReducer;
