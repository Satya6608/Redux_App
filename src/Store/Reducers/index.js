import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const reducer =combineReducers({
    cart:CartReducer
})
export default reducer