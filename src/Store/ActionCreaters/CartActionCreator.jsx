export function addToCart(count){
return (dispatch)=>{
    dispatch({
        type: "ADDTOCART",
        payload:count
    })
}
}
export function removeFromCart(count){
return (dispatch)=>{
    dispatch({
        type: "REMOVEFROMCART",
        payload:count
    })
}
}