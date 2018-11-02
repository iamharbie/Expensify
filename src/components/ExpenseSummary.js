import React from 'react';
import {connect} from 'react-redux';
import expensesTotal from '../selector/expenses-total';
import numeral from 'numeral';
import getFilteredExpenses from '../selector/expenses'

const ExpenseSummary = ({totalAmount,numberOfExpenses})=>{
    const expenseWord = numberOfExpenses === 0 || numberOfExpenses === 1 ? "expense" : "expenses";
    return (  
        

        <div>
            <h1>Showing {numberOfExpenses} {expenseWord} totalling  {numeral(totalAmount/100).format('$0,0.00')}</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{

    const visibleExpenses = getFilteredExpenses(state.expenses,state.filters);
    return { 
       
       totalAmount:expensesTotal(visibleExpenses),
       numberOfExpenses:visibleExpenses.length

    }
}

export default connect(mapStateToProps)(ExpenseSummary);