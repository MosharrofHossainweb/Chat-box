import React, { useEffect, useState } from 'react';
import CommonButonv1 from '../../Common/CommonButtonv1/CommonButonv1';
import CommonUser from '../../Common/CommonUser';
import { useSelector } from 'react-redux';
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from 'firebase/database';

const BlockUserCompo = () => {
  // =================Redux Data======================
  const sliceUser = useSelector((state) => state.currentUser.value);
  // =================Redux Data======================
  // ==================variable part==================
  const [allBlockuser, setAllBlockUser] = useState([]);
  // ==================variable part==================
  // ===================firebase variable=============
  const db = getDatabase();

  // ===================firebase variable=============
  // ===================All functionality=============
  const handelunBlock = (friendData) => {
    set(push(ref(db, 'friends/')), {
      friendId: friendData.blockUserId,
      friendPhoto: friendData.blockUserPhoto,
      friendName: friendData.blockUseName,
      currentUserId: sliceUser.uid,
      currentUserName: sliceUser.displayName,
      currentUserPhoto: sliceUser.photoURL,
    });
    remove(ref(db, 'blockusers/' + friendData.key));
  };
  // ===================All functionality=============
  // ==================realtime database==============
  useEffect(() => {
    onValue(ref(db, 'friends/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserId == sliceUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllBlockUser(arr);
    });
  }, []);

  // ==================realtime database==============

  return (
    <>
      <section className="Alluser py-[60px]">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-5">Block List</h2>
          {allBlockuser.map((item) => (
            <div key={item.key} className="single_user flex justify-between ">
              <CommonUser
                commonUsername={item.blockUseName}
                CommonUserphoto={item.blockUserPhoto}
              />

              <CommonButonv1
                commonButton_click={() => handelunBlock(item)}
                commonButonv1conten={'Unblock'}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlockUserCompo;
