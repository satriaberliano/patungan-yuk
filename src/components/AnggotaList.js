import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from "react-router-dom";
import {db} from '../firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import swal from "sweetalert";


function AnggotaList({ patunganMembers, idPatungan }) {
  
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
          title: "Apakah anda yakin ingin menghapus anggota ini?",
          text: "Anggota yang dihapus akan hilang dari daftar anggota patungan",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Anggota berhasil dihapus", {
              icon: "success",
            });
            deleteAnggota(idPatungan, member.id);
          } else {
            swal("Anggota batal dihapus");
          }
        });
      }
      return <div className="detail__list-user__wrapper" key={member.id}>
                <div className="detail__list-user-item">
                  <p className="detail__list-user-item__name">{member.Name}</p>
                  <p className="detail__list-user-item__money"><FaCoins /> Rp {member.Total}</p>
                </div>
                <div className="detail__list-user-button">
                  <button onClick={onDeleteAnggota}><HiOutlineTrash /></button>
                  <button><Link to={`/detail-patungan/${idPatungan}/${member.id}/add-uang-patungan`}><FiPlusSquare /></Link></button>
                </div>
              </div>
    })}
  </div>
  );
};

export default AnggotaList;