import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import Secure from "./SecureRoute.js/Secure";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            {localStorage.getItem("token") && <Link to="/secure">Friends</Link>}
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>

        <h1>Hello World!!</h1>
        <h2>Welcome to LALA Land</h2>

        <Switch>
          <Secure exact path="/secure" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
