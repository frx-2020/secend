import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


 
const Loading = () => {
    return ( 
        Array(6).fill({}).map(()=>{
            return(
                <div className="col-4 p-5 text-center">
                <Skeleton circle={true} width={100} height={100}/>
                <Skeleton count={2} className='mb-2' height={30}/>
            
            </div>
            )
            
        })
     );
}
 
export default Loading;