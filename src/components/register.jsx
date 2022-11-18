import axios from "axios";
import React, { Component } from "react";
import Input from "./input";
import * as yup from "yup";

class Register extends Component {
  state = {
    person: {
      email: "",
      password: "",
    },
    errors: [],
    sending: false,
  };

  schema = yup.object().shape({
    email: yup
      .string("ادرس شما باید رشته باشد")
      .email("ای دی شما نا معتبر است")
      .required("پر کردن فیلد ایمیل الزامی است"),
    password: yup
      .string("پسورد شما باید رشته باشد")
      .min(4, "طول پسورد باید بیشتر از ۴ کاراکتر باشد"),
  });

  validation = async () => {
    try {
      this.setState({ errors: [] });
      const result = await this.schema.validate(this.state.person, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
      console.log(error.errors);
    }
  };

  handleChange = (e) => {
    //control form with state--------------------------------------------
    const input = e.currentTarget;
    const person = { ...this.state.person };
    person[input.name] = input.value;
    this.setState({ person });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    const result = await this.validation();
    console.log(result);
    if (result) {
      try {
        this.setState({ sending: true });
        await axios.post("https://reqres.in/api/login", result);
        this.setState({ sending: false });
      } catch (error) {
        this.setState({ errors: ["اطلاعات صحیح نمیباشد"] });
        this.setState({ sending: false });
      }
    }
  };

  render() {
    const { password, email } = this.state.person; // destracturing...

    return (
      <>
        {this.state.errors.length !== 0 && (
          <div className="alert alert-danger">
            <ul>
              {this.state.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={this.handlesubmit}>
          <div className="mb-3">
            <Input
              onChange={this.handleChange}
              value={email}
              name="email"
              Label="Email"
            />
            <Input
              onChange={this.handleChange}
              value={password}
              name="password"
              Label="Password"
            />

            <button
              className="btn  btn-primary mt-3"
              type="submit"
              disabled={this.state.sending}
            >
              submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Register;
