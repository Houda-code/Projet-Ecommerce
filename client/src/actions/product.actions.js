import axios from "axios";

import {
    CREATE_PRODUCT,
   // DELETE_PRODUCT,
   // UPDATE_PRODUCT,
    GET_PRODUCTS,
    SPINNER_LOADING,
    SPINNER_LOADED,
    PRODUCT_ERROR
    
  } from "../constants/types";

export const createProduct = (data) => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("http://localhost:8000/product", data, config);
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data.product,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  export const getProducts = () => async (dispatch) => {
    
    try {
        const res = await axios.get("http://localhost:8000/product");
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.products,
          });
     
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err,
          });
    }
  
  };