import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage =(props)=>{
    console.log(props)
    return (
        <div>
            <h4>Edit Expense</h4>
            <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
            }}/>

              <button onClick={()=>{
                                props.dispatch(removeExpense(props.expense));
                                props.history.push('/');
                            }}>Remove</button>

        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return {
        expense: state.expenses.find(expense=>expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditExpensePage);