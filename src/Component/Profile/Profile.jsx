import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Redux data
  const sliceUser = useSelector((state) => state.currentUser.value)

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center p-4 border-b border-gray-300">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={sliceUser?.photoURL}
            alt="Profile pict"
            className="w-40 mt-5 h-40 rounded-full"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-200 border border-white rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/12" alt="Camera Icon" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center">
          <h1 className="text-xl font-bold">{sliceUser.displayName || 'Mosharrof Hossain Minhaz'}</h1>
          <p className="text-sm text-gray-500">{sliceUser?.friends || '2.7K'} friends</p>
          <p className="text-sm text-gray-500">{sliceUser?.email || 'Email'} mosharrofhossainpdl@gmail.com</p>
        </div>

        {/* Buttons */}
        <div className="flex mt-6 items-center space-x-2">
          <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600">
            + Add to story
          </button>
          <button className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-300">
            Edit profile
          </button>
          <button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300">
            <span className="text-gray-500">⋮</span>
          </button>
          <Link className="ml-5" to={'/login'}>Log Out</Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
