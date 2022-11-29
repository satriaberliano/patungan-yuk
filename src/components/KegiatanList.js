/* eslint-disable eqeqeq */
import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { Link } from "react-router-dom";
import {db} from '../config/firebase-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"
import swal from "sweetalert";
import LocaleContext from "../contexts/LocaleContext";

function KegiatanList({ patunganActivity, idPatungan, searchTerm }) {
  const { locale } = React.useContext(LocaleContext);

  const deleteKegiatan = async (idPatungan,idActivity) => {
    const patunganRef = doc(db, "patungan", idPatungan);
    const data = await getDoc(patunganRef);
    let activityData = data.data().Activity;
    let activityDeleteIndex = activityData.findIndex((obj => obj.id == idActivity));
    activityData.splice(activityDeleteIndex, 1);
    
    await updateDoc(patunganRef, {Activity: activityData});
    window.location.reload();
    
  }

  return(
  <div className="detail__list-activity-container">
    {patunganActivity.filter((val) =>{
      if (searchTerm == "") {
        return val
      } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((activity) => {
      const onDeleteKegiatan = () => {
        swal({
          title: `${locale === 'id' ? 'Apakah anda yakin ingin menghapus kegiatan ini?' : 'Are you sure want to delete this activity?'}`,
          text: `${locale === 'id' ? 'Kegiatan yang dihapus akan hilang dari daftar kegiatan patungan' : 'Deleted activity will disappear from patungan activity list'}`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal(`${locale === 'id' ? 'Kegiatan berhasil dihapus' : 'Activity was successfully deleted'}`, {
              icon: "success",
            });
            deleteKegiatan( idPatungan, activity.id);
          } else {
            swal(`${locale === 'id' ? 'Kegiatan batal dihapus' : 'Canceled activity deleted'}`);
          }
        });
      }
      return <div className="detail__list-activity__wrapper" key={activity.id}>
                <div className="detail__list-activity-item">
                  <p tabIndex="0" className="detail__list-activity-item__name">{activity.Name}</p>
                  <p tabIndex="0" className="detail__list-activity-item__money"><FaCoins /> Rp {activity.Spend}</p>
                </div>
                <div className="detail__list-activity-button">
                  <button onClick={onDeleteKegiatan} aria-label='delete button'><HiOutlineTrash /></button>
                  <button><Link to={`/detail-patungan/${idPatungan}/${activity.id}/change-kegiatan`} aria-label='change activity'><HiOutlinePencil /></Link></button>
                </div>
              </div>
    })}
  </div>
  );
};

export default KegiatanList;