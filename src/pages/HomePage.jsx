import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  collection, getDocs, query, where,
} from 'firebase/firestore';
import { FiPlusSquare, FiLogOut } from 'react-icons/fi';
import { FaUsers, FaCoins } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';
import { db, auth } from '../globals/firebase-config';
import { AddNewPatunganPath } from '../routes';
import { getUserName, getUserID, putAccessToken } from '../utils/helper';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';
import ApiSource from '../data/api-source';
import Loader from '../components/Loader';

function Home() {
  const [currentUser, setCurrentUser] = useState();
  const [patungan, setPatungan] = useState([]);
  const [numbersPatungan, setNumbersPatungan] = useState(0);
  const [idUser, setIdUser] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  const formatRupiah = (changeFormat) => new Intl.NumberFormat('de-ID', { style: 'decimal', currency: 'IDR' }).format(changeFormat);

  const onLogoutHandler = () => {
    swal({
      title: `${locale === 'id' ? 'Apakah kamu yakin?' : 'Are you sure?'}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willLogout) => {
        if (willLogout) {
          signOut(auth)
            .then(() => {
              putAccessToken('');
              navigate('/welcome');
            });
          swal({
            icon: 'success',
            title: `${locale === 'id' ? 'Logout berhasil' : 'Logout success'}`,
            buttons: false,
            timer: 1000,
          });
        }
      });
  };

  let patunganCollectionRef = query(collection(db, 'patungan'), where('idUser', '==', null));

  const getPatungan = async () => {
    const data = await getDocs(patunganCollectionRef);
    setPatungan(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setNumbersPatungan(data.docs.length);
    setLoading(false);
  };

  if (idUser !== undefined) {
    patunganCollectionRef = query(collection(db, 'patungan'), where('idUser', '==', idUser));
  }

  useEffect(() => {
    getUserID(setIdUser);
    getUserName(setCurrentUser);
    getPatungan();
  }, [idUser]);

  useEffect(() => {
    const param = `${theme === 'light' ? 'black' : 'white'}`;
    async function images() {
      const result = await ApiSource.getImages(param);
      setImage(result);
      setImageLoading(false);
    }

    images();
  }, [theme]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="home">
      <section className="payu__dashboard">
        <div className="payu__dashboard-hero">
          {imageLoading ? <div className="payu__dashboard-image placeholder" /> : <img className="payu__dashboard-image" src={image} alt="dashboard-images" />}
          <div className="payu__dashboard-hero-content">
            <h2 tabIndex="0">
              {locale === 'id' ? `Hai ${currentUser}` : `Hi ${currentUser}`}
              !
            </h2>
            <p tabIndex="0">{locale === 'id' ? 'Selamat datang di dashboard patungan' : 'Welcome to patungan dashboard'}</p>
            <p tabIndex="0">{locale === 'id' ? `Kamu memiliki ${numbersPatungan} patungan` : `You have ${numbersPatungan} patungan`}</p>
          </div>
        </div>
        <div className="payu__dashboard-item">
          <div className="payu__dashboard-item__title">
            <h3 tabIndex="0">{locale === 'id' ? 'Daftar Patungan' : 'Patungan List'}</h3>
          </div>
          <div className="payu__dashboard-item__button">
            <button type="button" aria-label="add new patungan"><Link to={`${AddNewPatunganPath}`}><FiPlusSquare /></Link></button>
            <button type="button" className="payu__dashboard-logout-button" aria-label="logout button" onClick={onLogoutHandler}><FiLogOut /></button>
          </div>
        </div>
      </section>
      {patungan.length === 0 ? (
        <p className="empty-conditional-rendering">{locale === 'id' ? 'Patungan kosong...' : 'Patungan is empty...'}</p>
      ) : (
        <section className="payu__list-patungan">
          {patungan.map((group) => {
            const balanceMembers = group.Members.map((member) => member.Total);
            const sumBalance = balanceMembers.reduce((partialSum, a) => partialSum + a, 0);
            return (
              <div className="list-wrapper" key={group.id}>
                <Link to={`/detail-patungan/${group.id}`}>
                  <div className="payu__list-patungan-item">
                    <h3 className="payu__list-patungan-item__description">{group.title}</h3>
                    <section className="payu__list-patungan-item__text">
                      <p>
                        <FaUsers />
                        {' '}
                        {group.Members.length}
                        {' '}
                        {locale === 'id' ? 'anggota' : 'members'}
                      </p>
                      <p>
                        <FaCoins />
                        {' '}
                        Rp
                        {' '}
                        {formatRupiah(sumBalance)}
                      </p>
                    </section>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
}

export default Home;
