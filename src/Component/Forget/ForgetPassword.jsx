import React, { useState } from 'react';
import '../Forget/Forgetpasword.css';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Bounce, Slide, toast } from 'react-toastify';

// ===========Firebase===========
const auth = getAuth();
// ===========Firebase===========

const ForgetPassword = () => {
  const [inputData, setInputData] = useState('');

  const handelRest = () => {
    if (!inputData) {
      toast.error('Enter your Email!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        })
    } else {
      sendPasswordResetEmail(auth, inputData)
        .then(() => {
          toast.success('Password Reset E-mail Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          // ..
        });
    }
  };

  return (
    <>
      <div className="forget flex flex-col gap-4 ml-[600px]  justify-center pt-[300px]">
        <div className="relative rounded-full  overflow-hidden bg-blue-100 shadow-xl w-[400px]">
          <input
            onChange={(e) => setInputData(e.target.value)}
            className="input bg-transparent outline-none border-none pl-7 ml-3 pr-7 py-7 h-[65px] w-full font-sans text-lg font-semibold"
            placeholder="Enter your E-mail"
            name="text"
            type="text"
          />
          <div className="absolute right-2 top-[0.4em]">
            <button
              onClick={handelRest}
              className="w-14 h-14 active:scale-[1.1] rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
            >
              <svg
                className="relative z-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 64 64"
                height="50"
                width="50"
              >
                <path
                  fillOpacity="0.01"
                  fill="white"
                  d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="3.76603"
                  stroke="white"
                  d="M42.8496 18.7067L21.0628 44.6712"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="3.76603"
                  stroke="white"
                  d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                ></path>
              </svg>
              <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
              <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
            </button>
          </div>
        </div>
        <Link className="ml-5" to={'/login'}>
          Remember Password?Login
        </Link>
      </div>
    </>
  );
};

export default ForgetPassword;
