import axios from "axios";

import {
  
    ADD_ITEM_TO_CART, 
    GET_CART_ITEMS  , 
    CART_ERROR   
    
  } from "../constants/types";

export const addItemToCart = (data) => async (dispatch) => {
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        //token??
      },
    };
    try {
      const res = await axios.post("http://localhost:8000/cart", data, config);
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: res.data.cart,
      });
    } catch (err) {
      dispatch({
        type:   CART_ERROR  ,
        payload: err,
      });
    }
    
  };

  export const getCartItems = () => async (dispatch) => {
    
    try {
        const res = await axios.get("http://localhost:8000/cart");
        dispatch({
            type:  GET_CART_ITEMS ,
            payload: res.data.cart,
          });
     
    } catch (err) {
        dispatch({
            type:   CART_ERROR  ,
            payload: err,
          });
    }
  
  };
 
 