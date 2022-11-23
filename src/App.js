import React, { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import Prof from "./components/prof";
import Notfound from "./components/notFound";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import Logout from "./components/logout";

class App extends Component {
  state={
    user:null
  }

  componentDidMount(){
    const token=localStorage.getItem('token');
    if(!token){
      this.setState({user:null})
      return
    }
    // const response =await axios.post('https://reqres.in/api/loginuser',{token});
    const response={
      data:{
        user:{
          name:'ali',
          email:'ali86@gmail.com'
          
        }
      }
    }
    if(!response.data.user){
      this.setState({user:null});
      return
    }
    this.setState({user:response.data.user});
  }
  render() {
    return (
      <>
        <Navbar user={this.state.user}/>

        <div className="container">
          <Routes>
            <Route path="/users/:id" element={<Prof />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
            <Route path="/customer" element={<Navigate to="/users" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
