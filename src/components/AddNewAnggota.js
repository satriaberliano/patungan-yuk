import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import useInput from "../hooks/useInput";

function AddNewAnggota({ addNewAnggota }) {
  const [name, setName] = useInput('');
  const [ money, setMoney ] = useInput(0);

  const newAnggotaSubmitHandler = (event) => {
    event.preventDefault();
    
    addNewAnggota({
      id: +new Date(),
      Name: name,
      Total: Number(money),
    });
  }

  return (
    <form onSubmit={newAnggotaSubmitHandler}>
      <input 
        className='add-new-anggota__input__name' 
        type='text' 
        placeholder='Nama' 
        value={name}
        onChange={setName}
        required
      />
      <span className="currencyinput">
        <p>Rp</p>
        <input 
          className='add-new-anggota__input__value input__action' 
          type='number' 
          placeholder='Jumlah Patungan' 
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

export default AddNewAnggota;
