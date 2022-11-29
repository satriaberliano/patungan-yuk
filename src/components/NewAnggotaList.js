import React from "react";
import LocaleContext from "../contexts/LocaleContext";
import NewAnggotaItem from "./NewAnggotaItem";

function NewAnggotaList({ anggota, onDelete }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      {anggota.length === 0 ? (
        <p tabIndex="0" className='conditional-rendering'>{locale === 'id' ? 'Anggota kosong...' : 'Member is empty...'}</p>
      ) : (
        <div className='new-anggota__list'>
          {anggota.map((agt) => (
            <NewAnggotaItem key={agt.id} {...agt} id={agt.id} onDelete={onDelete} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewAnggotaList;