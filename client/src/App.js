import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import Landing from "./app/Landing";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";

import ProductCard from "./app/Landing/ProductCard";
import Panier from "./app/Landing/Panier";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Fragment,useEffect } from "react";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./actions/auth.actions";
import { USER_LOGOUT } from "./constants/types";

function App() {
 
    useEffect(() => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      store.dispatch(loadUser());
  
      window.addEventListener("storage", () => {
        if (!localStorage.token) store.dispatch({ type: USER_LOGOUT });
      });
    }, []);
  return (
    <Provider store={store}>
     <Fragment>
        <Router>
          <Header/>
             <Switch>
                 <Route exact path="/login" component={ Login } />
                 <Route exact path="/register" component={ Register } />
                 <Route exact path="/landing" component={ Landing } />
                 <Route exact path="/landing/:productid" component={ ProductCard } />
                 <Route exact path="/panier" component={ Panier } />

        
              </Switch>
              <Footer/>
        
        </Router>
     
    </Fragment>
      
  </Provider>
   
   
  );
}

export default App;
