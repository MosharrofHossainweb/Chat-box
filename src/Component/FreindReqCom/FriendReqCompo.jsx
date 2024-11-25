import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RemoveButton from '../../Common/RemoveButton/RemoveButton';
import CommonButonv1 from '../../Common/CommonButtonv1/CommonButonv1';
import CommonUser from '../../Common/CommonUser';
import { getDatabase, ref, onValue } from "firebase/database";

const FriendReqCompo = () => {
  // ===============================redux data=====================================
  const reduxUser = useSelector((state) => state.currentUser.value);
  // ===============================redux data=====================================
  // ===========================All variable part==================================
  const [allReq,setAllReq]= useState([])
  // ===========================All variable part==================================
  // =================================Firebase=====================================
   const db = getDatabase();

  // =================================Firebase=====================================
  // ================================All function==================================
  // ================================All function==================================
  // ==========================Realtime Data base==================================
  // .......................
    useEffect(()=>{
      
      onValue(ref(db,'friendRequest/'), (snapshot) => {
        let arr =[]
        snapshot.forEach((item)=>{
          if(item.val().recieverId== reduxUser.uid){
            arr.push({...item.val(),key:item.key})
          }
        })
        setAllReq(arr)
      });
    },[]);
  // ==========================Realtime Data base==================================

  return (
    <>
      <section className="Alluser py-[60px]">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-5">All Friend Request</h2>
        {
          allReq.map((item)=>(

          <div key={item.key} className="single_user flex justify-between " >
              <CommonUser commonUsername={item.senderName} CommonUserphoto={item.senderPhoto} />
              <CommonButonv1  Commonbutonv1content={'Confirm'} />
          <RemoveButton removeButtonContent={'Cancel'} />
            </div>
          ))
        }
        </div>
      </section>
    </>
  );
};

export default FriendReqCompo;
