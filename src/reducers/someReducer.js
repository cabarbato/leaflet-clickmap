const TEST_ACTION = 'TEST_ACTION';
const initialState = {}

const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return state;
    default:
      return state;
  }
};

export default someReducer;
