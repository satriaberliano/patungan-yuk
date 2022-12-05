import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { db } from '../globals/firebase-config';
import UrlParser from '../url-parser';
import LocaleContext from '../contexts/LocaleContext';

function AddKegiatanPatunganPage() {
  const [name, setName] = useInput('');
  const [spend, setSpend] = useInput(0);
  const url = UrlParser.parserActiveUrl();
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const addNewActivityHandler = async (event) => {
    event.preventDefault();
    const patunganRef = doc(db, 'patungan', url.id);
    const data = await getDoc(patunganRef);
    const newActivity = {
      id: +new Date(),
      Name: name,
      Spend: Number(spend),
    };
    const activityData = data.data().Activity;
    activityData.push(newActivity);

    await updateDoc(patunganRef, { Activity: activityData });
    swal({
      icon: 'success',
      title: `${locale === 'id' ? 'Kegiatan berhasil ditambahkan' : 'Activity added successfully'}`,
    });
    navigate(-1);
  };

  return (
    <div className="add-kegiatan-patungan-page">
      <div className="add-patungan__add-activity">
        <div className="add-patungan__add-activity__text">
          <h2 tabIndex="0">{locale === 'id' ? 'Tambah Kegiatan' : 'Add Activity'}</h2>
        </div>
        <form onSubmit={addNewActivityHandler}>
          <input className="input__action" type="text" placeholder={locale === 'id' ? 'Judul kegiatan' : 'Activity title'} value={name} onChange={setName} required />
          <span className="currencyinput">
            <p>Rp</p>
            <input className="input__action" type="number" placeholder={locale === 'id' ? 'Dana yang digunakan' : 'Funds used'} value={spend} onChange={setSpend} required />
          </span>
          <div className="add-patungan__action">
            <button className="action-submit" type="submit" title={locale === 'id' ? 'Tambah rinci kegiatan' : 'Add activity details'} disabled={!name || !spend}>
              {locale === 'id' ? 'Tambah' : 'Add'}
              <FiArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddKegiatanPatunganPage;
