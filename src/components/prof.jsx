import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useLocation, useParams ,useNavigate} from "react-router-dom";
import queryString from "query-string";


const Prof = (props) => {
 
  const param = useParams();
  const history=useNavigate();
  
  const [item, setuser] = useState({});

  const loc = useLocation();
  console.log(queryString.parse(loc.search));
  

  useEffect(() => {
    async function xxx() {
      const x = await axios.get(`https://reqres.in/api/users/${param.id}`);
      setuser(x.data.data);
     
    }
    xxx();
  }, []);

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
     <button onClick={()=>{history('/users',{replace:true})}} className="btn  mt-3 btn-primary">users</button>
    </div>
  );
};

export default Prof;
