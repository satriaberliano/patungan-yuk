import React, { useState } from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import AddNewKegiatan from "./AddNewKegiatan";
import NewKegiatanList from "./NewKegiatanList";
import AddNewAnggota from "./AddNewAnggota";
import NewAnggotaList from "./NewAnggotaList";
import LocaleContext from "../contexts/LocaleContext";

function AddNewPatungan({ newPatungan }) {
  const [ title, setTitle ] = useInput('');
  const [ anggota, setAnggota ] = useState([]);
  const [ kegiatan, setKegiatan ] = useState([]);
  const { locale } = React.useContext(LocaleContext);

  function addNewAnggotaHandler(newAnggota) {
    const data = [];
    if (anggota.length !== 0) {
      anggota.forEach((agt) => {
        data.push(agt);
      });
    }
    data.push(newAnggota);
    setAnggota(data);
  }

  function addNewKegiatanHandler(newKegiatan) {
    const data = [];
    if (kegiatan.length !== 0) {
      kegiatan.forEach((kgt) => {
        data.push(kgt);
      });
    }
    data.push(newKegiatan);
    setKegiatan(data);
  }

  function addPatunganClickHandler(event) {
    event.preventDefault();
    
    newPatungan({
      title: title,
      Members: anggota,
      Activity: kegiatan,
    });
  }

  return (
    <section className='add-new-patungan__input'>
      <div className='add-new-patungan__title'>
        <h2 tabIndex="0">{locale === 'id' ? 'Buat Patungan' : 'Create Patungan'}</h2>
        <p tabIndex="0">{locale === 'id' ? 'Silakan isi data berikut untuk membuat patungan.' : 'Please fill in the following data to make a patungan (joint venture).'}</p>
      </div>

      <div className="judul">
        <p tabIndex="0" className="add-patungan-title">1. {locale === 'id' ? 'Masukkan judul patungan' : 'Add patungan title'}</p>
        <form>
          <input 
            className='add-new-patungan__input__title' 
            type='text' 
            placeholder='Judul' 
            value={title}
            onChange={setTitle}
            required 
          />
        </form>
      </div>

      <div className="anggota">
        <p tabIndex="0" className="add-patungan-title">2. {locale === 'id' ? 'Masukkan daftar anggota' : 'Add member list'}</p>
        <AddNewAnggota addNewAnggota={addNewAnggotaHandler} />

        <div className='new-patungan__contaner'>
          <p tabIndex="0" className='new-patungan__title'>{locale === 'id' ? 'Daftar anggota' : 'Member list'}</p>
          <NewAnggotaList anggota={anggota} />
        </div>
      </div>

      <div className="kegiatan">
        <p tabIndex="0" className="add-patungan-title">3. {locale === 'id' ? 'Masukkan daftar kegiatan' : 'Add activity list'}</p>
        <p tabIndex="0" className="optional">*{locale === 'id' ? 'Opsional (bisa ditambah nanti)' : 'Optional (can be added later)'}</p>
        <AddNewKegiatan addNewKegiatan={addNewKegiatanHandler} />

        <div className='new-patungan__contaner'>
          <p tabIndex="0" className='new-patungan__title'>{locale === 'id' ? 'Daftar kegiatan' : 'Activity list'}</p>
          <NewKegiatanList kegiatan={kegiatan} />
        </div>
      </div>

      <div className='add-new-patungan__action'>
        <button className='action-submit' type='submit' title='Selanjutnya' onClick={addPatunganClickHandler} disabled={!title}>
          <Link className='action-submit__link'>
            <p>{locale === 'id' ? 'Simpan' : 'Save'}</p>
            <FiArrowRight />
          </Link>
        </button>
      </div>
    </section>
  )
};

export default AddNewPatungan;