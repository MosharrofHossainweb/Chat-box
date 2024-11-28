import React, { useEffect, useState } from 'react';
import CommonButonv1 from '../../Common/CommonButtonv1/CommonButonv1';
import CommonUser from '../../Common/CommonUser';
import RemoveButton from '../../Common/RemoveButton/RemoveButton';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from 'firebase/database';

const FriendCompo = () => {
  // =================Redux Data======================
  const sliceUser = useSelector((state) => state.currentUser.value);
  // =================Redux Data======================
  // ==================variable part==================
  const [allFriend, setAllFriends] = useState([]);
  // ==================variable part==================
  // ===================firebase variable=============
  const db = getDatabase();

  // ===================firebase variable=============
  // ===================all function==================

  // ===================all function==================
  // ==================realtime database==============
  useEffect(() => {
    onValue(ref(db, 'friends/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserId == sliceUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllFriends(arr);
    });
  }, []);
  // ==================realtime database==============

  return (
    <>
      <section className="Alluser py-[60px]">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-5">Friend Setting </h2>
          {allFriend.map((item) => (
            <div key={item.key} className="single_user flex justify-between ">
              <CommonUser commonUsername={item.friendName} CommonUserphoto={item.friendPhoto} />
              {/* <RemoveButton removeButtonContent={'Unfriend'} /> */}
              <CommonButonv1 commonButonv1conten={'Block'} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FriendCompo;
