import React from "react";
import { FiArrowRight } from "react-icons/fi";

class EditKegiatanPage extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          activity: 'Biaya masuk wisata', // mengambil data dari yang diedit
          spend: 4000000, // mengambil data dari yang diedit
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
        this.props.EditKegiatan(this.state);
      }
    
      render(){
        return(
          <div className="add-kegiatan-patungan-page">
            <div className='add-patungan__add-activity'>
              <div className='add-patungan__add-activity__text'>
                <h2>Ubah Kegiatan</h2>
              </div>
              <form onSubmit={this.onSubmitEventHandler}>
                <input className='input__action' type='text' placeholder="Judul kegiatan" required value={this.state.activity} onChange={this.onActivityChangeEventHandler}/>
                <span className="currencyinput"><p>Rp</p><input className='input__action' type='text' placeholder="Dana yang digunakan" required value={this.state.spend} onChange={this.onSpendChangeEventHandler}/></span>
                <div className='add-patungan__action'>
                  <button className='action-submit' type='submit' title='Ubah rincian kegiatan'>
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
    
    export default EditKegiatanPage;