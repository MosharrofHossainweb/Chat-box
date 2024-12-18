import React, { useEffect, useState } from 'react';
import CommonButonv1 from '../../Common/CommonButtonv1/CommonButonv1';
import CommonUser from '../../Common/CommonUser';

import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, set, push, remove } from 'firebase/database';

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
  const handelBlock = (blockUserData) => {
    set(push(ref(db, 'blockusers/' )), {
     blockUserId:blockUserData.friendId,
     blockUseName:blockUserData.friendName,
     blockUserPhoto:blockUserData.friendPhoto,
     currentUserId:sliceUser.uid
    });
    remove(ref(db,'friends/' + blockUserData.key))
  };
  // ===================all function==================
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
            friendPhoto: item.val().currentUserPhoto,
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
      <section className="Alluser py-[60px]">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-5">Friends</h2>
          {allFriend.map((item) => (
            <div key={item.key} className="single_user flex justify-between ">
              <CommonUser
                commonUsername={item.friendName}
                CommonUserphoto={item.friendPhoto}
              />
              {/* <RemoveButton removeButtonContent={'Unfriend'} /> */}
              <CommonButonv1
                commonButton_click={() => handelBlock(item)}
                commonButonv1conten={'Block'}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FriendCompo;
