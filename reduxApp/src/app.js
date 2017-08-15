"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';


const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/bookslist';
render(
<Provider store={store}>
 <BooksList />
 </Provider>,
document.getElementById('app')
);


// store.dispatch(deleteBooks(
//    {id: 1}
// ))
// store.dispatch(updateBooks(
//     {
//       id:2,
//       title:'LEARN REACT in 24h'
//     }
//   ))
//   //-->> CART ACTIONS <<--
// // ADD TO CART
// store.dispatch(addToCart([{id: 1}]))
