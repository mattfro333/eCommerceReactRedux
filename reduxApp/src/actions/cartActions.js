"use strict"
// POST A BOOK
export function addToCart(book){
 return {
 type:"POST_BOOK",
 payload: book
 }
}
