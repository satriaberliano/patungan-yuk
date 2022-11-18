import React, { useEffect } from "react";
import AnggotaList from "../components/AnggotaList";
// import DetailButtonChoice from "../components/DetailButtonChoice";
import DetailDashboard from "../components/DetailDashboard";
import KegiatanList from "../components/KegiatanList";
import swal from "sweetalert";

function DetailPage(){
  const [ tab, setTab ] = React.useState('Anggota');

  const onDeletePatungan = () => {
    swal({
      text: 'Yakin ingin menghapus patungan ini?',
      buttons: 
        {
          cancel: {
            text: "Batal",
            value: null,
            visible: true,
            closeModal: true,
          },
          confirm: {
            text: "Hapus",
            value: true,
            visible: true,
            closeModal: true
          }
        }
    })
  }

  const onDeleteAnggota = () => {
    swal({
      text: 'Yakin ingin menghapus anggota ini?',
      buttons: 
        {
          cancel: {
            text: "Batal",
            value: null,
            visible: true,
            closeModal: true,
          },
          confirm: {
            text: "Hapus",
            value: true,
            visible: true,
            closeModal: true
          }
        }
    })
  }

  const onDeleteKegiatan = () => {
    swal({
      text: 'Yakin ingin menghapus kegiatan ini?',
      buttons: 
        {
          cancel: {
            text: "Batal",
            value: null,
            visible: true,
            closeModal: true,
          },
          confirm: {
            text: "Hapus",
            value: true,
            visible: true,
            closeModal: true
          }
        }
    })
  }

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
  });

  return(
      <section className="detail-patungan">
        <section className="detail__dashboard">
          <div className="detail__dashboard-title">
            <h2>Halaman Patungan</h2>
            <p>Detail Patungan Kamu</p>
          </div>
          <DetailDashboard deletePatungan={onDeletePatungan}/>
        </section>
        <section className="detail__list-user">
          <div className="detail__list-user-choice" id="tab-button">
            <button type="button" className='tab active' onClick={() => setTab('Anggota')}>Anggota</button>
            <button type="button" className='tab' onClick={() => setTab('Kegiatan')}>Kegiatan</button>
          </div>
          {/* <DetailButtonChoice /> */}
          <input className="detail__list-user-search" placeholder="Cari nama anggota"></input>
          <div className='detail__list-user-content'>
            {tab === 'Anggota' && <AnggotaList deleteAnggota={onDeleteAnggota} />}
            {tab === 'Kegiatan' && <KegiatanList deleteKegiatan={onDeleteKegiatan}/>}
          </div>
        </section>
      </section>
  );
};

export default DetailPage;