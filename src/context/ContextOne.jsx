import React, { createContext, useReducer } from "react";

let ContextOne = createContext();

let initialState = {
  count: 10,
  currentColor: '#bada55'
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };
    case "set-color":
      return {
        ...state,
        currentColor: action.payload
      }
    default:
      return initialState;
  }
};

function ContextOneProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextOne.Provider value={value}> {props.children} </ContextOne.Provider>
  )
}

let ContextOneConsumer = ContextOne.Consumer;

export { ContextOne, ContextOneProvider, ContextOneConsumer }

