import axios from "axios";
import React, { Component, createRef, Ref } from "react";

class Register extends Component {
  email = createRef();
  password = createRef();
  handlesubmit = async (e) => {
    e.preventDefault();

    console.log(
      "email:",
      this.email.current.value,
      "password:",
      this.password.current.value
    );

    const person = {
      email: this.email.current.value,
      password: this.password.current.value,
    };

    if (person.email && person.password) {
      const response = await axios.post("https://reqres.in/api/users", person);
      console.log(response);
    }
  };
  state = {};
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            ref={this.email}
            id="email"
            className="form-control"
            type="text"
          />
          <label htmlFor="password">password:</label>
          <input
            ref={this.password}
            id="password"
            className="form-control"
            type="text"
          />
          <button className="btn  btn-primary mt-3" type="submit">
            submit
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
