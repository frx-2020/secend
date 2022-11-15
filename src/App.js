import React, { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Register from "./components/register";
import About from "./components/aboutus";
import Prof from "./components/prof";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/users/:id" element={<Prof />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
