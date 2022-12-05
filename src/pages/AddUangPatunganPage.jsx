import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { db } from '../globals/firebase-config';
import UrlParser from '../url-parser';
import LocaleContext from '../contexts/LocaleContext';
import Loader from '../components/Loader';

function AddUangPatunganPage() {
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);
  const [addedMoney, setAddedMoney] = useInput(0);
  const url = UrlParser.parserActiveUrlEdit();
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const addUangPatunganHandler = async (event) => {
    event.preventDefault();

    const patunganRef = doc(db, 'patungan', url.idPatungan);
    const data = await getDoc(patunganRef);
    const membersData = data.data().Members;
    const memberEditIndex = membersData.findIndex(((obj) => obj.id == url.idEdit));
    const newTotal = membersData[memberEditIndex].Total + Number(addedMoney);
    membersData[memberEditIndex].Total = newTotal;

    await updateDoc(patunganRef, { Members: membersData });
    swal({
      icon: 'success',
      title: `${locale === 'id' ? 'Patungan anggota berhasil ditambahkan' : 'Member patungan has been successfully added'}`,
    });
    navigate(-1);
  };

  useEffect(() => {
    const getPatungan = async () => {
      const patunganRef = doc(db, 'patungan', url.idPatungan);
      const data = await getDoc(patunganRef);
      const membersData = data.data().Members;
      const memberEditIndex = membersData.findIndex(((obj) => obj.id == url.idEdit));
      setName(membersData[memberEditIndex].Name);
      setTotal(membersData[memberEditIndex].Total);
      setLoading(false);
    };

    getPatungan();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="add-uang-patungan-page">
      <div className="add-patungan__add-uang">
        <div className="add-patungan__add-uang__text">
          <h2 tabIndex="0">{locale === 'id' ? 'Tambah Patungan' : 'Add Patungan'}</h2>
          <p tabIndex="0">{locale === 'id' ? `Untuk ${name}` : `For ${name}`}</p>
          <p tabIndex="0">{locale === 'id' ? `Dana saat ini : Rp ${total}` : `Current funds : Rp ${total}`}</p>
        </div>
        <p tabIndex="0"><span>{locale === 'id' ? 'Dana yang ingin ditambahkan' : 'Funds you want to add'}</span></p>
        <form onSubmit={addUangPatunganHandler}>
          <input
            className="input__action"
            type="number"
            placeholder="Jumlah Patungan"
            value={addedMoney}
            onChange={setAddedMoney}
            required
          />
          <div className="register__action">
            <button className="action-submit" type="submit" title="Tambah dana patungan anggota" disabled={!addedMoney}>
              {locale === 'id' ? 'Tambah' : 'Add'}
              <FiArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUangPatunganPage;
