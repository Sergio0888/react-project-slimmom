import useAuth from "shared/hooks/useAuth";
import { Navigate, Outlet } from "react-router";


const PrivateRoute = () => {
    const isUserLogin = useAuth()

    if(!isUserLogin){
        return <Navigate to='/login' />
    }
    return <Outlet/>
}

export default PrivateRoute;