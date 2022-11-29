import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {db} from '../config/firebase-config';
import { collection, getDocs, query, where } from "firebase/firestore"
import { AddNewPatunganPath } from "../routes";
import { FiPlusSquare, FiLogOut } from 'react-icons/fi';
import { FaUsers, FaCoins } from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { getUserName, getUserID, putAccessToken } from "../utils/helper";
import { async } from "@firebase/util";

function Home(){
  const [currentUser, setCurrentUser] = useState();
  const [patungan, setPatungan] = useState([]);
  const [numbersPatungan, setNumbersPatungan] = useState(0);
  const [idUser, setIdUser] = useState();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    signOut(auth)
    .then(() => {
      alert('Logout Berhasil');
      putAccessToken('');
      navigate('/info');
    })
  }

  let patunganCollectionRef = query(collection(db, "patungan"), where("idUser", "==", null))
  
  const getPatungan = async () => {
    const data = await getDocs(patunganCollectionRef);
    setPatungan(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    setNumbersPatungan(data.docs.length);
  }
  if(idUser !== undefined){
   patunganCollectionRef = query(collection(db, "patungan"), where("idUser", "==", idUser));
  }else{console.log(idUser)
    };

  useEffect(()=> {
    getUserID(setIdUser);
    getUserName(setCurrentUser);
    getPatungan();
  },[idUser]);
  
  
  return(
    <section className="home">
      <section className="payu__dashboard">
        <div className="payu__dashboard-item">
          <div className='payu__dashboard-item__title'>
            {currentUser && <h2>Hai, {currentUser}!</h2>}
            <p>Kamu memiliki {numbersPatungan} patungan</p>
          </div>
          <div className="payu__dashboard-item__patungan">
            <div className="payu__dashboard-item__button">
              <button type='button'><Link to={`${AddNewPatunganPath}`}><FiPlusSquare /></Link></button>
              <button type='button' onClick={onLogoutHandler}><FiLogOut /></button>
            </div>
          </div>
        </div>
      </section>
      <section className="payu__list-patungan">
        {patungan.map((group) => {
          const balanceMembers = group.Members.map((member) => {
            return member.Total
          })
          const sumBalance = balanceMembers.reduce((partialSum, a) => partialSum + a, 0);
          return <div key={group.id} >
                  <Link to={`/detail-patungan/${group.id}`}>
                    <div className="payu__list-patungan-item">
                      <h3 className="payu__list-patungan-item__description">{group.title}</h3>
                      <section className="payu__list-patungan-item__text">
                        <p><FaUsers /> {group.Members.length} anggota</p>
                        <p><FaCoins /> Rp {sumBalance}</p>
                      </section>
                    </div>
                  </Link>
                 </div>
        })}
      </section>
    </section>
  )
};

export default Home;