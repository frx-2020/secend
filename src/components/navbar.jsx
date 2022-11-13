import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom'
class Navbar extends Component {
  state = {  } 
  render() { 
    return (<>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/register">register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/users">users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">about us</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </>);
  }
}
 
export default Navbar;






