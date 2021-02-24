import React from "react";

export default function Friend(props) {
  const { friend } = props;
  return (
    <div
      style={{
        padding: "25px",
        border: "red solid 2px",
        margin: "2% auto",
        backgroundColor: "seashell",
      }}
      className="friend"
    >
      <h4>Name: {friend.name} </h4>
      <p>Age: {friend.age} </p>
      <p>Email: {friend.email} </p>
    </div>
  );
}
