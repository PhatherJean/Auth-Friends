import React, { useState } from "react";

import { authAxios } from "../utilities/authAxios";

export default function FriendForm() {
  const [values, setValues] = useState({});

  const addFriends = () => {
    authAxios()
      .post("/friends", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setValues({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3> New Friends Form</h3>
      <form
        onSubmit={addFriends}
        style={{
          display: "flex",
          flexDirection: "column",

          textAlign: "center",
          margin: "0 auto",
        }}
        className="friendFormAdd"
      >
        <label id="name" htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </label>
        <br />
        <label id="age" htmlFor="age">
          Age:
          <input
            type="text"
            name="age"
            onChange={handleChange}
            value={values.age}
          />
        </label>
        <br />
        <label id="email" htmlFor="email">
          E-mail:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </label>
        <br />
        <button style={{ width: "120px", margin: "0 auto" }}>
          Add New Friend
        </button>
      </form>
    </div>
  );
}
