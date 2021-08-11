import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import spinnerReducer from "./spinner.reducers";
import productReducer from "./product.reducers";
import cartReducer from "./cart.reducers";
//import invoiceReducer from "./invoice.reducers";
export default combineReducers({
  authReducer,
 spinnerReducer,
 productReducer,
 cartReducer,

 
});