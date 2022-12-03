import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function AddNewAnggota({ addNewAnggota }) {
  const [name, setName] = useInput('');
  const [money, setMoney] = useInput(0);
  const { locale } = React.useContext(LocaleContext);
  const newAnggotaSubmitHandler = (event) => {
    event.preventDefault();
    addNewAnggota({
      id: +new Date(),
      Name: name,
      Total: Number(money),
    });
  };

  return (
    <form onSubmit={newAnggotaSubmitHandler}>
      <input
        className="add-new-anggota__input__name"
        type="text"
        placeholder={locale === 'id' ? 'Nama' : 'Name'}
        value={name}
        onChange={setName}
        required
      />
      <span className="currencyinput">
        <p>Rp</p>
        <input
          className="add-new-anggota__input__value input__action"
          type="number"
          placeholder={locale === 'id' ? 'Jumlah patungan' : 'Number of joint ventures'}
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

AddNewAnggota.propTypes = {
  addNewAnggota: PropTypes.func.isRequired,
};

export default AddNewAnggota;
