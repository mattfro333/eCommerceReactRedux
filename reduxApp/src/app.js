"use strict"
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';


const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(function(){
//   console.log('current state is: ', store.getState());
//   // console.log('CURRENT PRICE IS: ' + store.getState().price);
// })
import BooksList from './components/pages/bookslist';
render(
 <BooksList />,
document.getElementById('app')
);

store.dispatch(postBooks(
  [{
    id: 1,
    title:'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title:'this is the second book title',
    description: 'this is the second book description',
    price: 50
    }]
  ))
store.dispatch(deleteBooks(
   {id: 1}
))
store.dispatch(updateBooks(
    {
      id:2,
      title:'LEARN REACT in 24h'
    }
  ))
  //-->> CART ACTIONS <<--
// ADD TO CART
store.dispatch(addToCart([{id: 1}]))
