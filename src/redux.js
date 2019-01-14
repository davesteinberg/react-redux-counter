const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

// Reducer
const initialState = { count: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT_COUNT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}

// Actions
export function incrementCount() {
  return { type: INCREMENT_COUNT };
}

export function decrementCount() {
  return { type: DECREMENT_COUNT };
}

// Selectors
export const getCount = state => state.count;
