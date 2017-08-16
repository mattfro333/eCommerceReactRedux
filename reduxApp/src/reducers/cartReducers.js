"use strict"

export function cartReducers(state={cart:[]}, action){
  switch(action.type){
    case "ADD_TO_CART":
     return {cart:[...state.cart, ...action.payload]}
  break;
case "UPDATE_CART":

 const currentBookToUpdate =
[...state.cart]

 const indexToUpdate =
currentBookToUpdate.findIndex(
 function(book){
   return book._id === action._id;})

   const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],
     quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit}

 let cartUpdate =
  [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
 break;
}

 return {...state, cart:cartUpdate}
 }
