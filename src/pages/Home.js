/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {db} from '../firebase-config';
import { collection, getDocs } from "firebase/firestore"
import { AddNewPatunganPath, InfoPath } from "../routes";
import { FiPlusSquare, FiLogOut } from 'react-icons/fi';
import { FaUsers, FaCoins } from 'react-icons/fa';
import UnsplashSource from "d:/sib x dicoding/.capstone/capstone project file/patungan-yuk/src/data/unsplash-source";
import LocaleContext from "../contexts/LocaleContext";

function Home(){
  const [patungan, setPatungan] = useState([]);
  const [numbersPatungan, setNumbersPatungan] = useState(0);
  const [ image, setImage ] = useState('');
  const { locale } = React.useContext(LocaleContext);

  // const title = "Jalan jalan ke labuan bajo"
  
  // const patunganCollectionRef = query(collection(db, "patungan"), where("title", "==", title))
  const patunganCollectionRef = collection(db, "patungan");

  useEffect(()=> {
    const getPatungan = async () => {
      const data = await getDocs(patunganCollectionRef);
      
      setPatungan(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setNumbersPatungan(data.docs.length);
    }

    async function image() {
      const result = await UnsplashSource.getImage('sky');
      setImage(result);
    }

    getPatungan();
    image();

  },[]);

  return(
    <section className="home">
      <section className="payu__dashboard">
        <div className="payu__dashboard-hero">
          <img className="payu__dashboard-image" src={image} alt="dashboard-images"></img>
          <div className="payu__dashboard-hero-content">
            <h2 tabindex="0">{locale === 'id' ? 'Hai Pengguna' : 'Hi User'}!</h2>
            <p tabindex="0">{locale === 'id' ? 'Selamat datang di halaman dashboard patungan' : 'Welcome to patungan dashboard page'}</p>
            <p tabindex="0">{locale === 'id' ? `Kamu memiliki ${numbersPatungan} patungan` : `You have ${numbersPatungan} patungan`}</p>
          </div>
        </div>
        <div className="payu__dashboard-item">
          <div className='payu__dashboard-item__title'>
            <h3 tabindex="0">{locale === 'id' ? 'Daftar Patungan' : 'Patungan List'}</h3>
          </div>
          <div className="payu__dashboard-item__button">
            <button type='button'><Link to={`${AddNewPatunganPath}`}><FiPlusSquare /></Link></button>
            <button type='button'><Link to={`${InfoPath}`}><FiLogOut /></Link></button>
          </div>
        </div>
      </section>
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
    </section>
  )
};

export default Home;