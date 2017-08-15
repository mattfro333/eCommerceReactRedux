"use strict"
import {createStore} from 'redux';

const reducer = function(state=0, action){
  switch(action.type){
    case "INCREMENT":
    return state + action.payload;
      break;
    case "DECREMENT":
    return state -1
      break;
  }
  return state
}

const store = createStore(reducer);

store.subscribe(function(){
  console.log('current state is: ' +
store.getState());
})

store.dispatch({type:"INCREMENT",
payload:1});
store.dispatch({type:"INCREMENT",
payload:1});
store.dispatch({type:"DECREMENT"});
store.dispatch({type:"DECREMENT"});
