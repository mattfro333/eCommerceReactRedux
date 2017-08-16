"use strict"
// POST A BOOK
export function addToCart(book){
 return {
 type:"ADD_TO_CART",
 payload: book
 }
}
// UPDATE CART
export function updateCart(_id, unit){
 return {
 type:"UPDATE_CART",
 _id: _id,
 unit: unit
 }
}
