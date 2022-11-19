import React from "react";
import NewAnggotaItem from "./NewAnggotaItem";

function NewAnggotaList({ anggota }) {
  return (
    <>
      {anggota.length === 0 ? (
        <p className='conditional-rendering'>Anggota kosong...</p>
      ) : (
        <div className='new-anggota__list'>
          {anggota.map((agt) => (
            <NewAnggotaItem key={agt.id} {...agt} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewAnggotaList;