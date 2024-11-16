import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Navber from '../../Navber/Navber'

const LayoutOne = () => {
  const sliceUser = useSelector((state) => state.currentUser.value)
  const navigate = useNavigate()
  useEffect(()=>{
    if(sliceUser==null){
      navigate('/login')
      // =============local Storage======================
      localStorage.removeItem('user')
      // =============local Storage======================
    }
  },[])
  return (
    <>
      <Navber/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
