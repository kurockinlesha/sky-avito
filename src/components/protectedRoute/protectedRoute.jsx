import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    if (!localStorage.getItem('refToken')) {
        return <Navigate to={'/auth'} replace={true} />
    }

    return <Outlet />
}