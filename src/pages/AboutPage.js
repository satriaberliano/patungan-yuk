import React from "react";
import LocaleContext from "../contexts/LocaleContext";

function AboutPage(){
  const { locale } = React.useContext(LocaleContext);

  return(
    <div className="about-page">
      <div className="about-page__what">
        <h2>{locale === 'id' ? 'Apa itu Payu?' : 'What is Payu?'}</h2>
        <p>{locale === 'id' ? 'Payu merupakan aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia.' : 'PAYU is a joint record-keeping application that can make it easier for you to collect money together with friends, family, and everyone in the world'}</p>
      </div>
      <div className="about-page__why">
        <h2>{locale === 'id' ? 'Kenapa kami membuat PAYU?' : 'Why did we make PAYU?'}</h2>
        <p>{locale === 'id' ? 'Kehidupan masyarakat setelah pandemi Covid-19 mulai berjalan normal, kembali ke aktivitas dan kegiatan sehari-hari. Tidak sedikit dari mereka yang mulai melepaskan hasratnya untuk pergi berlibur ataupun sekedar hangout dengan teman atau pasangan. Hal tersebut membutuhkan sebuah perencanaan keuangan yang tepat. Kami membangun sebuah aplikasi utilitas yang mengusung konsep patungan, sehingga dapat menjaga status keuangan dan mengatur pengeluaran terutama bagi mereka yang ingin pergi bersama-sama.' : 'Community life after the Covid-19 pandemic began to run normally, returning to daily activities and activities. Not a few of them are starting to give up their desire to go on vacation or just hang out with friends or partners. This requires proper financial planning. We built a utility application that carries the concept of a joint venture, so that we can maintain financial status and manage expenses, especially for those who want to go together.'}</p>
      </div>
      <div className="about-page__who">
        <h2>{locale === 'id' ? 'Siapa saja kah "kami" itu?' : 'Who are the "we"?'}</h2>
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