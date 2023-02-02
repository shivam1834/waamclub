import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ allowedRoles }) => {
    const location = useLocation();
    // const user = JSON.parse(window.localStorage.getItem('user'));
    const role = JSON.parse(window.localStorage.getItem('roles'));

    return (
        [role]?.find(role => allowedRoles?.includes(role))
        ? <Outlet/>
        : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default PrivateRoute;