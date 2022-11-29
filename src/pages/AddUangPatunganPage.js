import React, {useEffect, useState} from "react";
import { FiArrowRight } from "react-icons/fi";
import useInput from "../hooks/useInput";
import {db} from '../config/firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import UrlParser from "../url-parser";

function AddUangPatunganPage(){
  const [name, setName] = useState('');
  const [total, setTotal] =useState(0);
  const [addedMoney, setAddedMoney] = useInput(0);
  const url = UrlParser.parserActiveUrlEdit();
  

  const addUangPatunganHandler = async (event) => {
    event.preventDefault();

    const patunganRef = doc(db, "patungan", url.idPatungan);
    const data = await getDoc(patunganRef);
    let membersData = data.data().Members;
    let memberEditIndex = membersData.findIndex((obj => obj.id == url.idEdit));
    const newTotal = membersData[memberEditIndex].Total + Number(addedMoney);
    membersData[memberEditIndex].Total = newTotal;

    await updateDoc(patunganRef, {Members: membersData})
    alert("Total patungan anggota berhasil ditambahkan");
  }

  useEffect(()=> {
    const getPatungan = async () => {
      const patunganRef = doc(db, "patungan", url.idPatungan);
      const data = await getDoc(patunganRef);
      let membersData = data.data().Members;
      let memberEditIndex = membersData.findIndex((obj => obj.id == url.idEdit));
      setName(membersData[memberEditIndex].Name);
      setTotal(membersData[memberEditIndex].Total);

    }

    getPatungan();
  },[])


  return (
  <div className="add-uang-patungan-page">
    <div className='add-patungan__add-uang'>
      <div className='add-patungan__add-uang__text'>
        <h2>Tambah Patungan</h2>
        <p>Untuk {name}</p>
        <p>Dana saat ini : Rp {total}</p>
      </div>
      <p><span>Dana yang ingin ditambahkan</span></p>
      <form onSubmit={addUangPatunganHandler}>
        <input className='input__action' 
          type='number'  
          placeholder="Jumlah Patungan" 
          value={addedMoney} 
          onChange={setAddedMoney}
          required/>
        <div className='register__action'>
          <button className='action-submit' type='submit' title='Tambah dana patungan anggota' disabled={!addedMoney}>
            <p>Tambah</p>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  </div> 
  )
}

export default AddUangPatunganPage;