import React from 'react'

const CommonUser = (CommonUserphoto,commonUsername) => {
  return (
    <>
      <div className="Common flex gap-5 items-center">
        <div className="common_user_img w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-400">
            <img src={CommonUserphoto} alt="userphoto" />
        </div>
        <h2 className='text-xl font-medium'>{commonUsername}</h2>
      </div>
    </>
  )
}

export default CommonUser
