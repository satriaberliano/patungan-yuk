import React, { useEffect, useState } from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import AddNewKegiatan from "./AddNewKegiatan";
import NewKegiatanList from "./NewKegiatanList";
import AddNewAnggota from "./AddNewAnggota";
import NewAnggotaList from "./NewAnggotaList";
import { getUserID } from "../utils/helper";

function AddNewPatungan({ newPatungan }) {
  const [ title, setTitle ] = useInput('');
  const [ anggota, setAnggota ] = useState([]);
  const [ kegiatan, setKegiatan ] = useState([]);
  const [idUser, setIdUser] = useState();

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
      idShare: +new Date(),
      idUser: idUser,
      title: title,
      Members: anggota,
      Activity: kegiatan,
    });
  }
  useEffect(() => {
    getUserID(setIdUser);
  },[])

  return (
    <section className='add-new-patungan__input'>
      <div className='add-new-patungan__title'>
        <h2>Buat Patungan</h2>
        <p>Silakan isi data berikut untuk membuat patungan.</p>
      </div>

      <div className="judul">
        <p className="add-patungan-title">1. Masukkan judul patungan</p>
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
        <p className="add-patungan-title">2. Masukkan daftar anggota</p>
        <AddNewAnggota addNewAnggota={addNewAnggotaHandler} />

        <div className='new-patungan__contaner'>
          <p className='new-patungan__title'>Daftar anggota</p>
          <NewAnggotaList anggota={anggota} />
        </div>
      </div>

      <div className="kegiatan">
        <p className="add-patungan-title">3. Masukkan daftar kegiatan</p>
        <p className="optional">*Opsional (bisa ditambah nanti)</p>
        <AddNewKegiatan addNewKegiatan={addNewKegiatanHandler} />

        <div className='new-patungan__contaner'>
          <p className='new-patungan__title'>Daftar kegiatan</p>
          <NewKegiatanList kegiatan={kegiatan} />
        </div>
      </div>

      <div className='add-new-patungan__action'>
        <button className='action-submit' type='submit' title='Selanjutnya' onClick={addPatunganClickHandler} disabled={!title}>
          <Link className='action-submit__link'>
            <p>Simpan</p>
            <FiArrowRight />
          </Link>
        </button>
      </div>
    </section>
  )
};

export default AddNewPatungan;