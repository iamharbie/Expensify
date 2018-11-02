import { createStore } from 'redux';

// console.log(101)
const incrementBy = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementBy = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});


const countReducer = (state = {count:0},action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.incrementBy};
        case 'DECREMENT':
            let value = state.count -action.decrementBy;
            return state.count <= 0 || value <= 0 ? {count: 0} : {count: value}   
        default:
            return state;
            
    }
    
}

const store = createStore(countReducer);

store.subscribe(()=>{
    console.log('I don change oo');
    console.log(store.getState().count)
})

store.dispatch(incrementBy({incrementBy:2}));
store.dispatch(incrementBy());

store.dispatch(decrementBy({decrementBy:4}));
store.dispatch(decrementBy());

// store.dispatch({
//     type: 'DECREMENT'
// });



// store.dispatch({
//     type: 'INCREMENT'
// });store.dispatch({
//     type: 'INCREMENT'
// });


