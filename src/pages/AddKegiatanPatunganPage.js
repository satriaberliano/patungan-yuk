import React from "react";
import { FiArrowRight } from "react-icons/fi";
import useInput from "../hooks/useInput";
import {db} from '../config/firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import UrlParser from "../url-parser";
import LocaleContext from "../contexts/LocaleContext";

function AddKegiatanPatunganPage(){
  const [name, setName] = useInput('');
  const [spend, setSpend ] = useInput(0);
  const url = UrlParser.parserActiveUrl();
  const { locale } = React.useContext(LocaleContext);

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
    alert(`${locale === 'id' ? 'Data kegiatan berhasil ditambahkan' : 'Activity data added successfully'}`);
  }

  return(
    <div className="add-kegiatan-patungan-page">
        <div className='add-patungan__add-activity'>
          <div className='add-patungan__add-activity__text'>
            <h2 tabIndex="0">{locale === 'id' ? 'Tambah Kegiatan' : 'Add Activity'}</h2>
          </div>
          <form onSubmit={addNewActivityHandler}>
            <input className='input__action' type='text' placeholder={locale === 'id' ? 'Judul kegiatan' : 'Activity title'} value={name} onChange={setName} required/>
            <span className="currencyinput">
              <p>Rp</p>
              <input className='input__action' type='number' placeholder={locale === 'id' ? 'Dana yang digunakan' : 'Funds used'} value={spend} onChange={setSpend} required/>
            </span>
            <div className='add-patungan__action'>
              <button className='action-submit' type='submit' title={locale === 'id' ? 'Tambah rinci kegiatan' : 'Add activity details'} disabled={!name || !spend}>
                <p>{locale === 'id' ? 'Tambah' : 'Add'}</p>
                <FiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddKegiatanPatunganPage;