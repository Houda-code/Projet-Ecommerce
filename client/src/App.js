import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import Landing from "./app/Landing"
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
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/landing" component={ Landing } />
        
    </Router>
     
    </Fragment>
      
    </Provider>
   
   
  );
}

export default App;
