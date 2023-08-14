import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from './../../hooks/Auth/index';

export const RequireAuth = () => {
    const user = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return <Outlet />;
    }
}