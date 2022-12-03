import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { db } from '../config/firebase-config';
import UrlParser from '../url-parser';
import LocaleContext from '../contexts/LocaleContext';
import Loader from '../components/Loader';

function ChangeKegiatanPatunganPage() {
  const [newName, setNewName] = useInput('');
  const [newSpend, setNewSpend] = useInput(0);
  const [name, setName] = useState('');
  const [spend, setSpend] = useState(0);
  const url = UrlParser.parserActiveUrlEdit();
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const changeKegiatanPatunganHandler = async (event) => {
    event.preventDefault();

    const patunganRef = doc(db, 'patungan', url.idPatungan);
    const data = await getDoc(patunganRef);
    const activityData = data.data().Activity;
    const activityEditIndex = activityData.findIndex(((obj) => obj.id == url.idEdit));
    activityData[activityEditIndex].Name = newName;
    activityData[activityEditIndex].Spend = Number(newSpend);

    await updateDoc(patunganRef, { Activity: activityData });
    swal({
      icon: 'success',
      title: `${locale === 'id' ? 'Detail kegiatan berhasil diubah' : 'Activity details changed successfully'}`,
    });
    navigate(-1);
  };

  useEffect(() => {
    const getPatungan = async () => {
      const patunganRef = doc(db, 'patungan', url.idPatungan);
      const data = await getDoc(patunganRef);
      const activityData = data.data().Activity;
      const activityEditIndex = activityData.findIndex(((obj) => obj.id == url.idEdit));
      setName(activityData[activityEditIndex].Name);
      setSpend(activityData[activityEditIndex].Spend);
      setLoading(false);
    };

    getPatungan();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="change-kegiatan-patungan-page">
      <div className="add-patungan__change-kegiatan">
        <div className="add-patungan__change-kegiatan__text">
          <h2 tabIndex="0">{locale === 'id' ? 'Ubah Kegiatan' : 'Change Activity'}</h2>
          <p tabIndex="0">{locale === 'id' ? `Nama kegiatan saat ini: ${name}` : `Current activity name: ${name}`}</p>
          <p tabIndex="0">{locale === 'id' ? `Jumlah dana untuk kegiatan saat ini: Rp ${spend}` : `Amount of funds for current activities: Rp ${spend}`}</p>
        </div>
        <form onSubmit={changeKegiatanPatunganHandler}>
          <input className="input__action" type="text" placeholder="Judul baru" value={newName} onChange={setNewName} required />
          <input className="input__action" type="number" placeholder="Jumlah dana kegiatan baru" value={newSpend} onChange={setNewSpend} required />
          <div className="register__action">
            <button className="action-submit" type="submit" title="Ubah" disabled={!newName || !newSpend}>
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
