import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AddNewAnggotaPatunganPath } from "../routes";
import useInput from "../hooks/useInput";

function AddNewPatunganPage() {
  const [ title, setTitle ] = useInput('');

  return (
    <section className='add-new-patungan__input'>
      <div className='add-new-patungan__title'>
        <h2>Buat Patungan</h2>
        <p>Masukkan judul patungan</p>
      </div>
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
      <div className='add-new-patungan__action'>
        <button 
          className='action-submit 
          title-submit' 
          type='submit' 
          title='Selanjutnya'>
          <Link className='action-submit__link' to={AddNewAnggotaPatunganPath}>
            <p>Selanjutnya</p>
            <FiArrowRight />
          </Link>
        </button>
      </div>
    </section>
  )
};

export default AddNewPatunganPage;