import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Router>
     
   
  );
}

export default App;
