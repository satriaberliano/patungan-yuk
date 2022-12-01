import React from "react";
import LocaleContext from "../contexts/LocaleContext";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import aldo from '../assets/developers/aldo.png';
import bachtiar from '../assets/developers/bachtiar.png';
import hifki from '../assets/developers/hifki.png';
import satria from '../assets/developers/satria.png';

function AboutPage(){
  const { locale } = React.useContext(LocaleContext);

  return(
    <div className="about-page">
      <div className="about-page__what">
        <h2 tabIndex="0">{locale === 'id' ? 'Apa itu Payu?' : 'What is Payu?'}</h2>
        <p tabIndex="0">{locale === 'id' ? 'Payu merupakan aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia.' : 'PAYU is a joint record-keeping application that can make it easier for you to collect money together with friends, family, and everyone in the world'}</p>
      </div>
      <div className="about-page__why">
        <h2 tabIndex="0">{locale === 'id' ? 'Kenapa kami membuat PAYU?' : 'Why did we make PAYU?'}</h2>
        <p tabIndex="0">{locale === 'id' ? 'Kehidupan masyarakat setelah pandemi Covid-19 mulai berjalan normal, kembali ke aktivitas dan kegiatan sehari-hari. Tidak sedikit dari mereka yang mulai melepaskan hasratnya untuk pergi berlibur ataupun sekedar hangout dengan teman atau pasangan. Hal tersebut membutuhkan sebuah perencanaan keuangan yang tepat. Kami membangun sebuah aplikasi utilitas yang mengusung konsep patungan, sehingga dapat menjaga status keuangan dan mengatur pengeluaran terutama bagi mereka yang ingin pergi bersama-sama.' : 'Community life after the Covid-19 pandemic began to run normally, returning to daily activities and activities. Not a few of them are starting to give up their desire to go on vacation or just hang out with friends or partners. This requires proper financial planning. We built a utility application that carries the concept of a joint venture, so that we can maintain financial status and manage expenses, especially for those who want to go together.'}</p>
      </div>
      <div className="about-page__who">
        <h2 tabIndex="0">{locale === 'id' ? 'Tim Pengembang' : 'Developers Team'}</h2>
        <div className="about-page__who__list">
          <div className="about-page__who__item">
            <img className="about__page__who__image" src={aldo} alt="developer" />
            <div className="about__page__who__content">
              <h3>Aldo Wijaya</h3>
              <p>Universitas Lampung</p>
              <div className="about__page__who__content-links">
                <a href='https://github.com/AldoWijaya27' target='_blank' rel="noreferrer">
                  <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/aldo-wijaya-0a8750201/' target='_blank' rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="about-page__who__item">
            <img className="about__page__who__image" src={hifki} alt="developer" />
            <div className="about__page__who__content">
              <h3>Hifki Yuda Pratama</h3>
              <p>Universitas Pasundan</p>
              <div className="about__page__who__content-links">
                <a href='https://github.com/hifkiyuda' target='_blank' rel="noreferrer">
                  <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/hifki-yuda-pratama-37ab0b248/' target='_blank' rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="about-page__who__item">
            <img className="about__page__who__image" src={bachtiar} alt="developer" />
            <div className="about__page__who__content">
              <h3>Muhammad Bachtiar</h3>
              <p>Universitas Lampung</p>
              <div className="about__page__who__content-links">
                <a href='https://github.com/muhammadbachtiar' target='_blank' rel="noreferrer">
                  <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/muhammad-bachtiar-93b861222/' target='_blank' rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="about-page__who__item">
            <img className="about__page__who__image" src={satria} alt="developer" />
            <div className="about__page__who__content">
              <h3>Satria Berliano Manzi</h3>
              <p>Universitas Lampung</p>
              <div className="about__page__who__content-links">
                <a href='https://github.com/satriaberliano' target='_blank' rel="noreferrer">
                  <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/satriaberlianomanzi' target='_blank' rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutPage;