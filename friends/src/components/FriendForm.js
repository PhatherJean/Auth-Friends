import React from "react";

export default function FriendForm() {
  return (
    <div>
      <h3> New Friends Form</h3>
      <form
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
          <input type="text" name="name" />
        </label>
        <br />
        <label id="age" htmlFor="age">
          Age:
          <input type="text" name="age" />
        </label>
        <br />
        <label id="email" htmlFor="email">
          E-mail:
          <input type="text" name="email" />
        </label>
        <br />
        <button style={{ width: "120px", margin: "0 auto" }}>
          Add New Friend
        </button>
      </form>
    </div>
  );
}
