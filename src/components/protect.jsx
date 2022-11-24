import { Route,Navigate} from "react-router-dom";


const Protect = ({x}) => {
const isToken=localStorage.getItem('token');
    return (isToken ?x :<Navigate to='/login'/> );
}
 
export default Protect;