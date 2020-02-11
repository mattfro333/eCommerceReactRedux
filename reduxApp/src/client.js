"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';
import Menu from './components/menu.js';
import Footer from './components/footer.js';


const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist';
import Cart from './components/pages/cart.js';
import BooksForm from './components/pages/booksForm';
import Main from './main';
const Routes = (
 <Provider store={store}>
 <Router history={browserHistory}>
 <Route path="/" component={Main}>
 <IndexRoute
component={BooksList}/>
 <Route path="/" component={Main}/>
 <Route path="/" component={Main}/>
 </Route>
 </Router>
 </Provider>
)
render(
Routes, document.getElementById('app')
);
