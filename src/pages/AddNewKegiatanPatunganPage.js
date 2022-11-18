import React, { useState } from "react";
import { FiArrowRight } from 'react-icons/fi';
import AddNewKegiatan from "../components/AddNewKegiatan";
import NewKegiatanList from "../components/NewKegiatanList";

function AddNewKegiatanPatunganPage() {
  const [ kegiatan, setKegiatan ] = useState([]);

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
  console.log(kegiatan);

  return (
    <section className='add-new-patungan__input'>
      <div className='add-new-patungan__title'>
        <h2>Buat Patungan</h2>
        <p>Masukkan daftar kegiatan</p>
        <p className='optional'>*opsional (bisa ditambahkan nanti)</p>
      </div>

      <div className='add-new-patungan__form'>
        <AddNewKegiatan addNewKegiatan={addNewKegiatanHandler} />
      </div>

      <div className='new-patungan__contaner'>
        <p className='new-patungan__title'>Daftar kegiatan</p>
        <NewKegiatanList kegiatan={kegiatan} />
      </div>

      <div className='add-new-patungan__action'>
        <button className='action-submit' type='submit' title='Simpan'>
          <p>Simpan</p>
          <FiArrowRight />
        </button>
      </div>
    </section>
  )
};

export default AddNewKegiatanPatunganPage;