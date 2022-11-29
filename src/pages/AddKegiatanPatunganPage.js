import React from "react";
import { FiArrowRight } from "react-icons/fi";
import useInput from "../hooks/useInput";
import {db} from '../config/firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import UrlParser from "../url-parser";

function AddKegiatanPatunganPage(){
  const [name, setName] = useInput('');
  const [spend, setSpend ] = useInput(0);
  const url = UrlParser.parserActiveUrl();

  const addNewActivityHandler = async (event) => {
    event.preventDefault();
    const patunganRef = doc(db, "patungan", url.id);
    const data = await getDoc(patunganRef);
    const newActivity = {
      id: +new Date(),
      Name: name,
      Spend: Number(spend),
    }
    let activityData = data.data().Activity;
    activityData.push(newActivity);

    await updateDoc(patunganRef, {Activity: activityData})
    alert("Data kegiatan berhasil ditambahkan");
  }

  return(
    <div className="add-kegiatan-patungan-page">
        <div className='add-patungan__add-activity'>
          <div className='add-patungan__add-activity__text'>
            <h2>Tambah Kegiatan</h2>
          </div>
          <form onSubmit={addNewActivityHandler}>
            <input className='input__action' type='text' placeholder="Judul kegiatan" value={name} onChange={setName} required/>
            <span className="currencyinput">
              <p>Rp</p>
              <input className='input__action' type='number' placeholder="Dana yang digunakan" value={spend} onChange={setSpend} required/>
            </span>
            <div className='add-patungan__action'>
              <button className='action-submit' type='submit' title='Tambah rincian kegiatan' disabled={!name || !spend}>
                <p>Tambah</p>
                <FiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddKegiatanPatunganPage;