import React from "react";
import axios from "axios";
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    //the input recieved is to be captured and sent in the proper input form position
    this.setState({
      credentials: {
        //spread the creditials to apply the changes from the form input.
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/secure");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <label id="username" htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label id="password" htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    ); //end of the return
  }
} //end of react class component
export default Login;
