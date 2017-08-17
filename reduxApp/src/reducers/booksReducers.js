"use strict"

export function booksReducers(state={
  books:[{
  id: 1,
  title:'Learn Redux in 24hr',
  description: 'this is the book description',
  price: 43.33
  },
  {
  id: 2,
  title:'Learn React in 24hr',
  description: 'this is the second book description',
  price: 60


}]
}, action){
  switch(action.type){
    case "GET_BOOKs":
    // let books = state.books.concat(action.payload)
    return {...state, books:[...action.payload]}
      break;

    case "POST_BOOK":
    // let books = state.books.concat(action.payload)
    return {books:[...state.books,...action.payload]}
      break;

    case "DELETE_BOOK":
const currentBookToDelete = [...state.books]
const indexToDelete = currentBookToDelete.findIndex(
  function(book){
      return book.id === action.payload.id;
  }
)
   return {books:[...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
      break;


   case "UPDATE_BOOK":
const currentBookToUpdate = [...state.books]
const indexToUpdate = currentBookToUpdate.findIndex(
  function(book){
      return book.id === action.payload.id;
  }
 )
 const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],
  title: action.payload.title
  }

  console.log("what is it newBookToUpdate", newBookToUpdate);
  return {books:[...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
 break;
 }
 return state
}
