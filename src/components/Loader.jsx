import React from 'react';
import { Puff } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loader">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#26bd35"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
    </div>
  );
}

export default Loader;
