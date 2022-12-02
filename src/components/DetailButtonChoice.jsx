import React from 'react';
import PropTypes from 'prop-types';

function DetailButtonChoice({ choices }) {
  return (
    <div className="detail__list-user-choice">
      {
        choices.map((choice) => (
          <button type="button" key={choice} className="tab">
            {choice}
          </button>
        ))
      }
    </div>
  );
}

DetailButtonChoice.propTypes = {
  choices: PropTypes.array.isRequired,
};

export default DetailButtonChoice;
