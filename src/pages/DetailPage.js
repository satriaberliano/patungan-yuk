/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AnggotaList from "../components/AnggotaList";
import DetailDashboard from "../components/DetailDashboard";
import {db} from '../firebase-config';
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import KegiatanList from "../components/KegiatanList";
import swal from "sweetalert";
import UrlParser from "../url-parser";
import LocaleContext from "../contexts/LocaleContext";

function DetailPage(){
  const [ tab, setTab ] = React.useState('Anggota');
  const url = UrlParser.parserActiveUrl();
  const { locale } = React.useContext(LocaleContext);
    
  const deletePatungan = async (id) => {
    const patunganRef = doc(db, "patungan", id);
      await deleteDoc(patunganRef);
  }

  const onDeletePatungan = () => {
    swal({
      title: `${locale === 'id' ? 'Apakah anda yakin ingin menghapus patungan ini?' : 'Are you sure you want to delete this patungan?'}`,
      text: `${locale === 'id' ? 'Patungan yang dihapus akan hilang dari daftar patunganmu' : 'Deleted patungan will disappear from your patungan list'}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deletePatungan(url.id);
        swal(`${locale === 'id' ? 'Patungan berhasil dihapus' : 'Patungan has been successfully deleted'}`, {
          icon: "success",
        });
      } else {
        swal(`${locale === 'id' ? 'Patungan batal dihapus' : 'Patungan canceled deleted'}`);
      }
    });
  }

  const [patunganTitle, setPatunganTitle] = useState('');
  const [numbersOfMember, setNumbersOfMember] = useState(0)
  const [Balance, setBalance] = useState(0)
  const [remainingBalance, setRemainingBalance] = useState(0)
  const [patunganMembers, setMembers] = useState([]);
  const [patunganActivity, setActivity] = useState([])

  const countDetail = async () => {
    const total = await patunganMembers.map((member) => {
      return member.Total
    })
    const sumBalance = await total.reduce((partialSum, a) => partialSum + a, 0);
    setBalance(sumBalance);

    const spend = await patunganActivity.map((activity) => {
      return activity.Spend
    })
    const sumSpend = await spend.reduce((partialSum, a) => partialSum + a, 0);

    const remainingBalance = sumBalance - sumSpend;
    
    setRemainingBalance(remainingBalance)
  }

  const getDetailPatungan = async () => {
    try {
      const docRef = doc(db, "patungan", url.id)
      const data = await getDoc(docRef); 
      const dataPatungan = data.data();
      setPatunganTitle(dataPatungan.title);
      setNumbersOfMember(dataPatungan.Members.length);
      setMembers(dataPatungan.Members);
      setActivity(dataPatungan.Activity);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailPatungan();
  },[]);

  useEffect(() => {

    let tabContainer = document.getElementById("tab-button");
    let tabItem = tabContainer.getElementsByClassName("tab");
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }

    countDetail();
  });

  return(
      <section className="detail-patungan">
        <section className="detail__dashboard">
          <div className="detail__dashboard-title">
            <h2 tabindex="0">{locale === 'id' ? 'Halaman Patungan' : 'Patungan Page'}</h2>
            <p tabindex="0">{locale === 'id' ? 'Detail Patungan Kamu' : 'Your patungan details'}</p>
          </div>
          <DetailDashboard 
            deletePatungan={onDeletePatungan}
            patunganTitle={patunganTitle} 
            numbersOfMember={numbersOfMember} 
            balance={Balance}
            remainingBalance = {remainingBalance}
            idPatungan={url.id}/>
        </section>
        <section className="detail__list-user">
          <div className="detail__list-user-choice" id="tab-button">
            <button type="button" className='tab active' onClick={() => setTab('Anggota')}>{locale === 'id' ? 'Anggota' : 'Members'}</button>
            <button type="button" className='tab' onClick={() => setTab('Kegiatan')}>{locale === 'id' ? 'Kegiatan' : 'Activity'}</button>
          </div>
          {/* <DetailButtonChoice /> */}
          <input className="detail__list-user-search" placeholder={locale === 'id' ? 'Cari nama anggota' : 'Find Members name'}></input>
          <div className='detail__list-user-content'>
            {tab === 'Anggota' && <AnggotaList  patunganMembers={patunganMembers} idPatungan={url.id}/>}
            {tab === 'Kegiatan' && <KegiatanList patunganActivity={patunganActivity} idPatungan={url.id}/>}
          </div>
        </section>
      </section>
  );
};

export default DetailPage;