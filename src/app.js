import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selector/expenses';
import DashBoard from './components/DashBoard';


const store =  configureStore();
store.dispatch(addExpense({description:'Water Bill',amount:1500}));
store.dispatch(addExpense({description:'Gas bill', amount:144444}));
store.dispatch(setTextFilter('water'));
const state =  store.getState();

const filteredExpenses = getFilteredExpenses(state.expenses,state.filters)


console.log(filteredExpenses)

const App = ()=>(
  <Provider store={store}>
        <AppRouter  />
    </Provider>
);

ReactDOM.render( <App   />, document.getElementById('root'));