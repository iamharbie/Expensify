import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';




export default class ExpenseForm extends React.Component{
    constructor (props) {
        super(props);
        
        this.state =  {
            description : '',
            amount:'',
            note:'',
            createdAt : !!props.date ? props.date: moment(),
            calenderFocused : false
            
        }

    }


    componentDidMount(){
       
        if(!!this.props.expense){
            this.setState({...this.props.expense,
                amount:(this.props.expense.amount/100),
                createdAt:moment(this.props.expense.createdAt)
            })
        }
    }
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        if(name != 'amount' ){
            this.setState({
                [name]: value
            });
        }else if(value.match(/^\d*(\.\d{0,2})?$/)){
            this.setState({
                [name]: value
            });
        }
        

        
    }

    onSubmitExpenseForm(e){
        e.preventDefault();
        if(!this.state.description && !this.state.amount){
            this.setState({error:"Please provide description and amount"});
        }else{
            this.setState({error:""});
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount) * 100,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            });
        }
    }


    render(){


        return (
            <div>
                <form onSubmit={(e)=>this.onSubmitExpenseForm(e)}>
                    <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={(e)=>this.handleInputChange(e)} />
                    <input type="text" name="amount" placeholder="Amount" value={this.state.amount} onChange={(e)=>this.handleInputChange(e)} />

                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
                        focused={this.state.calenderFocused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ calenderFocused:focused })} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />

                    <textarea name="note" placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={(e)=>this.handleInputChange(e)}></textarea>

                    <button type="submit" >Save Expense</button>

                </form>


            </div>
        )
    }
} 

