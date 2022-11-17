import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { FaCoins } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FiPlusSquare } from 'react-icons/fi';
import { AddAnggotaPatunganPath, AddKegiatanPatunganPath } from "../routes";

class PatunganInput extends React.Component{
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
      <section className='add-patungan__input'>
        <h2>Buat Patungan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <input className='add-patungan__input__title' type='text' placeholder="Judul" required value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
        </form>
          <div className="add-patungan__wrapper">
            <div className='add-patungan__flex-container'>
              <p className='add-patungan__wrapper-title'>Anggota</p>
              <button type='button' className='add-patungan__button'><Link to={AddAnggotaPatunganPath}><FiPlusSquare /></Link></button>
            </div>
            <div className='add-patungan__wrapper-info'>
              <p className='add-patungan__anggota-info-user'>Aldo</p>
              <p className='add-patungan__anggota-info-money'><FaCoins /> Rp 3.000.000</p>
            </div>
          </div>
          <div className="add-patungan__wrapper">
            <div className='add-patungan__flex-container'>
              <p className='add-patungan__wrapper-title'>Kegiatan</p>
              <button type='button' className='add-patungan__button'><Link to={AddKegiatanPatunganPath}><FiPlusSquare /></Link></button>
            </div>
            <div className='add-patungan__wrapper-info'>
              <p className='add-patungan__kegiatan-info-title'>Biaya Hotel 5 Hari</p>
              <p className='add-patungan__anggota-info-money'><FaCoins /> Rp 3.000.000</p>
            </div>
          </div>
          <div className='add-patungan__action'>
            <button className='action-submit' type='submit' title='Simpan'>
              <p>Simpan</p>
              <FiArrowRight />
            </button>
          </div>
      </section>
    )
  }
};

export default PatunganInput;