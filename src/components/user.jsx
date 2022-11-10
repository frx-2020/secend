import React, { Component } from "react";
import axios from "axios";
import Loading from "./loading/loading";

class User extends Component {
  state = {
    users: [],
    flag: true,
  };
  async componentDidMount() {
    const repo = await axios.get("https://reqres.in/api/users");
    this.setState({ users: repo.data.data, flag: false });
    
  }
  render() {
    return (
      <>
        <button
          onClick={this.handleCreate}
          className="btn btn-lg btn-primary m-2"
        >
          create
        </button>
        <div className="row">
          {this.state.flag ? (
            <Loading />
          ) : (
            this.state.users.map((item) => {
              return (
                <div className="col-4 p-5 text-center">
                  <img
                    src={item.avatar}
                    alt="profImg"
                    style={{ borderRadius: "50%", width: "100px" }}
                  />
                  <h5 className="text-info">{item.email}</h5>
                  <h4>
                    {item.first_name}
                    {item.last_name}
                  </h4>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={()=>{this.handleUpdate(item)}}
                        className="btn btn-sm btn-info"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={()=>{this.handleDelete(item)}}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }

   handleCreate =async()=> {
    const newUser={
        first_name:"reza",
        last_name:"rahmani",
        email:"reza86@yahoo.com",
        avatar:"https://picsum.photos/200"
    }
    const response =await axios.post('https://reqres.in/api/users',newUser);
     // console.log(response.data);
    this.setState({users:[...this.state.users,newUser]})
   
 
    // const newusers =await axios.get("https://reqres.in/api/users");
   // this.setState({users:newusers.data.data})
   
    // console.log(newusers.data.data);


    


  }
  handleUpdate=async(item)=> {
  item.first_name='name-edited';
  const response =await axios.put(`https://reqres.in/api/users/${item.id}`);

  const updetedUsers=[...this.state.users];
  const index=updetedUsers.indexOf(item);
  updetedUsers[index]={...item};
  this.setState({users:updetedUsers})
  }
  handleDelete=async(item)=> {
   const rsponse= await axios.delete(`https://reqres.in/api/users/${item.id}`);
    const newUsers=this.state.users.filter((i)=>(i.id !==item.id))
    this.setState({users:newUsers});
  }
}

export default User;
