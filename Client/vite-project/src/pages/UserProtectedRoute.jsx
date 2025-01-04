import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const UserProtectedRoute =  ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/user-login')
        }
    }, [token, navigate])


    return (
        <>
            {children}
        </>
    )
}


export default UserProtectedRoute