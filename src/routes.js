import React from 'react'
const { useEffect } = React
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProducts } from './api/api'
import { setProducts } from './store/slices/avito'
import { Auth } from './pages/auth/auth'
import { Main } from './pages/main/main'
import { Reg } from './pages/reg/reg'
import { Profile } from './pages/profile/profile'
import { ProfileSeller } from './pages/profileSeller/profileSeller'
import { Product } from './pages/product/product'
import { ProtectedRoute } from './components/protectedRoute/protectedRoute'

export const AppRoutes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getProducts().then((data) => {
            dispatch(setProducts(data))
        })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<Main />} />
                <Route path="/reg" element={<Reg />} />
                <Route path="/profileSeller/:id" element={<ProfileSeller />} />
                <Route path="/product/:id" element={<Product />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}