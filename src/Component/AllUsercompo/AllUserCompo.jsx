import React, { useEffect, useState } from 'react';

import CommonUser from '../../Common/CommonUser';
import Commonbutonv1 from '../../Common/Commonbutonv1';
import { getDatabase, ref, onValue } from 'firebase/database';
const AllUserCompo = () => {
  // =================Redux==============================

  // =================Redux==============================
  // ===============State variable=======================
  const [alluserData, setalluserData] = useState([]);
  // ===============State variable=======================
  // ===============Firebaae variable====================
  const db = getDatabase();

  // ===============Firebaae variable=====================
  // ==================Function part======================

  // ==================Function part======================
  // ======================Realtime data==================

  useEffect(() => {
    onValue(ref(db, 'allusers/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
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
            <div className="single user flex justify-between " key={item.id}>
              <CommonUser
                CommonUserphoto={item.userPhoto}
                commonUsername={item.userName}
              />
              <Commonbutonv1 Commonbutonv1content={'Add Freind'} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllUserCompo;
