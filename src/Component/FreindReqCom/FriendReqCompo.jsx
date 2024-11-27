import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RemoveButton from '../../Common/RemoveButton/RemoveButton';
import CommonButonv1 from '../../Common/CommonButtonv1/CommonButonv1';
import CommonUser from '../../Common/CommonUser';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';

const FriendReqCompo = () => {
  // ===============================redux data=====================================
  const reduxUser = useSelector((state) => state.currentUser.value);
  // ===============================redux data=====================================
  // ===========================All variable part==================================
  const [allReq, setAllReq] = useState([]);
  // ===========================All variable part==================================
  // =================================Firebase=====================================
  const db = getDatabase();

  // =================================Firebase=====================================
  // ================================All function==================================
  const handelRemove = (reqdata) => {
    remove(ref(db, 'friendReq/' + reqdata.key));
  };

  const handelConfirm = (friendData) => {
    set(ref(db, 'friends/'), {
      friendId: friendData.senderId,
      friendPhoto: friendData.senderPhoto,
      friendName: friendData.senderName,
      currentUserId: reduxUser.uid,
      currentUserName: reduxUser.displayName,
      currentUserPhoto: reduxUser.photoURL,
    });
  };
  // ================================All function==================================
  // ==========================Realtime Data base==================================
  // .......................
  useEffect(() => {
    onValue(ref(db, 'friendReq/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().recieverId == reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllReq(arr);
    });
  }, []);
  // ==========================Realtime Data base==================================

  return (
    <>
      <section className="Alluser py-[60px]">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-5">All Friend Request</h2>
          {allReq.map((item) => (
            <div key={item.key} className="single_user flex justify-between ">
              <CommonUser
                commonUsername={item.senderName}
                CommonUserphoto={item.senderPhoto}
              />
              <RemoveButton
                removeButtonClick={() => handelRemove(item)}
                removeButtonContent={'Delete'}
              />
              <CommonButonv1
                commonButton_click={()=>handelConfirm(item)}
                commonButonv1conten={'Confirm'}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FriendReqCompo;
