import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutOne = () => {
  const sliceUser = useSelector((state) => state.currentUser.value)
  const navigate = useNavigate()
  useEffect(()=>{
    if(sliceUser==null){
      navigate('/login')
    }
  },[])
  return (
    <>
      <Outlet/>
    </>
  )
}

export default LayoutOne
