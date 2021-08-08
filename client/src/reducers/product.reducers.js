import {
    CREATE_PRODUCT,
    GET_PRODUCTS,
   // DELETE_PRODUCT,
    //UPDATE_PRODUCT,
    PRODUCT_ERROR,
    GET_PRODUCT_By_Id,
    SEARCH_PRODUCT,
    
  } from "../constants/types";
  
  const initialState = {
    loading: true,
    products: [],
    product: null,
    err: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      
      case CREATE_PRODUCT:
        return {
          ...state,
          products: [...state.products, payload],
          loading: false,
        };
      case GET_PRODUCTS:
        return {
          ...state,
          loading: false,
          products: payload,
        };
        case GET_PRODUCT_By_Id:
          return {
            ...state,
            loading: false,
            product: payload,
          };
          case SEARCH_PRODUCT:
         return {
           ...state,
           loading: false,
           products: payload,
          };

      case PRODUCT_ERROR:
        return {
          loading: false,
          err: payload,
        };
      default:
        return state;
    }
  }