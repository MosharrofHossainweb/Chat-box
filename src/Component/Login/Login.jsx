import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';
import '../../Component/Common/Loginrester.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { userData } from '../../Slice/UserSlice';
import { getDatabase, ref, set } from 'firebase/database';
const Login = () => {
  // =============normal variable==========
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  // ===============Redux variable=================
  const dispatch = useDispatch();
  // ===============Redux variable=================
  // ================firebase variable=============
  const auth = getAuth();
  const db = getDatabase();
  // ================firebase variable=============
  // ============ Validation Part =========
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear error when user starts typing
  };

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // Simple validation logic
    if (email === '') {
      setEmailError('Enter your email');
    }
    if (password === '') {
      setPasswordError('Enter your password');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoading(false);
          // Signed in
          const user = userCredential.user;
          if (user.emailVerified === false) {
            toast.error('E-mail is not varified!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
          } else {
            navigate('/');
            // =============set data to Redux=============
            dispatch(userData(userCredential.user));
            // =============set data to Redux=============
            // console.log(userCredential.user);
            toast.success('login Successfully', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
            // ===============set data to the local host============
            localStorage.setItem('user', JSON.stringify(userCredential.user));
            // ===============set data to the local host============
            // ===================Set User==========================
            set(ref(db, 'allusers/' + user.uid), {
              userName: userCredential.user.displayName,
              userPhoto: userCredential.user.photoURL,
            });
            // ===================Set User==========================
          }
          // ...
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode == 'auth/invalid-credential') {
            toast.error('Something is wrong!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
          }
        });
    }
    // Further validation or API call can go here
  };

  return (
    <section className="register bg-[#B0D8DA] h-[1000px]">
      <div className="container">
        <div className="account lg:h-[700px] h-[800px] pb-7">
          <div className="account_text">
            <h1 className="lg:w-[390px]">
              Find 3D Objects, Mockups, and Illustrations here.
            </h1>
            <div className="account_img">
              <img src="image/registerbg.png" alt="bg" />
            </div>
          </div>
          <div className="account_form lg:h-[800px] h-[400px] mt-[20px] lg:mt-10">
            <h2 className="mb-5">Login</h2>

            <div className="login_form lg:mt-3">
              <div className="login_button w-full flex justify-center">
                <div className="other_account flex flex-wrap items-center  lg:gap-[100px] md:gap-[30px] gap-2 lg:w-full lg:pl-[100px] md:pl-[30px] pl-7">
                  <button
                    className="flex justify-around hover:bg-slate-100 items-center px-1 border-2 border-[#A6A6A6] border-solid rounded-[20px] w-[200px] h-[50px] lg:w-[300px] lg:h-[67px] md:w-[200px] md:h-[55px]   mt-4 lg:mt-[20px] 
    md:mt-[30px] mb-4 lg:mb-[20px] 
    md:mb-[0px]"
                  >
                    <img
                      className="lg:w-[36px] lg:h-[35px] md:w-[36px] md:h-[35px] w-[26px] h-[25px]  overflow-hidden"
                      src="image/googleLogo.png"
                      alt="google"
                    />
                    <h3>Sign up with Google</h3>
                  </button>
                  <button
                    className="flex justify-around hover:bg-slate-100 items-center px-1 border-2 border-[#A6A6A6] border-solid rounded-[20px] w-[200px] h-[50px] lg:w-[300px] lg:h-[67px] md:w-[200px] md:h-[55px]   mt-4 lg:mt-[20px] 
    md:mt-[30px] mb-4 lg:mb-[20px] 
    md:mb-[30px]"
                  >
                    <img
                      className=" lg:w-[36px] lg:h-[35px] md:w-[36px] md:h-[35px] w-[26px] h-[25px]  overflow-hidden"
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
              <div className="form m-auto">
                <input
                  onChange={handleEmail}
                  className="input lg:w-[300px]"
                  placeholder="Email Address"
                  required
                  type="email"
                  value={email}
                />
                <p className="error-text text-[#4e7072]">{emailError}</p>
                <span className="input-border lg:w-[300px]"></span>
              </div>
              <br />
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
                <p className="error-text text-[#4e7072] ">{passwordError}</p>
                <span className="input-border lg:w-[300px]"></span>
              </div>
            </div>
            <div className="submit_button flex justify-center items-center lg:mt-[50px] md:mt-[30px] mt-[20px]">
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
                    Login
                  </button>
                )}
              </div>
            </div>

            <div className="login_text lg:pb-9">
              <h5 className="text-center lg:text-[26px] md:text-[20px] text-[14px] font-poppins lg:mt-[10px] md:mt-[20px] mt-[10px]">
                Don't have an account?
                <span
                  onClick={() => navigate('/Register')}
                  className="text-[#B0D8DA]"
                >
                  {' '}
                  Register
                </span>
              </h5>
              <Link
                className="text-center mb-[50px] font-semibold hover:text-blue-500 mt-2 flex justify-center"
                to={'/forgetPassword'}
              >
                Forget password?Do you want to reset your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
