import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import useInput from "../hooks/useInput";

function AddNewKegiatan({ addNewKegiatan }) {
  const [title, setTitle] = useInput();
  const [ money, setMoney ] = useInput();

  const newKegiatanSubmitHandler = (event) => {
    event.preventDefault();
    
    addNewKegiatan({
      id: +new Date(),
      title: title,
      money: money,
    });
  }

  return (
    <form onSubmit={newKegiatanSubmitHandler}>
      <input 
        className='add-new-kegiatan__input__name' 
        type='text' 
        placeholder='Judul' 
        value={title}
        onChange={setTitle}
        required
      />
      <span className="currencyinput">
        <p>Rp</p>
        <input 
          className='add-new-kegiatan__input__value input__action' 
          type='text' 
          placeholder='Jumlah uang yang dihabiskan' 
          value={money}
          onChange={setMoney}
          required
        />
      </span>
      <button className='action-submit new-patungan-action-submit' type='submit' title='Tambah'>
        <p>Tambah</p>
        <FiArrowRight />
      </button>
    </form>
  );
}

export default AddNewKegiatan;
