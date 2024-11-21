import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import { FaUserSlash } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { useSelector } from 'react-redux';
const Navber = () => {
  // =====================Variable part =======================
  const sliceUser = useSelector((state) => state.currentUser.value);
  const navigate = useNavigate();
  // =====================Variable part =======================

  // ===============funtionality===============
  const handelLogout = () => {
    navigate('/login');
  };
  // ===============funtionality===============

  console.log(sliceUser);
  return (
    <>
      <nav className="p-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] absolute top-[50%] rounded-sm translate-y-[-50%] right-5">
        <div className="icon_box flex gap-5 flex-col items-center">
          <Link to={'/alluserPages'}>
            <FaUserTie className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          <Link to={'/'}>
            <FaUserPlus className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          <Link to={'/'}>
            <FaUserSlash className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          <div className="user w-[65px] h-[65px]  bg-slate-400 rounded-[50%] active:scale-[1.1]  border-2 border-blue-600 overflow-hidden ">
            <img src={sliceUser?.photoURL} alt="" />
          </div>
          <Link to={'/'}>
            <FaUserFriends className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          <Link to={'/'}>
            <MdMessage className="text-4xl active:scale-[1.1] m-1 hover:text-yellow-700 " />
          </Link>

          <button onClick={handelLogout}>
            <MdLogout className="text-4xl active:scale-[1.1] m-1 hover:text-yellow-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navber;
