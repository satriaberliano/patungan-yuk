import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import { db } from '../globals/firebase-config';

function AnggotaList({
  patunganMembers, idPatungan, searchTerm, refresh,
}) {
  const { locale } = React.useContext(LocaleContext);

  const deleteAnggota = async (idPatungan, idMember) => {
    const patunganRef = doc(db, 'patungan', idPatungan);
    const data = await getDoc(patunganRef);
    const membersData = data.data().Members;
    const memberDeleteIndex = membersData.findIndex(((obj) => obj.id == idMember));
    membersData.splice(memberDeleteIndex, 1);

    await updateDoc(patunganRef, { Members: membersData });
    refresh();
  };

  return (
    <>
      {patunganMembers.length === 0 ? (
        <p className="empty-conditional-rendering">{locale === 'id' ? 'Anggota kosong...' : 'Members is empty...'}</p>
      ) : (
        <div className="detail__list-user-container">
          {patunganMembers.filter((val) => {
            if (searchTerm == '') {
              return val;
            } if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((member) => {
            const onDeleteAnggota = () => {
              swal({
                title: `${locale === 'id' ? 'Hapus anggota ini?' : 'Delete this member?'}`,
                icon: 'warning',
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
            };
            return (
              <div className="detail__list-user__wrapper" key={member.id}>
                <div className="detail__list-user-item">
                  <p tabIndex="0" className="detail__list-user-item__name">{member.Name}</p>
                  <p tabIndex="0" className="detail__list-user-item__money">
                    <FaCoins />
                    {' '}
                    Rp
                    {' '}
                    {member.Total}
                  </p>
                </div>
                <div className="detail__list-user-button">
                  <button className="detail__list-user-button-delete" onClick={onDeleteAnggota} aria-label="delete button">
                    <HiOutlineTrash />
                  </button>
                  <button>
                    <Link className="detail__list-user-button-add" to={`/detail-patungan/${idPatungan}/${member.id}/add-uang-patungan`} aria-label="add money">
                      <FiPlusSquare />
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

AnggotaList.propTypes = {
  patunganMembers: PropTypes.array.isRequired,
  idPatungan: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default AnggotaList;
