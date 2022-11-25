import React from "react";
import { FaCoins } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

function NewAnggotaItem({ name, money }) {
  return (
    <>
      <div className='new-anggota__item'>
        <div className='new-anggota__content'>
          <p className='new-anggota__name'>{name}</p>
          <p className='new-anggota__money'><FaCoins /> Rp {money}</p>
        </div>
        <div className='new-anggota__delete'>
          <button className='action-delete__anggota'><RiDeleteBinLine /></button>
        </div>
      </div>
    </>
  );
}

export default NewAnggotaItem;