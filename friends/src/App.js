// import logo from "./logo.svg";
import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import "./App.css";
import FriendForm from "./component/FriendForm";
import FriendsList from "./component/FriendsList";
import Login from "./component/Login";
import PrivateRoute from "./util/PrivateRoute";

function App() {
  const { push } = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
  };

  return (
    <div className="App">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        className="navi"
      >
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/friends">
          Friends
        </Link>
        <Link className="link" to="/" onClick={logout}>
          Logout
        </Link>
      </nav>
      <h1> Friends App</h1>

      <Switch>
        <PrivateRoute path="/add-form" component={FriendForm} />
        <PrivateRoute path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
