import React from "react";
import { FiArrowRight } from "react-icons/fi";

class AddAnggotaPatunganPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      total: '',
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTotalChangeEventHandler = this.onTotalChangeEventHandler.bind(this);
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
    this.props.addAnggota(this.state);
  }

  render(){
    return(
      <div className="add-anggota-patungan-page">
        <div className='add-patungan__add-user'>
          <div className='add-patungan__add-user__text'>
            <h2>Tambah Anggota</h2>
          </div>
          <form onSubmit={this.onSubmitEventHandler}>
            <input className='input__action' type='text' placeholder="Nama Anggota" required value={this.state.name} onChange={this.onNameChangeEventHandler}/>
            <span className="currencyinput"><p>Rp</p><input className='input__action' type='text' placeholder="Jumlah Patungan" required value={this.state.total} onChange={this.onTotalChangeEventHandler}/></span>
            <div className='register__action'>
              <button className='action-submit' type='submit' title='Tambah'>
                <p>Tambah</p>
                <FiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default AddAnggotaPatunganPage;