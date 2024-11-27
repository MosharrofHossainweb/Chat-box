import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import { FaUserSlash } from 'react-icons/fa';

import { MdMessage } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { FaUsersGear } from "react-icons/fa6";
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
          {/* =================================All user================================== */}
          <Link to={'/alluserPages'}>
            <FaUserTie className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>

          {/* =================================All user================================== */}
          {/* ===================================Friends Requst=========================== */}
          <Link to={'/friendReq'}>
            <FaUserPlus className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          {/* ===================================Friends Requst=========================== */}
          {/* ===================================Block list part=========================== */}
          <Link to={'/'}>
            <FaUserSlash className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          {/* ===================================Block list part=========================== */}
          {/* ===================================Profile part=============================== */}
          <div className="user w-[65px] h-[65px]  bg-slate-400 rounded-[50%] active:scale-[1.1]  border-2 border-blue-600 overflow-hidden ">
            <img src={sliceUser?.photoURL} alt="" />
          </div>
          {/* ===================================Profile part=============================== */}
          {/* ========================================People part================================ */}
          <Link to={'/SendReq'}>
            <FaUsersGear className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          {/* ========================================People part================================ */}
          {/* ========================================People part================================ */}
          <Link to={'/friends'}>
            <FaUsersGear className="text-4xl active:scale-[1.1] m-1  hover:text-yellow-700" />
          </Link>
          {/* ========================================People part================================ */}
          {/* ======================================Massage part================================== */}
          <Link to={'/'}>
            <MdMessage className="text-4xl active:scale-[1.1] m-1 hover:text-yellow-700 " />
          </Link>
          {/* ======================================Massage part================================== */}

          <button onClick={handelLogout}>
            <MdLogout className="text-4xl active:scale-[1.1] m-1 hover:text-yellow-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navber;
