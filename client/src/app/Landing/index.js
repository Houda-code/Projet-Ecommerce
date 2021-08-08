import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProducts,

} from "../../actions/product.actions";


const Landing = ({
  getProducts,
  productState,
}) => {

  useEffect(() => {
    getProducts();
  }, []);



            return (
              <Fragment>
           
              {productState.products &&
         productState?.products.map((elProduct) => {
            return (
              <Link to="/login">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <img className="h-56 w-full bg-cover" src={elProduct.imageUrl} alt={elProduct.name} /> 
                        <div className="flex-row items-end">  
                        <button className=" flex items-end p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" viewBox="0 0 24 24" 
                                stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                          
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">#{elProduct.name} </h3>
                            <span className="text-gray-500 mt-2">#{elProduct.price}</span>
                  
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
  
};
const mapStateToProps = (state) => ({
  productState: state.productReducer,
  
});

const mapDispatchToProps = {
 getProducts,
};

 export default connect(mapStateToProps, mapDispatchToProps)(Landing);