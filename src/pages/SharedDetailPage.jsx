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

function SharedDetailPage() {
  const [tab, setTab] = React.useState('Anggota');
  const [patunganTitle, setPatunganTitle] = useState('');
  const [numbersOfMember, setNumbersOfMember] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [patunganMembers, setMembers] = useState([]);
  const [patunganActivity, setActivity] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
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
    } catch (error) {
      setPatunganTitle(undefined);
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailPatungan();
  }, []);

  useEffect(() => {
    const tabContainer = document.getElementById('tab-button');
    const tabItem = tabContainer.getElementsByClassName('tab');
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }

    countDetail();
  });

  if (patunganTitle === undefined) {
    return (
      <section className="shared-detail-patungan-notfound-wrapper">
        <h1 className="shared-detail-patungan-notfound-title">{locale === 'id' ? 'HALAMAN TIDAK DITEMUKAN' : 'PAGE NOT FOUND'}</h1>
        <p className="shared-detail-patungan-notfound-title">{locale === 'id' ? 'Maaf, detail patungan yang kamu cari tidak ada atau telah dihapus' : 'Sorry, the patungan (joint venture) details you are looking for do not exist or have been removed'}</p>
        <p>{locale === 'id' ? 'Klik logo untuk kembali' : 'Click the logo to return'}</p>
        <div className="detail__list-user-choice tab" id="tab-button" />
      </section>
    );
  } return (
    <section className="detail-patungan">
      <section className="detail__dashboard">
        <div className="detail__dashboard-title">
          <h2>{locale === 'id' ? 'Halaman Patungan' : 'Patungan Page'}</h2>
          <p>{locale === 'id' ? 'Detail patungan yang dibagikan' : 'Shared patungan details'}</p>
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
