import React, { Component } from "react";

class Register extends Component {
    handlesubmit =(e)=>{
        e.preventDefault();
    

console.log('sumbit...!');
    }
  state = {};
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input id="email" className="form-control" type="text" />
          <label htmlFor="password">password:</label>
          <input id="password" className="form-control" type="text" />
          <button className="btn  btn-primary mt-3" type="submit" >submit</button>
        </div>
      </form>
    );
  }
}

export default Register;
