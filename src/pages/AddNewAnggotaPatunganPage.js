import React, { useState } from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AddNewKegiatanPatunganPath } from "../routes";
import NewAnggotaList from "../components/NewAnggotaList";
import AddNewAnggota from "../components/AddNewAnggota";

function AddNewAnggotaPatunganPage() {
  const [ anggota, setAnggota ] = useState([]);

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
  console.log(anggota);


  return (
    <section className='add-new-patungan__input'>
      <div className='add-new-patungan__title'>
        <h2>Buat Patungan</h2>
        <p>Masukkan daftar anggota</p>
      </div>

      <div className='add-new-patungan__form'>
        <AddNewAnggota addNewAnggota={addNewAnggotaHandler} />
      </div>

      <div className='new-patungan__contaner'>
        <p className='new-patungan__title'>Daftar anggota</p>
        <NewAnggotaList anggota={anggota} />
      </div>

      <div className='add-new-patungan__action'>
        <button className='action-submit' type='submit' title='Selanjutnya'>
          <Link className='action-submit__link' to={AddNewKegiatanPatunganPath}>
            <p>Selanjutnya</p>
            <FiArrowRight />
          </Link>
        </button>
      </div>
    </section>
  )
};

export default AddNewAnggotaPatunganPage;