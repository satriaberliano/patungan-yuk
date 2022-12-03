import React, { useState, useEffect } from 'react';
import {
  getDocs, where, query, collection,
} from 'firebase/firestore';
import SharedAnggotaList from '../components/SharedAnggotaList';
import SharedDetailDashboard from '../components/SharedDetailDashboard';
import SharedKegiatanList from '../components/SharedKegiatanList';
import { db } from '../globals/firebase-config';
import UrlParser from '../url-parser';
import LocaleContext from '../contexts/LocaleContext';
import PageNotFound from './PageNotFound';
import Loader from '../components/Loader';

function SharedDetailPage() {
  const [tab, setTab] = React.useState('Anggota');
  const [patunganTitle, setPatunganTitle] = useState('');
  const [numbersOfMember, setNumbersOfMember] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [patunganMembers, setMembers] = useState([]);
  const [patunganActivity, setActivity] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { locale } = React.useContext(LocaleContext);

  const url = UrlParser.parserActiveUrl();

  const countDetail = async () => {
    const total = await patunganMembers.map((member) => member.Total);
    const sumBalance = await total.reduce((partialSum, a) => partialSum + a, 0);
    setBalance(sumBalance);

    const spend = await patunganActivity.map((activity) => activity.Spend);
    const sumSpend = await spend.reduce((partialSum, a) => partialSum + a, 0);

    const remainingBalance = sumBalance - sumSpend;

    setRemainingBalance(remainingBalance);
  };

  const getDetailPatungan = async () => {
    try {
      const docRef = query(collection(db, 'patungan'), where('idShare', '==', url.id));
      const data = await getDocs(docRef);
      const dataPatungan = data.docs[0].data();
      setPatunganTitle(dataPatungan.title);
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
  }, []);

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

    countDetail();
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
          <p tabIndex="0">{locale === 'id' ? 'Detail patungan yang dibagikan' : 'Shared patungan details'}</p>
        </div>
        <SharedDetailDashboard
          patunganTitle={patunganTitle}
          numbersOfMember={numbersOfMember}
          balance={Balance}
          remainingBalance={remainingBalance}
        />
      </section>
      <section className="detail__list-user">
        <div className="detail__list-user-choice" id="tab-button">
          <button type="button" className="tab active" onClick={() => setTab('Anggota')}>{locale === 'id' ? 'Anggota' : 'Members'}</button>
          <button type="button" className="tab" onClick={() => setTab('Kegiatan')}>{locale === 'id' ? 'kegiatan' : 'Activity'}</button>
        </div>
        <input
          className="detail__list-user-search"
          placeholder={locale === 'id' ? 'Cari anggota atau kegiatan' : 'Find members or activity'}
          onChange={(event) => { setSearchTerm(event.target.value); }}
        />
        <div className="detail__list-user-content">
          {tab === 'Anggota' && <SharedAnggotaList patunganMembers={patunganMembers} searchTerm={searchTerm} />}
          {tab === 'Kegiatan' && <SharedKegiatanList patunganActivity={patunganActivity} searchTerm={searchTerm} />}
        </div>
      </section>
    </section>
  );
}

export default SharedDetailPage;
