import React, { createContext, useReducer } from "react";

let ContextOne = createContext();

let initialState =  {
  theme: {
    backgroundColor: '#ee5679',
    particleColor: '#f3f3fa',
    cardBackground: '#9db0bf',
    cardTextColor: '#f3f3fa',
    headerColor: '#f3f3fa'
  },
};

let reducer = (state, action) => {
  switch (action.type) {
    case "set-theme":
      return {
        theme: action.payload
      };
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

