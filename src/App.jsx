import React, { createElement } from 'react'
import './Component/Common/Loginrester.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import Home from './Pages/Home'
const App = () => {

  const myroute = createBrowserRouter(createRoutesFromElements(

   <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
      
   </Route>
  ))
    
  return (
    <>
    <RouterProvider router ={myroute}/>
    <ToastContainer />
    </>
  )
}

export default App