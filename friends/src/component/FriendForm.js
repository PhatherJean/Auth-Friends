import React, { useState } from "react";

const initialState = {
  name: "",
  age: "",
  email: "",
};
const FriendForm = (props) => {
  console.log("props", props);
  const [values, setValues] = useState(initialState);

  const handleForm = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addFriend(values);
    setValues(initialState);
  };

  return (
    <section className="form">
      <form className="formInputs" onSubmit={submitForm}>
        <label htmlFor="formName">
          Name:
          <input
            id="formName"
            value={values.name}
            name="name"
            onChange={handleForm}
          />
        </label>{" "}
        <br />
        <label htmlFor="formAge">
          Age:
          <input
            id="formAge"
            value={parseInt(values.age)}
            type="number"
            name="age"
            onChange={handleForm}
          />
        </label>
        <br />
        <label htmlFor="formEmail">
          Email:
          <input
            id="formEmail"
            value={values.email}
            type="email"
            name="email"
            onChange={handleForm}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default FriendForm;
