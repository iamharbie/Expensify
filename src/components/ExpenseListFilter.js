import React from 'react';
import {connect} from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilter  extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            calenderFocused:null
        }
    }

render(){
    return (
    <div>
      
        <input value={this.props.filters.text} onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value))
        }}></input>
        
        <select value={this.props.filters.sortBy} onChange={(e)=>{
                if(e.target.value === "amount"){
                    this.props.dispatch(sortByAmount())
                }else this.props.dispatch(sortByDate());
            }}>
            <option value="amount" >Amount</option>
            <option value="date" >Date</option>
        </select>

        <DateRangePicker
            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
                this.props.dispatch(setEndDate(endDate));
                this.props.dispatch(setStartDate(startDate));
            }} // PropTypes.func.isRequired,
            focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={calenderFocused => this.setState({ calenderFocused })} // PropTypes.func.isRequired,
            numberOfMonths={1}
            isOutsideRange={()=>false}


        />





    </div> 


        );

     }
}


const mapStateToProps = (state)=>{
    return {
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);


