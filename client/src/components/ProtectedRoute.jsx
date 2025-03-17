import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/context";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(Context);
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
