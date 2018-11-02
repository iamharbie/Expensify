import moment from 'moment';

const getFilteredExpenses =  (expenses,{text,sortBy,startDate,endDate}) => {
    // console.log(expenses);
    
    return expenses.filter((expense)=>{
        let startDateMatch =startDate ? startDate.isSameOrBefore(moment(expense.createdAt),'day') : true//<= expense.createdAt;
        let endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt),'day') : true //>= expense.createdAt;
        let textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // console.log(startDate,endDate)
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1 
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
};


export default getFilteredExpenses;