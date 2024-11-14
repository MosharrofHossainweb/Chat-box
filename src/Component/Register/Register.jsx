import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';
import '../../Component/Common/Loginrester.css';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, toast, Zoom } from 'react-toastify';
import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { PulseLoader, ScaleLoader } from 'react-spinners';
import { GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';

const Register = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullname] = useState('');
  const [fullNameError, setFullnameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  // ==========firebase variable===========
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const fbprovider = new FacebookAuthProvider();
  // ==========firebase variable===========

  // Handler for full name input
  const handleFullname = (e) => {
    setFullname(e.target.value);
    setFullnameError(''); // Clear error when user starts typing
  };

  // Handler for email input
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear error when user starts typing
  };

  // Handler for password input
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // ==========login condition============
    

    if (fullName === '') {
      setFullnameError('Enter your name');
    
    }
    if (email === '') {
      setEmailError('Enter your email');

    }
    if (password === '') {
      setPasswordError('Enter your password');
      
    }
    else{
      setLoading(true)

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User registered:', user);

          // navigate('/Login');

          const auth = getAuth();
          sendEmailVerification(auth.currentUser).then(() => {
            setLoading(false);
            // Email verification sent!
            // ...
            // =========sent user name and profile picture=========
            updateProfile(auth.currentUser, {
              displayName: 'fullName',
              photoURL:
                'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
            }).then(() => {
              navigate('/login');
              toast.success('E-mail verification sent', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Flip,
              });
            });
          });
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          console.error('Error registering:', error.message);
          if (errorCode == 'auth/email-already-in-use') {
            toast.error('You have already taken this email!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Flip,
            });
          }
        });
    }
  };
  // ====================google sign in button==============
  const handelGoogle = () => {
    
    signInWithPopup(auth, provider)
    .then((result) => {
        navigate('/')
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  // ====================google sign in button==============
  // =====================facebook signin button============
  const handelFacebook = () => {
    signInWithPopup(auth, fbprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  // =====================facebook signin button============
  return (
    <section className="register bg-[#B0D8DA] h-[1000px]">
      <div className="container">
        <div className="account mb-8  pb-9">
          <div className="account_text">
            <h1 className="lg:w-[390px]">
              Find 3D Objects, Mockups, and Illustrations here.
            </h1>
            <div className="account_img">
              <img src="image/registerbg.png" alt="bg" />
            </div>
          </div>
          <div className="account_form">
            <h2>Create Account</h2>
            <div className="login_button w-full flex justify-center">
              <div className="other_account flex flex-wrap items-center lg:gap-[100px] md:gap-[30px] gap-2 lg:w-full lg:px-[100px] md:pl-[30px] pl-7">
                <button
                  onClick={handelGoogle}
                  className="flex justify-around hover:bg-slate-100 items-center px-1 border-2 border-[#A6A6A6] border-solid rounded-[20px] w-[200px] h-[50px] lg:w-[300px] lg:h-[67px] md:w-[200px] md:h-[55px] mt-4 lg:mt-[20px] md:mt-[30px] mb-4 lg:mb-[20px] md:mb-[0px]"
                >
                  <img
                    className="lg:w-[36px] lg:h-[35px] md:w-[36px] md:h-[35px] w-[26px] h-[25px] overflow-hidden"
                    src="image/googleLogo.png"
                    alt="google"
                  />
                  <h3>Sign up with Google</h3>
                </button>
                <button
                  onClick={handelFacebook}
                  className="flex justify-around hover:bg-slate-100 items-center px-1 border-2 border-[#A6A6A6] border-solid rounded-[20px] w-[200px] h-[50px] lg:w-[300px] lg:h-[67px] md:w-[200px] md:h-[55px] mt-4 lg:mt-[20px] md:mt-[30px] mb-4 lg:mb-[20px] md:mb-[30px]"
                >
                  <img
                    className="lg:w-[36px] lg:h-[35px] md:w-[36px] md:h-[35px] w-[26px] h-[25px] overflow-hidden"
                    src="image/fblogo.png"
                    alt="fb"
                  />
                  <h3>Sign up with Facebook</h3>
                </button>
              </div>
            </div>
            <h4 className="text-center lg:text-[36px] md:text-[26px] text-[16px] font-poppins font-medium text-[#A6A6A6]">
              - OR -
            </h4>
            <div className="login_form">
              <div className="form m-auto">
                <input
                  onChange={handleFullname}
                  className="input lg:w-[300px]"
                  placeholder="Full name"
                  required
                  type="text"
                  value={fullName}
                  
                />
                
                <p>{fullNameError}</p>
                <span className="input-border"></span>
              </div>
              <div className="form  m-auto">
                <input
                  onChange={handleEmail}
                  className="input lg:w-[300px]"
                  placeholder="Email Address"
                  required
                  type="email"
                  value={email}
                />
                <p>{emailError}</p>
                <span className="input-border lg:w-[300px]"></span>
              </div>
              <div className="form  m-auto relative">
                {show ? (
                  <FaRegEyeSlash
                    className="absolute top-[15px] right-[10px]"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaRegEye
                    className="absolute top-[15px] right-[10px]"
                    onClick={togglePasswordVisibility}
                  />
                )}
                <input
                  onChange={handlePassword}
                  className="input lg:w-[300px]"
                  placeholder="Password"
                  required
                  type={show ? 'text' : 'password'}
                  value={password}
                />
                <p>{passwordError}</p>
                <span className="input-border lg:w-[300px]"></span>
              </div>
            </div>
            <div className="submit_button flex justify-center items-center lg:mt-[30px] md:mt-[20px] mt-[20px]">
              {loading ? (
                <button className="sub bg-[#B0D8DA] hover:bg-[#4b6a6c] lg:w-[574px] lg:h-[74px] md:w-[400px] md:h-[60px] w-[220px] h-[50px] rounded-xl">
                  <PulseLoader color="#fff" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="sub bg-[#B0D8DA] hover:bg-[#4b6a6c] lg:w-[574px] lg:h-[74px] md:w-[400px] md:h-[60px] w-[220px] h-[50px] rounded-xl"
                >
                  Create Account
                </button>
              )}
            </div>
            <div className="login_text lg:pb-9">
              <h5 className="text-center lg:text-[26px] md:text-[20px] text-[14px] font-poppins lg:mt-[10px] md:mt-[20px] mt-[10px]">
                Already have an account?
                <span
                  onClick={() => navigate('/Login')}
                  className="text-[#B0D8DA]"
                >
                  {' '}
                  Login
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
