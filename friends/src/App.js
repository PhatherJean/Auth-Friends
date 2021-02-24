// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import FriendsList from "./component/FriendsList";
import Login from "./component/Login";
import { axiosAuth } from "./util/axiosAuth";

function App() {
  useEffect(() => {
    axiosAuth()
      .get("/api/friends")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.error));
  }, []);

  return (
    <div className="App">
      <h1>Friends App</h1>
      <Login />
      <FriendsList />
    </div>
  );
}

export default App;
