import React, { useEffect, useState } from 'react';
import CommonUser from '../../Common/CommonUser';
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';

const MassageSlideBar = () => {
  // =================Redux Data======================
  const sliceUser = useSelector((state) => state.currentUser.value);
  // =================Redux Data======================
  // ==================variable part==================
  const [allFriend, setAllFriends] = useState([]);
  // ==================variable part==================
  // ===================firebase variable=============
  const db = getDatabase();

  // ===================firebase variable=============
  // ==================realtime database==============
  useEffect(() => {
    onValue(ref(db, 'friends/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserId == sliceUser.uid) {
          arr.push({
            friendId: item.val().friendId,
            friendName: item.val().friendName,
            friendPhoto: item.val().friendPhoto,
            key: item.key,
          });
        } else if (item.val().friendId == sliceUser.uid) {
          arr.push({
            friendId: item.val().currentUserId,
            friendName: item.val().currentUserName,
            friendPhoto: item.val().CommonUserphoto,
            key: item.key,
          });
        }
      });
      setAllFriends(arr);
    });
  }, []);
  // ==================realtime database==============

  return (
    <>
      <div className="massagebar w-[400px] bg-slate-400 p-2 h-screen overflow-y-scroll">
        <h2>Friends</h2>
        {allFriend.map((item) => (
          <div key={item.key} className="single_user border-b-2 py-4">
            <CommonUser
              commonUsername={item.friendName}
              CommonUserphoto={item.friendPhoto}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MassageSlideBar;
