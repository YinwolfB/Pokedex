import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const trainerName = useSelector(store => store.trainerName)


    if (trainerName.length > 2) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

}
