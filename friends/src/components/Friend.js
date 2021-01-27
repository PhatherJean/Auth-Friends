import React from "react";

export default function Friend(props) {
  const { friend } = props;
  return (
    <div className="friendsList">
      <h4> Name: {friend.name} </h4>
      <p>
        E-mail: {friend.email}
        <br />
        Age: {friend.age}
      </p>
    </div>
  );
}
