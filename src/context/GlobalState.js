import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    inventory: [],
    sales: [],
    expenses: []
}

// Create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // 'Item Actions

    function addItem(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }

    function deleteItem(item) {
        dispatch(
            {
                type: 'DELETE_ITEM',
                payload: item
            }
        )
    }

    function sellItem(item) {
        dispatch(
            {
                type: 'SELL_ITEM',
                payload: item
            }
        )
        deleteItem(item);
    }

    // Expense Actions

    function addExpense(expense) {
        dispatch(
            {
                type: 'ADD_EXPENSE',
                payload: expense
            }
        )
    }

    function deleteExpense(expense) {
        dispatch(
            {
                type: 'DELETE_EXPENSE',
                payload: expense
            }
        )
    }

    return (<GlobalContext.Provider value={{inventory: state.inventory, sales: state.sales, expenses: state.expenses, addItem, deleteItem, sellItem, addExpense, deleteExpense}}>
        {children}
    </GlobalContext.Provider>)

}
   
