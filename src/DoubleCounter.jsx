
import { useReducer } from "react";

// Initial State
const initialState = {
  countA: 0,
  countB: 0
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {

    case "INCREMENT_A":
      return {
        ...state,
        countA: state.countA + 1
      };

    case "DECREMENT_A":
      return {
        ...state,
        countA: state.countA - 1
      };

    case "INCREMENT_B":
      return {
        ...state,
        countB: state.countB + 1
      };

    case "DECREMENT_B":
      return {
        ...state,
        countB: state.countB - 1
      };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
};

// Component
const DoubleCounter = () => {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.countA}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
        Increment A
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT_A" })}>
        Decrement A
      </button>

      <hr />

      <h2>Counter B: {state.countB}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
        Increment B
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT_B" })}>
        Decrement B
      </button>

      <hr />

      <button onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset All
      </button>

    </div>
  );
};

export default DoubleCounter;
