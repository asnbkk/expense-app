import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  transacitons: [
    { id: 1, text: 'Flowers', amount: -30 },
    { id: 2, text: 'Books', amount: 50 },
    { id: 3, text: 'Camera', amount: -130 },
    { id: 4, text: 'Monitor', amount: 330 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transacitons: state.transacitons,
        deleteTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
