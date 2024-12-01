import React from 'react'
import MassageSlideBar from '../Component/MassageSlideBar/MassageSlideBar'
import MassageBox from '../Component/MassageBox/MassageBox'

const MassagePage = () => {
  return (
    <>
      <div className="massage flex">
        <MassageSlideBar/>
        <MassageBox/>
      </div>
    </>
  )
}

export default MassagePage
