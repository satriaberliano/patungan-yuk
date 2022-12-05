import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import { db } from '../globals/firebase-config';

function KegiatanList({ patunganActivity, idPatungan, searchTerm }) {
  const { locale } = React.useContext(LocaleContext);

  const deleteKegiatan = async (idPatungan, idActivity) => {
    const patunganRef = doc(db, 'patungan', idPatungan);
    const data = await getDoc(patunganRef);
    const activityData = data.data().Activity;
    const activityDeleteIndex = activityData.findIndex(((obj) => obj.id == idActivity));
    activityData.splice(activityDeleteIndex, 1);

    await updateDoc(patunganRef, { Activity: activityData });
    window.location.reload();
  };

  return (
    <div className="detail__list-activity-container">
      {patunganActivity.filter((val) => {
        if (searchTerm == '') {
          return val;
        } if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((activity) => {
        const onDeleteKegiatan = () => {
          swal({
            title: `${locale === 'id' ? 'Hapus kegiatan ini?' : 'Delete this activity?'}`,
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                swal({
                  icon: 'success',
                  title: `${locale === 'id' ? 'Kegiatan berhasil dihapus' : 'Activity was successfully deleted'}`,
                  buttons: false,
                  timer: 1000,
                });
                deleteKegiatan(idPatungan, activity.id);
              }
            });
        };
        return (
          <div className="detail__list-activity__wrapper" key={activity.id}>
            <div className="detail__list-activity-item">
              <p tabIndex="0" className="detail__list-activity-item__name">{activity.Name}</p>
              <p tabIndex="0" className="detail__list-activity-item__money">
                <FaCoins />
                {' '}
                Rp
                {' '}
                {activity.Spend}
              </p>
            </div>
            <div className="detail__list-activity-button">
              <button className="detail__list-activity-button-delete" onClick={onDeleteKegiatan} aria-label="delete button"><HiOutlineTrash /></button>
              <button><Link className="detail__list-activity-button-change" to={`/detail-patungan/${idPatungan}/${activity.id}/change-kegiatan`} aria-label="change activity"><HiOutlinePencil /></Link></button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

KegiatanList.propTypes = {
  patunganActivity: PropTypes.array.isRequired,
  idPatungan: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default KegiatanList;
