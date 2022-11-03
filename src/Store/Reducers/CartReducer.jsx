export default function CartReducer(state=0,action) {
  switch(action.type){
    case "ADDTOCART":
        return state+action.payload
        case "REMOVEFROMCART":
            if(state===0)
            return state
            else
            return state-action.payload
    default:
        return state
  }
}
