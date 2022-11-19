import React from "react";
import { FiArrowRight } from "react-icons/fi";

class ChangeKegiatanPatunganPage extends React.Component{
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
    this.props.addAnggota(this.state);
  }

  render(){
    return(
      <div className="change-kegiatan-patungan-page">
        <div className='add-patungan__change-kegiatan'>
          <div className='add-patungan__change-kegiatan__text'>
            <h2>Ubah Kegiatan</h2>
          </div>
          <form onSubmit={this.onSubmitEventHandler}>
            <input className='input__action' type='text' placeholder="Judul" value={this.state.activity} onChange={this.onActivityChangeEventHandler}/>
            <span className="currencyinput">
                <p>Rp</p>
                <input className='input__action' type='text' placeholder="Jumlah Patungan" required value={this.state.spend} onChange={this.onSpendChangeEventHandler}/>
            </span>
            <div className='register__action'>
              <button className='action-submit' type='submit' title='Ubah'>
                <p>Ubah</p>
                <FiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default ChangeKegiatanPatunganPage;