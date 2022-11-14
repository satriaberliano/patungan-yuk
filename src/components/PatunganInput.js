import React from "react";
import { FiArrowRight } from 'react-icons/fi';

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
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTotalChangeEventHandler = this.onTotalChangeEventHandler.bind(this);
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

  onNameChangeEventHandler(event){
    this.setState(() => {
      return {
        name: event.target.value
      }
    })
  }

  onTotalChangeEventHandler(event){
    this.setState(() => {
      return {
        total: event.target.value
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
          <input className='add-patungan__input__description' type='text' placeholder="Deskripsi" required value={this.state.description} onChange={this.onDescriptionChangeEventHandler}/>
          <p className='add-patungan__user'>Anggota</p>
          <div className='add-patungan__add-user'>
            <input className='add-patungan__input__name' type='text' placeholder="Nama" required value={this.state.name} onChange={this.onNameChangeEventHandler}/>
            <input className='add-patungan__input__total' type='text' placeholder="Jumlah Patungan" required value={this.state.total} onChange={this.onTotalChangeEventHandler}/>
          </div>
          <div className='add-patungan__action'>
            <button className='action-submit' type='submit' title='Simpan'>
              <p>Simpan</p>
              <FiArrowRight />
            </button>
          </div>
        </form>
      </section>
    )
  }
};

export default PatunganInput;