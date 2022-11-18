import React from "react";
import { FiArrowRight } from "react-icons/fi";

class AddKegiatanPatunganPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      activity: '',
      spend: '',
    }

    this.onActivityChangeEventHandler = this.onActivityChangeEventHandler.bind(this);
    this.onSpendChangeEventHandler = this.onSpendChangeEventHandler.bind(this);
  }

  onActivityChangeEventHandler(event){
    this.setState(() => {
      return {
        activity: event.target.value
      }
    })
  }

  onSpendChangeEventHandler(event){
    this.setState(() => {
      return {
        spend: event.target.value
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addKegiatan(this.state);
  }

  render(){
    return(
      <div className="add-kegiatan-patungan-page">
        <div className='add-patungan__add-activity'>
          <div className='add-patungan__add-activity__text'>
            <h2>Tambah Kegiatan</h2>
          </div>
          <form onSubmit={this.onSubmitEventHandler}>
            <input className='input__action' type='text' placeholder="Judul kegiatan" required value={this.state.activity} onChange={this.onActivityChangeEventHandler}/>
            <span className="currencyinput"><p>Rp</p><input className='input__action' type='text' placeholder="Dana yang digunakan" required value={this.state.spend} onChange={this.onSpendChangeEventHandler}/></span>
            <div className='add-patungan__action'>
              <button className='action-submit' type='submit' title='Tambah rincian kegiatan'>
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

export default AddKegiatanPatunganPage;