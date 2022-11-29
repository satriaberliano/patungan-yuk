import React, { useEffect, useState } from "react";
import AnggotaList from "../components/AnggotaList";
import DetailDashboard from "../components/DetailDashboard";
import {db} from '../config/firebase-config';
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import KegiatanList from "../components/KegiatanList";
import swal from "sweetalert";
import UrlParser from "../url-parser";

function DetailPage(){
  const [ tab, setTab ] = React.useState('Anggota');
  const url = UrlParser.parserActiveUrl();
    
  const deletePatungan = async (id) => {
    const patunganRef = doc(db, "patungan", id);
      await deleteDoc(patunganRef);
  }

  const onDeletePatungan = () => {
    swal({
      title: "Apakah anda yakin ingin menghapus patungan ini?",
      text: "Patungan yang dihapus akan hilang dari daftar patunganmu",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deletePatungan(url.id);
        swal("Patungan berhasil dihapus", {
          icon: "success",
        });
      } else {
        swal("Patungan batal dihapus");
      }
    });
  }

  const [patunganTitle, setPatunganTitle] = useState('');
  const [patunganIdShare, setPatunganIdShare] = useState('');
  const [numbersOfMember, setNumbersOfMember] = useState(0)
  const [Balance, setBalance] = useState(0)
  const [remainingBalance, setRemainingBalance] = useState(0)
  const [patunganMembers, setMembers] = useState([]);
  const [patunganActivity, setActivity] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
      setPatunganIdShare(dataPatungan.idShare)
      setNumbersOfMember(dataPatungan.Members.length);
      setMembers(dataPatungan.Members);
      setActivity(dataPatungan.Activity);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailPatungan();
  },[])

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
            <h2>Halaman Patungan</h2>
            <p>Detail Patungan Kamu</p>
          </div>
          <DetailDashboard 
            deletePatungan={onDeletePatungan}
            patunganTitle={patunganTitle} 
            numbersOfMember={numbersOfMember} 
            balance={Balance}
            remainingBalance = {remainingBalance}
            idPatungan={url.id}
            patuganIdShare={patunganIdShare}/>
        </section>
        <section className="detail__list-user">
          <div className="detail__list-user-choice" id="tab-button">
            <button type="button" className='tab active' onClick={() => setTab('Anggota')}>Anggota</button>
            <button type="button" className='tab' onClick={() => setTab('Kegiatan')}>Kegiatan</button>
          </div>
          {/* <DetailButtonChoice /> */}
          <input 
            className="detail__list-user-search" 
            placeholder="Cari nama anggota"
            onChange={event => {setSearchTerm(event.target.value)}}>
          </input>
          <div className='detail__list-user-content'>
            {tab === 'Anggota' && <AnggotaList  patunganMembers={patunganMembers} searchTerm={searchTerm} idPatungan={url.id}/>}
            {tab === 'Kegiatan' && <KegiatanList patunganActivity={patunganActivity} searchTerm={searchTerm} idPatungan={url.id}/>}
          </div>
        </section>
      </section>
  );
};

export default DetailPage;