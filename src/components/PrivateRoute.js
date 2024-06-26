import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

const PrivateRoute = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return loggedInUser.email !== undefined ? children : <Navigate to="/login" />;
};

export default PrivateRoute;