import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function AddNewKegiatan({ addNewKegiatan }) {
  const [title, setTitle] = useInput('');
  const [money, setMoney] = useInput(0);
  const { locale } = React.useContext(LocaleContext);

  const newKegiatanSubmitHandler = (event) => {
    event.preventDefault();

    addNewKegiatan({
      id: +new Date(),
      Name: title,
      Spend: Number(money),
    });
  };

  return (
    <form onSubmit={newKegiatanSubmitHandler}>
      <input
        className="add-new-kegiatan__input__name"
        type="text"
        placeholder={locale === 'id' ? 'Judul' : 'Title'}
        value={title}
        onChange={setTitle}
        required
      />
      <span className="currencyinput">
        <p>Rp</p>
        <input
          className="add-new-kegiatan__input__value input__action"
          type="number"
          placeholder={locale === 'id' ? 'Jumlah dana yang dihabiskan' : 'Amount of funds spent'}
          value={money}
          onChange={setMoney}
          required
        />
      </span>
      <button className="action-submit new-patungan-action-submit" type="submit" title="Tambah">
        {locale === 'id' ? 'Tambah' : 'Add'}
        <FiArrowRight />
      </button>
    </form>
  );
}

AddNewKegiatan.propTypes = {
  addNewKegiatan: PropTypes.func.isRequired,
};

export default AddNewKegiatan;
