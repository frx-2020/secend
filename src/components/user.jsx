import React, { Component} from 'react';
import axios from 'axios';
class User extends Component {
    state = {
        users:[]
      } 
      async componentDidMount(){
        const repo=await axios.get('https://reqres.in/api/users')
        this.setState({users:repo.data.data})

      }
    render() { 
        return (<>
         <button onClick={this.handleCreate} className="btn btn-lg btn-primary m-2">create</button>
            <div className="row">{
                this.state.users.map((item)=>{return(
                    <div className="col-4 p-5 text-center">
                        <img src={item.avatar} alt="profImg" style={{borderRadius:"50%",width:'100px'}}/>
                        <h5 className='text-info'>{item.email}</h5>
                        <h4>{item.first_name}{item.last_name}</h4>
                        <div className="row">
                            <div className="col-6">
                                <button onClick={this.handleUpdate} className='btn btn-sm btn-info'>Update</button>
                            </div>
                            <div className="col-6">
                                <button onClick={this.handleDelete} className='btn btn-sm btn-danger'>Delete</button>
                            </div>
                        </div>
                    </div>
                )
                    
                })
            }</div>
        </>
           
        );
    }

    handleCreate(){}
    handleUpdate(){}
    handleDelete(){}
}
 
export default User;