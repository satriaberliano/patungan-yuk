import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { FaCoins } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

class AddNewKegiatanPatunganPage extends React.Component{
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
          <p>Masukkan daftar kegiatan</p>
          <p className='optional'>*opsional (bisa ditambahkan nanti)</p>
        </div>

        <div className='add-new-patungan__form'>
          <form onSubmit={this.onSubmitEventHandler}>
            <input className='add-new-kegiatan__input__name' type='text' placeholder="Judul" required value={this.state.activity} onChange={this.onActivityChangeEventHandler}/>
            <input className='add-new-kegiatan__input__value' type='text' placeholder="Jumlah uang yang dihabiskan" required value={this.state.spend} onChange={this.onSpendChangeEventHandler}/>
            <button className='action-submit new-patungan-action-submit' type='submit' title='Tambah'>
              <p>Tambah</p>
              <FiArrowRight />
            </button>
          </form>
        </div>

        <div className='new-patungan__contaner'>
          <p className='new-patungan__title'>Daftar kegiatan</p>
          <div className='new-kegiatan__list'>
            <div className='new-kegiatan__item'>
              <div className='new-kegiatan__content'>
                <p className='new-kegiatan__title'>Menyewa perahu</p>
                <p className='new-kegiatan__money'><FaCoins /> Rp 2.000.000</p>
              </div>
              <div className='new-kegiatan__delete'>
                <button className='action-delete__kegiatan'><RiDeleteBinLine /></button>
              </div>
            </div>
          </div>
        </div>

        <div className='add-new-patungan__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>Simpan</p>
            <FiArrowRight />
          </button>
        </div>
      </section>
    )
  }
};

export default AddNewKegiatanPatunganPage;