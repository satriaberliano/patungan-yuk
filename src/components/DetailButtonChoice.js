import React from "react";

function DetailButtonChoice({ choices }){
  return(
    <div className="detail__list-user-choice">
      {
        choices.map(choice => (
          <button type="button" key={choice} className='tab'>
            {choice}
          </button>
        ))
      }
      {/* <button type="button" className="tab" onClick={toggleTab}>Anggota</button>
      <button type="button" className="tab" onClick={toggleTab}>Kegiatan</button> */}
    </div>
  );
};

export default DetailButtonChoice;