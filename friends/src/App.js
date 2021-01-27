import React from "react";
import { BrowserRouter as Router, Route, Link, Swich } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { authAxios } from "./utilities/authAxios";

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
            {localStorage.getItem("token") && (
              <Link to="/friends">Friends</Link>
            )}
          </li>
          <li>
            <Link to={logout}>Logout</Link>
          </li>
        </ul>
        <h1>Hello World!!</h1>
        <h2>Welcome to LALA Land</h2>
        <Login />

        <button>test</button>
      </div>
    </Router>
  );
}
export default App;
