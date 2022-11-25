import React from "react";
import { FiArrowRight } from "react-icons/fi";

class AddJumlahPatunganAnggotaPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: 'Satria', // mengambil data dari yang diedit
      added: '',
    }

    this.onAddedChangeEventHandler = this.onAddedChangeEventHandler.bind(this);
  }

  onAddedChangeEventHandler(event){
    this.setState((previousState) => {
      return {
        added: event.target.value,
        total: previousState.total + this.state.added,
     }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addJumlahPatungan(this.state);
  }

  render(){
    return(
      <div className="add-anggota-patungan-page">
        <div className='add-patungan__add-user'>
          <div className='add-patungan__add-user__text'>
            <h2>Tambah Patungan</h2>
            <p>Untuk {this.state.name}</p>
          </div>
          <p>Dana yang ingin ditambahkan</p>
          <form onSubmit={this.onSubmitEventHandler}>
            <span className="currencyinput">
                <p>Rp</p>
                <input className='input__action' type='number' placeholder="Jumlah tambahan dana patungan" required value={this.state.added} onChange={this.onAddedChangeEventHandler}/>
            </span>
            <div className='register__action'>
              <button className='action-submit' type='submit' title='Dana patungan tambahan'>
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

export default AddJumlahPatunganAnggotaPage;