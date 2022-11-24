import axios from "axios";
import { useEffect } from "react";

axios.defaults.headers.common['token']='hello...';
const Dashboard = () => {

    useEffect(()=>{

       async function x (){
        const response=await axios.get('https://reqres.in/api/users');
        console.log('token dash=',response.data);
        }
        x();
        
    },[])
    return ( <h1>Dashboard</h1> );
}
 
export default Dashboard;