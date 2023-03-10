export default (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {...state, inventory: [...state.inventory, action.payload]}
        case 'DELETE_ITEM':
            return {...state, inventory: state.inventory.filter(item => item.id !== action.payload.id)}
        case 'SELL_ITEM':
            return {...state, sales: [...state.sales, action.payload]}
        case 'ADD_EXPENSE':
            return {...state, expenses: [...state.expenses, action.payload]}
        case 'DELETE_EXPENSE':
                return {...state, expenses: state.expenses.filter(expense => expense.id !== action.payload.id)}
        case 'DELETE_SALE':
                return {...state, sales: state.sales.filter(sale => sale.id !== action.payload.id)}
        default:
            return state;
    }
}