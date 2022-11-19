import React from "react";
import { FiArrowRight } from "react-icons/fi";

class AddUangPatunganPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      total: '',
    }

    this.onTotalChangeEventHandler = this.onTotalChangeEventHandler.bind(this);
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
      <div className="add-uang-patungan-page">
        <div className='add-patungan__add-uang'>
          <div className='add-patungan__add-uang__text'>
            <h2>Tambah Patungan</h2>
            <p>Untuk Hifki</p>
          </div>
          <p><span>Dana yang ingin ditambahkan</span></p>
          <form onSubmit={this.onSubmitEventHandler}>
          <span className="currencyinput">
              <p>Rp</p>
              <input className='input__action' type='text' placeholder="Jumlah Patungan" required value={this.state.total} onChange={this.onTotalChangeEventHandler}/>
          </span>
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

export default AddUangPatunganPage;