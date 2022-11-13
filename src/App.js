import React, { Component } from "react";
import User from "./components/user";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Register from "./components/register";
import About from "./components/aboutus";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="container">
        <Routes>
            <Route path="/"          element={<Home/>} />
            <Route path="/users"       element={<User/>} />
            <Route path="/register"       element={<Register/>} />
            <Route path="/about"       element={<About/>} />
            
          </Routes>
           

          {/* <User /> */}
        </div>
      </>
    );
  }
}

export default App;
