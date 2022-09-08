import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import ProtectedRoute from '../util/ProtectedRoute'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route 
            path="/"
            element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
            }
        />
        <Route 
            path="/home"
            element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
            }
        />
    </Routes>
  )
}

export default AuthRoutes