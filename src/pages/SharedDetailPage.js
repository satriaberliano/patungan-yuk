/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import SharedAnggotaList from "../components/SharedAnggotaList";
import SharedDetailDashboard from "../components/SharedDetailDashboard";
import SharedKegiatanList from "../components/SharedKegiatanList";
import {db} from '../config/firebase-config';
import { getDocs, where, query, collection } from "firebase/firestore"
import UrlParser from "../url-parser";

function SharedDetailPage(){
    const [ tab, setTab ] = React.useState('Anggota');
    const [patunganTitle, setPatunganTitle] = useState('');
    const [numbersOfMember, setNumbersOfMember] = useState(0)
    const [Balance, setBalance] = useState(0)
    const [remainingBalance, setRemainingBalance] = useState(0)
    const [patunganMembers, setMembers] = useState([]);
    const [patunganActivity, setActivity] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const url = UrlParser.parserActiveUrl();
  
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
        const docRef = query(collection(db, "patungan"), where("idShare", "==", url.id))
        const data = await getDocs(docRef); 
        const dataPatungan = data.docs[0].data()
        setPatunganTitle(dataPatungan.title);
        setNumbersOfMember(dataPatungan.Members.length);
        setMembers(dataPatungan.Members);
        setActivity(dataPatungan.Activity);
      } catch(error) {
        setPatunganTitle(undefined)
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

    if(patunganTitle === undefined) {
      return (
        <section className="shared-detail-patungan-notfound-wrapper">
          <h1 className="shared-detail-patungan-notfound-title">HALAMAN TIDAK DITEMUKAN</h1>
          <p className="shared-detail-patungan-notfound-title" >Maaf, detail patungan yang kamu cari tidak ada atau telah dihapus</p>
          <p>Klik logo untuk kembali</p>
          <div className="detail__list-user-choice tab" id="tab-button">
          </div>
        </section>
      )
    } return(
      <section className="detail-patungan">
        <section className="detail__dashboard">
            <div className="detail__dashboard-title">
              <h2>Halaman Patungan</h2>
              <p>Detail Patungan yang dibagikan</p>
            </div>
            <SharedDetailDashboard
              patunganTitle={patunganTitle} 
              numbersOfMember={numbersOfMember} 
              balance={Balance}
              remainingBalance = {remainingBalance}/>
          </section>
          <section className="detail__list-user">
            <div className="detail__list-user-choice" id="tab-button">
              <button type="button" className='tab active' onClick={() => setTab('Anggota')}>Anggota</button>
              <button type="button" className='tab' onClick={() => setTab('Kegiatan')}>Kegiatan</button>
            </div>
            {/* <DetailButtonChoice /> */}
            <input className="detail__list-user-search" 
                   placeholder="Cari pada list di bawah" 
                   onChange={event => {setSearchTerm(event.target.value)}}>
            </input>
            <div className='detail__list-user-content'>
              {tab === 'Anggota' && <SharedAnggotaList  patunganMembers={patunganMembers} searchTerm={searchTerm}/>}
              {tab === 'Kegiatan' && <SharedKegiatanList patunganActivity={patunganActivity} searchTerm={searchTerm}/>}
            </div>
          </section>
      </section>
      );
  };
  
  export default SharedDetailPage;