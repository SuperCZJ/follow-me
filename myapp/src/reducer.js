import {combineReducers} from 'redux';
let count = (state=0,action) =>{
    console.log('sdfghjkl',state,action);
    switch (action.type){
        case 'ADD':
            return state + action.num;
        case 'MINUS':
            return state - action.num;
        default:
            return state;
    }
    
}

let cet4 = (state=0,action) =>{
    console.log('cet4',state,action);
    switch(action.type){
        case 'CET4':
            return state + action.num;
        default:
            return state;
    }
}

export default combineReducers({
    count,
    cet4
});