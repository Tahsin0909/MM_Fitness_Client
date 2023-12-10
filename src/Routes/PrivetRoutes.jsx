import { useContext } from "react";
import { AuthContext } from "../Components/ContextApi/ContextApi";
import { Navigate } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";


const PrivateRoutes = ({children}) => {
    const { AuthUser, loading } = useContext(AuthContext)
    if(loading){
        return <Spinner/>
    }
    if(AuthUser){
        return children
    }
    return <Navigate to={`/logIn?${location.pathname}`} replace={true} />
};

export default PrivateRoutes;