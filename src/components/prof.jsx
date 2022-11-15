import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";



const Prof = (props) => {
    const param =useParams()
    const[item,setuser]=useState({});


    useEffect( ()=>{async function xxx(){  
    const x =await axios.get(`https://reqres.in/api/users/${param.id}`); 
    setuser(x.data.data);
    console.log(x.data.data);
     }
     xxx();

     
     },[]

     
    
 )



   
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
    }
    

 
export default Prof;