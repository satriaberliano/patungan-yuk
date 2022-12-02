/* eslint-disable eqeqeq */
import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from "react-router-dom";
import {db} from '../config/firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import swal from "sweetalert";
import LocaleContext from "../contexts/LocaleContext";

function AnggotaList({ patunganMembers, idPatungan, searchTerm }) {
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
    {patunganMembers.filter((val) => {
      if (searchTerm == "") {
        return val
      } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((member) => {
      const onDeleteAnggota = () => {
        swal({
          title: `${locale === 'id' ? 'Hapus anggota ini?' : 'Delete this member?'}`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal({
              icon: 'success',
              title: `${locale === 'id' ? 'Anggota berhasil dihapus' : 'Member was successfully deleted'}`,
              buttons: false,
              timer: 1000,
            });
            deleteAnggota(idPatungan, member.id);
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