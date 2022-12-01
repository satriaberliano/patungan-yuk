/* eslint-disable react-hooks/exhaustive-deps */
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
import LocaleContext from "../contexts/LocaleContext";
import ApiSource from "../data/api-source";

function Home(){
  const [ currentUser, setCurrentUser ] = useState();
  const [ patungan, setPatungan ] = useState([]);
  const [ numbersPatungan, setNumbersPatungan ] = useState(0);
  const [ idUser, setIdUser ] = useState();
  const [ image, setImage ] = useState();
  const [ quotes, setQuotes ] = useState();
  const [ author, setAuthor ] = useState();
  const { locale } = React.useContext(LocaleContext);
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
  if (idUser !== undefined){
    patunganCollectionRef = query(collection(db, "patungan"), where("idUser", "==", idUser));
  }else{console.log(idUser)
  };

  useEffect(()=> {    
    getUserID(setIdUser);
    getUserName(setCurrentUser);
    getPatungan();
  },[idUser]);

  useEffect(() => {
    async function images() {
      const result = await ApiSource.getImages();
      setImage(result);
    }

    async function quotes() {
      const results = await ApiSource.getQuotes();
      results.forEach((result) => {
        setQuotes(result.quote);
        setAuthor(result.author);
      });
    }

    images();
    quotes();
  },[]);
  
  return(
    <section className="home">
      <section className="payu__dashboard">
        {/* <p tabIndex="0" className="payu__dashboard-quotes">"{quotes}" <br /><strong>{author}</strong></p> */}
        <div className="payu__dashboard-hero">
          <img className="payu__dashboard-image" src={image} alt="dashboard-images"></img>
          <div className="payu__dashboard-hero-content">
            <h2 tabIndex="0">{locale === 'id' ? `Hai ${currentUser}` : `Hi ${currentUser}`}!</h2>
            <p tabIndex="0">{locale === 'id' ? 'Selamat datang di halaman dashboard patungan' : 'Welcome to patungan dashboard page'}</p>
            <p tabIndex="0">{locale === 'id' ? `Kamu memiliki ${numbersPatungan} patungan` : `You have ${numbersPatungan} patungan`}</p>
          </div>
        </div>
        <div className="payu__dashboard-item">
          <div className='payu__dashboard-item__title'>
            <h3 tabIndex="0">{locale === 'id' ? 'Daftar Patungan' : 'Patungan List'}</h3>
          </div>
          <div className="payu__dashboard-item__button">
            <button type='button' aria-label='add new patungan'><Link to={`${AddNewPatunganPath}`}><FiPlusSquare /></Link></button>
            <button type='button' className="payu__dashboard-logout-button" aria-label='logout button' onClick={onLogoutHandler}><FiLogOut /></button>
          </div>
        </div>
      </section>
      {patungan.length === 0 ? (
        <p className='home-conditional-rendering'>{locale === 'id' ? 'Patungan kosong...' : 'Patungan is empty...'}</p>
      ) : (
        <section className="payu__list-patungan">
          {patungan.map((group) => {
            const balanceMembers = group.Members.map((member) => {
              return member.Total
            })
            const sumBalance = balanceMembers.reduce((partialSum, a) => partialSum + a, 0);
            return <div className="list-wrapper" key={group.id} >
                    <Link to={`/detail-patungan/${group.id}`}>
                      <div className="payu__list-patungan-item">
                        <h3 className="payu__list-patungan-item__description">{group.title}</h3>
                        <section className="payu__list-patungan-item__text">
                          <p><FaUsers /> {group.Members.length} {locale === 'id' ? 'anggota' : 'members'}</p>
                          <p><FaCoins /> Rp {sumBalance}</p>
                        </section>
                      </div>
                    </Link>
                  </div>
          })}
        </section>
      )}
    </section>
  )
};

export default Home;