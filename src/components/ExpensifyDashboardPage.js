import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpenseSummary';



const ExpensifyDashboardPage = () => (
    <div>
        This is the Expensify Dashboard
        <ExpenseListFilter/>
        <ExpenseSummary />
        <ExpenseList/>
    </div>
);



export default ExpensifyDashboardPage;