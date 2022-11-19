import React from "react";
import { FaCoins } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

function NewKegiatanItem({ title, money }) {
  return (
    <div className='new-kegiatan__item'>
      <div className='new-kegiatan__content'>
        <p className='new-kegiatan__title'>{title}</p>
        <p className='new-kegiatan__money'><FaCoins /> Rp {money}</p>
      </div>
      <div className='new-kegiatan__delete'>
        <button className='action-delete__kegiatan'><RiDeleteBinLine /></button>
      </div>
    </div>
  );
}

export default NewKegiatanItem;
