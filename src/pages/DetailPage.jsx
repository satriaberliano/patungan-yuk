import React, { useEffect, useState } from 'react';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import AnggotaList from '../components/AnggotaList';
import DetailDashboard from '../components/DetailDashboard';
import { db } from '../globals/firebase-config';
import KegiatanList from '../components/KegiatanList';
import UrlParser from '../url-parser';
import LocaleContext from '../contexts/LocaleContext';
import Loader from '../components/Loader';
import PageNotFound from './PageNotFound';

function DetailPage() {
  const [tab, setTab] = React.useState('Anggota');
  const [loading, setLoading] = useState(true);
  const [patunganTitle, setPatunganTitle] = useState('');
  const [patunganIdShare, setPatunganIdShare] = useState('');
  const [numbersOfMember, setNumbersOfMember] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [patunganMembers, setMembers] = useState([]);
  const [patunganActivity, setActivity] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [refresh, setRefresh] = useState(true);
  const url = UrlParser.parserActiveUrl();
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const deletePatungan = async (id) => {
    const patunganRef = doc(db, 'patungan', id);
    await deleteDoc(patunganRef);
  };

  const onDeletePatungan = async () => {
    swal({
      title: `${locale === 'id' ? 'Apakah anda yakin ingin menghapus patungan ini?' : 'Are you sure you want to delete this patungan?'}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deletePatungan(url.id);
          swal({
            icon: 'success',
            title: `${locale === 'id' ? 'Patungan berhasil dihapus' : 'Patungan was successfully deleted'}`,
            buttons: false,
            timer: 1000,
          })
            .then(() => {
              navigate('/');
            });
        }
      });
  };

  const getDetailPatungan = async () => {
    try {
      const docRef = doc(db, 'patungan', url.id);
      const data = await getDoc(docRef);
      const dataPatungan = data.data();
      setPatunganTitle(dataPatungan.title);
      setPatunganIdShare(dataPatungan.idShare);
      setNumbersOfMember(dataPatungan.Members.length);
      setMembers(dataPatungan.Members);
      setActivity(dataPatungan.Activity);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailPatungan();
  }, [refresh]);

  useEffect(() => {
    const countDetail = async () => {
      const total = await patunganMembers.map((member) => member.Total);
      const sumBalance = await total.reduce((partialSum, a) => partialSum + a, 0);
      setBalance(sumBalance);

      const spend = await patunganActivity.map((activity) => activity.Spend);
      const sumSpend = await spend.reduce((partialSum, a) => partialSum + a, 0);

      const remainingBalance = sumBalance - sumSpend;

      setRemainingBalance(remainingBalance);
    };
    countDetail();
  }, [patunganMembers]);

  const reloadDetailPage = () => {
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  };

  useEffect(() => {
    if (!loading && patunganTitle !== '') {
      const tabContainer = document.getElementById('tab-button');
      const tabItem = tabContainer.getElementsByClassName('tab');
      for (let i = 0; i < tabItem.length; i++) {
        tabItem[i].addEventListener('click', function () {
          const current = document.getElementsByClassName('active');
          current[0].className = current[0].className.replace(' active', '');
          this.className += ' active';
        });
      }
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  if (patunganTitle === '') {
    return <PageNotFound />;
  }

  return (
    <section className="detail-patungan">
      <section className="detail__dashboard">
        <div className="detail__dashboard-title">
          <h2 tabIndex="0">{locale === 'id' ? 'Halaman Patungan' : 'Patungan Page'}</h2>
          <p tabIndex="0">{locale === 'id' ? 'Detail Patungan Kamu' : 'Your patungan details'}</p>
        </div>
        <DetailDashboard
          deletePatungan={onDeletePatungan}
          patunganTitle={patunganTitle}
          numbersOfMember={numbersOfMember}
          balance={Balance}
          remainingBalance={remainingBalance}
          idPatungan={url.id}
          patuganIdShare={patunganIdShare}
        />
      </section>
      <section className="detail__list-user">
        <div className="detail__list-user-choice" id="tab-button">
          <button type="button" className="tab active" onClick={() => setTab('Anggota')}>{locale === 'id' ? 'Anggota' : 'Members'}</button>
          <button type="button" className="tab" onClick={() => setTab('Kegiatan')}>{locale === 'id' ? 'Kegiatan' : 'Activity'}</button>
        </div>
        <input
          className="detail__list-user-search"
          placeholder={locale === 'id' ? 'Cari anggota atau kegiatan' : 'Find members or activity'}
          onChange={(event) => { setSearchTerm(event.target.value); }}
        />
        <div className="detail__list-user-content">
          {tab === 'Anggota' && <AnggotaList refresh={reloadDetailPage} patunganMembers={patunganMembers} searchTerm={searchTerm} idPatungan={url.id} />}
          {tab === 'Kegiatan' && <KegiatanList refresh={reloadDetailPage} patunganActivity={patunganActivity} searchTerm={searchTerm} idPatungan={url.id} />}
        </div>
      </section>
    </section>
  );
}

export default DetailPage;
