
import { editExpense, removeExpense, addExpense } from '../../actions/expenses';

test('Should setup edit expense action object',()=>{
    const action = editExpense('123ae',{
        note:'Samople note',
        amount:2900}
        );

    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123ae',
        updates: {
            note:'Samople note',
            amount:2900
        }


    })
});

test('Should setup remove expense action object',()=>{
    const action = removeExpense({id:'123er'});
    

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        expenseId:'123er'
    })
});

test('Should setup add Expense action object with specified values',()=>{
    const expense = {
        description:'This is a sample description',
        note:'Sample note',
        amount:200
    }
    
    const action = addExpense(expense);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expense,
            createdAt:expect.any(Number),
            id:expect.any(String)
        }

    })
});

test('Should setup add Expense action object with default values',()=>{
    const defaultExpense = {
        description:'',
        note:'',
        amount:0
    }
    
    const action = addExpense();

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...defaultExpense,
            createdAt:expect.any(Number),
            id:expect.any(String)
        }

    })
});


