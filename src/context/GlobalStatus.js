import React, { createContext, useReducer } from 'react';
import Appreducer from './Appreducer';
// Initial State
const initialState = {
    tracsactions: [ ]
}
// Create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);
    //Action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(id){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        });
    }
    return (
        <GlobalContext.Provider value={{ 
            tracsactions: state.tracsactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    );

}