import axios from "axios";
import React from "react";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    loading: false,
    error: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [name]: value,
      },
      error: "",
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/friends");
      })
      .catch((err) =>
        this.setState({
          ...this.state,
          error: err.response.data.error,
        })
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              value={this.state.credentials.username}
              name="username"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              value={this.state.credentials.password}
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <p style={{ color: "red", fontSize: "18px" }}>{this.state.error}</p>
          <br />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
export default Login;
