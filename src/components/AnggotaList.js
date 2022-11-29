/* eslint-disable eqeqeq */
import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from "react-router-dom";
import {db} from '../firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import swal from "sweetalert";
import LocaleContext from "../contexts/LocaleContext";


function AnggotaList({ patunganMembers, idPatungan }) {
  const { locale } = React.useContext(LocaleContext);
  
  const deleteAnggota = async (idPatungan,idMember) => {
    const patunganRef = doc(db, "patungan", idPatungan);
    const data = await getDoc(patunganRef);
    let membersData = data.data().Members;
    let memberDeleteIndex = membersData.findIndex((obj => obj.id == idMember));
    membersData.splice(memberDeleteIndex, 1);
    
    await updateDoc(patunganRef, {Members: membersData});
    window.location.reload();
    
  }
  return(
  <div className="detail__list-user-container">
    {patunganMembers.map((member) => {
      const onDeleteAnggota = () => {
        swal({
          title: `${locale === 'id' ? 'Apakah anda yakin ingin menghapus anggota ini?' : 'Are you sure want to delete this member?'}`,
          text: `${locale === 'id' ? 'Anggota yang dihapus akan hilang dari daftar anggota patungan' : 'Deleted members will disappear from patungan member list'}`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal(`${locale === 'id' ? 'Anggota berhasil dihapus' : 'Member was successfully deleted'}`, {
              icon: "success",
            });
            deleteAnggota(idPatungan, member.id);
          } else {
            swal(`${locale === 'id' ? 'Anggota batal dihapus' : 'Canceled member deleted'}`);
          }
        });
      }
      return  <div className="detail__list-user__wrapper" key={member.id}>
                <div className="detail__list-user-item">
                  <p tabIndex="0" className="detail__list-user-item__name">{member.Name}</p>
                  <p tabIndex="0" className="detail__list-user-item__money"><FaCoins /> Rp {member.Total}</p>
                </div>
                <div className="detail__list-user-button">
                  <button onClick={onDeleteAnggota} aria-label='delete button'><HiOutlineTrash /></button>
                  <button><Link to={`/detail-patungan/${idPatungan}/${member.id}/add-uang-patungan`} aria-label='add money'><FiPlusSquare /></Link></button>
                </div>
              </div>
    })}
  </div>
  );
};

export default AnggotaList;