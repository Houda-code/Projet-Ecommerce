import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProducts,
  searchProductByName,

} from "../../actions/product.actions";
import {
  addItemToCart 
  

} from "../../actions/cart.actions";



const Landing = ({
  getProducts,
  productState,
  searchProductByName,
  addItemToCart ,
  cartState
}) => {

  useEffect(() => {
    getProducts();
  }, []);
  const [SearchName, setSearchName] = useState("");

  const onChangeSearch = async (e) => {
    e.preventDefault();
    await setSearchName(e.target.value);
    await searchProductByName(e.target.value);
  };

  //const createItem = async (e) => {
  //  e.preventDefault();
  //  await addItemToCart({ ...InvoiceData, total: Total, items: Items });
 // };

            return (
              <Fragment>
               <div className="flex justify-between items-center  my-4 px-96 py-5">
                   <input
                     name="searchProduct"
                     placeholder="Keyword"
                     className="py-2 pr-4 pl-8 rounded focus:outline-none w-full text-dark shadow"
                     type="text"
                     onChange={(e) => onChangeSearch(e)}
                     value={SearchName}
                     autoFocus />
                   <span className="absolute ml-2">
                    <i className="fas fa-search text-dark"></i>
                  </span>
               </div>
           
              {productState.products &&
         productState?.products.map((elProduct) => {
            return (
             
              <Link to={`/landing/${elProduct._id}`}>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <img className="h-56 w-full bg-cover" src={elProduct.imageUrl} alt={elProduct.name} /> 
                        <div className="flex-row items-end">  
                        <Link to="/login">
                        <button  className=" flex items-end p-2 rounded-full h-full w-64  bg-gray-300 text-black mx-5 -mb-4 hover:bg-gray-400 focus:outline-none focus:bg-blue-500"
                        
                       // onClick={(e) =>createItem (e)}
                        > 
                                <svg className="h-5 w-5" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" viewBox="0 0 24 24" 
                                stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                  Add To Cart
                            </button>
                            </Link>
                        </div>
                          
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">{elProduct.name} </h3>
                            <span className="text-gray-500 mt-2">{elProduct.price}</span>
                  
                            </div>
                        </div>
                   
                    </div>

              </Link>
                
            )})}
        </Fragment>
      
    )
}
           

   


Landing.propTypes = {
  getProducts: PropTypes.func.isRequired,
  productState:PropTypes.object.isRequired,
  searchProductByName: PropTypes.func.isRequired,
  addItemToCart : PropTypes.func.isRequired,
  cartState:PropTypes.object.isRequired,
  
  
};
const mapStateToProps = (state) => ({
  productState: state.productReducer,
  cartState: state.cartReducer,
  
});

const mapDispatchToProps = {
 getProducts,
 searchProductByName,
 addItemToCart 
};

 export default connect(mapStateToProps, mapDispatchToProps)(Landing);