export default (expenses=[]) => {
 
    return expenses
            .map((expense)=>expense.amount)
            .reduce((prev,curr) => {
           
            return prev+ curr
    }
         , 0);
}