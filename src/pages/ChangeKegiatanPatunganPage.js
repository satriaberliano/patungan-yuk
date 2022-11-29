/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, {useEffect, useState} from "react";
import { FiArrowRight } from "react-icons/fi";
import useInput from "../hooks/useInput";
import {db} from '../firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import UrlParser from "../url-parser";
import LocaleContext from "../contexts/LocaleContext";

function ChangeKegiatanPatunganPage(){
  const [newName, setNewName] = useInput('');
  const [newSpend, setNewSpend] =useInput(0);
  const [name, setName] = useState('');
  const [spend, setSpend] = useState(0);
  const url = UrlParser.parserActiveUrlEdit();
  const { locale } = React.useContext(LocaleContext);

  const changeKegiatanPatunganHandler = async (event) => {
    event.preventDefault();

    const patunganRef = doc(db, "patungan", url.idPatungan);
      const data = await getDoc(patunganRef);
      let activityData = data.data().Activity;
      let activityEditIndex = activityData.findIndex((obj => obj.id == url.idEdit));
      activityData[activityEditIndex].Name = newName;
      activityData[activityEditIndex].Spend = Number(newSpend);

      await updateDoc(patunganRef, {Activity: activityData})
      alert(`${locale === 'id' ? 'Detail kegiatan berhasil diubah' : 'Activity details changed successfully'}`);
  }

  useEffect(()=> {
    const getPatungan = async () => {
      const patunganRef = doc(db, "patungan", url.idPatungan);
      const data = await getDoc(patunganRef);
      let activityData = data.data().Activity;
      let activityEditIndex = activityData.findIndex((obj => obj.id == url.idEdit));
      setName(activityData[activityEditIndex].Name);
      setSpend(activityData[activityEditIndex].Spend);

    }

    getPatungan();
  },[])

  return (
    <div className="change-kegiatan-patungan-page">
        <div className='add-patungan__change-kegiatan'>
          <div className='add-patungan__change-kegiatan__text'>
            <h2 tabindex="0">{locale === 'id' ? 'Ubah Kegiatan' : 'Change Activity'}</h2>
            <p tabindex="0">{locale === 'id' ? `Nama kegiatan saat ini: ${name}` : `Current activity name: ${name}`}</p>
            <p tabindex="0">{locale === 'id' ? `Jumlah dana untuk kegiatan saat ini: Rp ${spend}` : `Amount of funds for current activities: Rp ${spend}`}</p>
          </div>
          <form onSubmit={changeKegiatanPatunganHandler}>
            <input className='input__action' type='text' placeholder="Judul baru" value={newName} onChange={setNewName} required/>
            <input className='input__action' type='number' placeholder="Jumlah dana kegiatan baru" value={newSpend} onChange={setNewSpend} required/>
            <div className='register__action'>
              <button className='action-submit' type='submit' title='Ubah' disabled={!newName || !newSpend}>
                <p>{locale === 'id' ? 'Ubah' : 'Change'}</p>
                <FiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default ChangeKegiatanPatunganPage;