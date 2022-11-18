import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AddNewAnggotaPatunganPath } from "../routes";

class AddNewPatunganPage extends React.Component{
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
          <p>Masukkan judul patungan</p>
        </div>
        <form onSubmit={this.onSubmitEventHandler}>
          <input className='add-new-patungan__input__title' type='text' placeholder="Judul" required value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
        </form>
        <div className='add-new-patungan__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <Link className='action-submit__link' to={AddNewAnggotaPatunganPath}>
              <p>Selanjutnya</p>
              <FiArrowRight />
            </Link>
          </button>
        </div>
      </section>
    )
  }
};

export default AddNewPatunganPage;