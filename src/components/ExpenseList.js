import React from 'react';
import {connect} from 'react-redux'
import getFilteredExpenses from '../selector/expenses';
import { removeExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';


const ExpenseList = (props) => (
    <div>
        <h3>List of Expenses</h3>
        {props.expenses.map(expense=>{

                return <div key={expense.id}>
                            <Link to={`edit/${expense.id}`}>
                                <h2>{expense.description}</h2>
                            </Link>
                            <p>{numeral(expense.amount/100).format('$0,0.00')} -- {moment(expense.createdAt).format('MMMM Do, YYYY')}</p>
                          
                </div>


        })}


    </div> 
);

const mapStateToProps = (state)=>(
    {
       
    //    filters:state.filters,
       expenses:getFilteredExpenses(state.expenses,state.filters)
    }
)

export default connect(mapStateToProps)(ExpenseList);


