import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Fragment } from "react";
import { setAuthToken } from "./utils/setAuthToken";


function App() {
  return (
    <Provider store={store}>
    <Fragment>
    <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Router>
     
    </Fragment>
      
    </Provider>
   
   
  );
}

export default App;
