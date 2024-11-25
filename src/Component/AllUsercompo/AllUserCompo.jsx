import React, { useEffect, useState } from 'react';

import CommonUser from '../../Common/CommonUser';

import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { useSelector } from 'react-redux';
import CommonButonv1 from '../../Common/CommonButtonv1/CommonButonv1';

const AllUserCompo = () => {
  // =================Redux==============================
  const reduxUser = useSelector((state) => state.currentUser.value);
  // =================Redux==============================
  // ===============State variable=======================
  const [alluserData, setalluserData] = useState([]);
  // ===============State variable=======================
  // ===============Firebaae variable====================
  const db = getDatabase();

  // ===============Firebaae variable=====================
  // ==================Function part======================
  const handelAdd = (data) => {
    set(push(), {
      senderId:reduxUser.uid,
      senderName:reduxUser.displayName,
      senderPhoto:reduxUser.photoURL,
      recieverId: data.key,
      recieverName: data.userName,
      recieverPhoto: data.userPhoto,
    });
  };
  // ==================Function part======================
  // ======================Realtime data==================

  useEffect(() => {
    onValue(ref(db, 'allusers/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key != reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setalluserData(arr);
    });
  }, []);

  // ======================Realtime data==================

  return (
    <>
      <section className="Alluser py-[60px]">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-5">All User</h2>
          {alluserData.map((item) => (
            <div className="single_user flex justify-between " key={item.key}>
              <CommonUser
                CommonUserphoto={item.userPhoto}
                commonUsername={item.userName}
              />
              <CommonButonv1 commonButton_click={()=>handelAdd(item)} CommonButonv1conten={'Add Freind'} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllUserCompo;
