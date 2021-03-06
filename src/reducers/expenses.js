//Expenses Reducer
const expensesReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            // console.log(action.expenseId);
            return state.filter(({id})=> id !== action.expenseId);
        case 'EDIT_EXPENSE':
            return state.map(expense=> {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else return expense
            })
        default:
            return state;
    }
};


export default expensesReducer;