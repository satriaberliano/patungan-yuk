import React from "react";
import NewKegiatanItem from "./NewKegiatanItem";

function NewKegiatanList({ kegiatan }) {
  return (
    <>
      {kegiatan.length === 0 ? (
        <p className='conditional-rendering'>Kegiatan kosong...</p>
      ) : (
        <div className='new-kegiatan__list'>
          {kegiatan.map((kgt) => (
            <NewKegiatanItem key={kgt.id} {...kgt} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewKegiatanList;
