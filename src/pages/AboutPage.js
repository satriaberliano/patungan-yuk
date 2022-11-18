import React from "react";

function AboutPage(){
  return(
    <div className="about-page">
      <div className="about-page__what">
        <h2>Apa itu Payu?</h2>
        <p>Payu merupakan aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia.</p>
      </div>
      <div className="about-page__why">
        <h2>Kenapa kami membuat PAYU?</h2>
        <p>Kehidupan masyarakat setelah pandemi Covid-19 mulai berjalan normal, kembali ke aktivitas dan kegiatan sehari-hari. Tidak sedikit dari mereka yang mulai melepaskan hasratnya untuk pergi berlibur ataupun sekedar hangout dengan teman atau pasangan. Hal tersebut membutuhkan sebuah perencanaan keuangan yang tepat. Kami membangun sebuah aplikasi utilitas yang mengusung konsep patungan, sehingga dapat menjaga status keuangan dan mengatur pengeluaran terutama bagi mereka yang ingin pergi bersama-sama.</p>
      </div>
      <div className="about-page__who">
        <h2>Siapa saja kah "kami" itu?</h2>
        <ol type='1'>
          <li>Aldo Wijaya</li>
          <li>Hifki Yuda Pratama</li>
          <li>Muhammad Bachtiar</li>
          <li>Satria Berliano Manzi</li>
        </ol>
      </div>
    </div>
  )
}
export default AboutPage;