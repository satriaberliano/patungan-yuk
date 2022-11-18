import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { FaCoins } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { AddNewKegiatanPatunganPath } from "../routes";

class AddNewAnggotaPatunganPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      name: '',
      total: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event){
    this.setState(() => {
      return {
        title: event.target.value
      }
    });
  }

  onDescriptionChangeEventHandler(event){
    this.setState(() => {
      return {
        description: event.target.value
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addPatungan(this.state);
  }

  render(){
    return (
      <section className='add-new-patungan__input'>
        <div className='add-new-patungan__title'>
          <h2>Buat Patungan</h2>
          <p>Masukkan daftar anggota</p>
        </div>

        <div className='add-new-patungan__form'>
          <form onSubmit={this.onSubmitEventHandler}>
            <input className='add-new-anggota__input__name' type='text' placeholder="Nama" required value={this.state.name} onChange={this.onNameChangeEventHandler}/>
            <input className='add-new-anggota__input__value' type='text' placeholder="Jumlah Patungan" required value={this.state.total} onChange={this.onTotalChangeEventHandler}/>
            <button className='action-submit new-patungan-action-submit' type='submit' title='Tambah'>
              <p>Tambah</p>
              <FiArrowRight />
            </button>
          </form>
        </div>

        <div className='new-patungan__contaner'>
          <p className='new-patungan__title'>Daftar anggota</p>
          <div className='new-anggota__list'>
            <div className='new-anggota__item'>
              <div className='new-anggota__content'>
                <p className='new-anggota__name'>Agus</p>
                <p className='new-anggota__money'><FaCoins /> Rp 400.000</p>
              </div>
              <div className='new-anggota__delete'>
                <button className='action-delete__anggota'><RiDeleteBinLine /></button>
              </div>
            </div>
            <div className='new-anggota__item'>
              <div className='new-anggota__content'>
                <p className='new-anggota__name'>Yayat</p>
                <p className='new-anggota__money'><FaCoins /> Rp 200.000</p>
              </div>
              <div className='new-anggota__delete'>
                <button className='action-delete__anggota'><RiDeleteBinLine /></button>
              </div>
            </div>
          </div>
        </div>

        <div className='add-new-patungan__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <Link className='action-submit__link' to={AddNewKegiatanPatunganPath}>
              <p>Selanjutnya</p>
              <FiArrowRight />
            </Link>
          </button>
        </div>
      </section>
    )
  }
};

export default AddNewAnggotaPatunganPage;