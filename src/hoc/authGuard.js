 import { useSelector } from "react-redux";
 import { useLocation, Navigate } from "react-router-dom";
 
 const AuthGuard = (props) => {
     const users = useSelector(state=>state.users);
     const location = useLocation();
     if (!users.auth) {
        return <Navigate to="/auth" state={{from:location}} replace/>
     }
     //If no user return back 
     return props.children;
 };

 export default AuthGuard;