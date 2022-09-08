import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditorDashboard from '../Components/EditorDashboard'
import ProtectedRoute from '../util/ProtectedRoute'

const EditorRoutes = () => {
  return (
    <Routes>
        <Route 
            path="/"
            element={
            <ProtectedRoute>
                <EditorDashboard />
            </ProtectedRoute>
            }
        />
    </Routes>
  )
}

export default EditorRoutes