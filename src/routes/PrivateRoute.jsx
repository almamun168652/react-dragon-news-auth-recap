import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner text-blue-600 loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivateRoute;