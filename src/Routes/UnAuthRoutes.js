import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/SignUp'

const UnAuthRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default UnAuthRoutes