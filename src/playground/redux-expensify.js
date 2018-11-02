import { addExpense, editExpense, removeExpense } from '../actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

import selector from "../selector/expenses";
import configureStore from '../store/configureStore';

const demoState = {
    expenses: [
      {
        id: 'dkjhfksdh',
        description: 'something sort and sweet',
        note: 'just have a sweet tooth',
        amount: 54500,
        createdAt: 0,
      },
    ],
    filters: {
      text: 'something',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined,
    },
};


let store = configureStore();
store.subscribe(() => {
    console.log(selector(store.getState().expenses,store.getState().filters));
})

const expenseOne = store.dispatch(addExpense({
    description:'First action',
    note:'This is the first action',
    amount:1000
}))

// const expenseTwo = store.dispatch(addExpense({
//     description:'Sec action',
//     note:'This is the sec action',
//     amount:90
// }))

const expenseTwo = store.dispatch(addExpense({
    description:'Second action',
    note:'This is the second action',
    amount:9000
}))


// console.log(expenseOne);

// store.dispatch(removeExpense({id:expenseOne.expense.id}));


store.dispatch(editExpense(expenseTwo.expense.id,{
    description: 'Edited second action',
    note: 'This is the edited second action',
    amount:2500

}));


store.dispatch(setTextFilter('action'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(-12000000000000));
store.dispatch(setEndDate(123000000000000));


