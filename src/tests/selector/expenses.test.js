
import getFilteredExpenses from '../../selector/expenses';
const mockExpense = [
    {
      id: '1',
      description: 'something sort and sweet',
      note: 'just have a sweet tooth',
      amount: 54500,
      createdAt: 10,
    },{
        id: '2',
      description: 'go clubbing',
      note: 'activity',
      amount: 323,
      createdAt: 9,
    },
    {
        id: '3',
      description: 'Go dancing',
      note: 'Tentative',
      amount: 534,
      createdAt: 8,
    },
    {
        id: '4',
      description: 'Read Book',
      note: 'Read',
      amount: 100,
      createdAt: 4,
    }
]
test('Should return filtered expenses based on specified filters',()=>{
    const filterdExpenses  = getFilteredExpenses(mockExpense,{
        text:'o',
        sortBy:'amount',
        startDate:-1,
        endDate:12
    });

    expect(filterdExpenses).toEqual([mockExpense[3],mockExpense[1],mockExpense[2],mockExpense[0]]);


});