import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    
    getCartItems,
    
  
  } from "../../../actions/cart.actions";
  
  

const Panier = ({getCartItems,cartState}) => {
    useEffect(() => {
        getCartItems();
     },[])
    
    return (
        <div className="flex justify-center my-6">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                     <table className="w-full text-sm lg:text-base" cellspacing="0">
                        <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden md:table-cell"></th>
                                <th className="text-left">Product</th>
                                <th className="lg:text-right text-left pl-5 lg:pl-0">
                                    <span className="lg:hidden" title="Quantity">Qtd</span>
                                    <span className="hidden lg:inline">Quantity</span>
                                </th>
                                <th className="hidden text-right md:table-cell">Unit price</th>
                                <th className="text-right">Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartState.carts &&
         cartState?.carts.map((elitem) => {
            return (
                            <tr>
                                <td className="hidden pb-4 md:table-cell">
                                <Link to="">
                                    <img src={elitem.imageUrl} className="w-20 rounded" alt="Thumbnail"/>
                                </Link>
                                </td>
                                <td>
                                    <Link to="">
                                        <p className="mb-2 md:ml-4">{elitem.name}</p>
                                        <form action="" method="POST">
                                            <button type="submit" className="text-gray-700 md:ml-4">
                                                <small>(Remove item)</small>
                                            </button>
                                        </form>
                                    </Link>
                                </td>
                                <td className="justify-center md:justify-end md:flex mt-6">
                                    <div className="w-20 h-10">
                                        <div className="relative flex flex-row w-full h-8">
                                            <input type="number" value="2" 
                                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden text-right md:table-cell">
                                    <span className="text-sm lg:text-base font-medium">
                                    {elitem.price}
                                    </span> 
                                </td>
                                <td className="text-right">
                                <span className="text-sm lg:text-base font-medium">
                                {elitem.price}
              </span>
                                </td>
          </tr> 
           )  } )}
          
        </tbody>
                    </table>
                    <hr className="pb-6 mt-6"/>
                   
                    <div className="my-4 mt-6 -mx-2 lg:flex">
        
        <div className="lg:px-2 lg:w-1/2">
          
          <div className="p-4">   
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900"> 
                    17,859.3???
                  </div>
                </div>
              <Link to="">
                <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  <span className="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </Link>
          </div>
        
        </div>
      </div>
                </div>
            </div>
        </div>
    )
}

Panier.propTypes = {
    getCartItems: PropTypes.func.isRequired,
    cartState:PropTypes.object.isRequired,
    
    
  };
  const mapStateToProps = (state) => ({
    cartState: state.cartReducer,
    
  });
  
  const mapDispatchToProps = {
    getCartItems,
   
  };
  
   export default connect(mapStateToProps, mapDispatchToProps)(Panier);