import React from "react";
import AnggotaList from "../components/AnggotaList";
import DetailButtonChoice from "../components/DetailButtonChoice";
import DetailDashboard from "../components/DetailDashboard";

function DetailPage(){
  return(
    <section className="detail-patungan">
      <section className="detail__dashboard">
        <div className="detail__dashboard-title">
          <h2>Halaman Patungan</h2>
          <p>Detail Patungan Kamu</p>
        </div>
        <DetailDashboard />
      </section>
      <section className="detail__list-user">
        <DetailButtonChoice />
        <input className="detail__list-user-search" placeholder="Cari nama anggota"></input>
        <AnggotaList />
      </section>
    </section>
  );
};

export default DetailPage;