import React from 'react';
import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom'

import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';


const HelpPage= () => (
    <div>
        This is the Help Page
    </div>
);

const NotFound= () => (
    <div>
        This is the 404 Page!!! <Link to='/'>Go Home</Link>
    </div>
);

const Header = () => (
    
        <header>

            <h1>Expensify</h1>

            <NavLink activeClassName='is-active' exact={true} to='/'>Home</NavLink>
            <NavLink activeClassName='is-active' to='/create'>Add Expense</NavLink>
            <NavLink activeClassName='is-active' to='/edit'>Edit Expense</NavLink>
            <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
        </header>


);



const AppRouter = () => (
    <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={ExpensifyDashboardPage} exact={true}/>
                    <Route path='/create' component={AddExpensePage}/>
                    <Route path='/edit/:id' component={EditExpensePage}/>
                    <Route path='/help' component={HelpPage}/>
                    <Route  component={NotFound}/>
            </Switch>
            </div>
            
        </BrowserRouter>
   
);

export default AppRouter;