import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Components/AdminDashboard'
import ProtectedRoute from '../util/ProtectedRoute'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route 
            path="/"
            element={
            <ProtectedRoute>
                <AdminDashboard />
            </ProtectedRoute>
            }
        />
    </Routes>
  )
}

export default AdminRoutes