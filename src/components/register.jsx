import axios from "axios";
import React, { Component } from "react";


class Register extends Component {
  handleChange = (e) => {
    //control form with state--------------------------------------------
    const input = e.currentTarget;
    const person = { ...this.state.person };
    person[input.name] = input.value;
    this.setState({ person });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    
    const person = {
      email: this.state.person.email,
      password:this.state.person.password
    
    };

    if (person.email && person.password) {
      const response = await axios.post("https://reqres.in/api/login", person);
      console.log(response);
    }
  };
  state = {
    person: {
      email: "",
      password: "",
    },
  };
  render() {
    const { password, email } = this.state.person; // destracturing...

    return (
      <form onSubmit={this.handlesubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            onChange={this.handleChange}
            value={email}
            name="email"
            id="email"
            className="form-control"
            type="text"
          />
          <label htmlFor="password">password:</label>
          <input
            onChange={this.handleChange}
            value={password}
            name="password"
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
