import React from 'react';
import PropTypes from 'prop-types';

import './projectIcon.scss';

const ProjectIcon = ({ icon, value, sup = '' }) => {
  const setValue = value => {
    if (typeof value == 'boolean') {
      return value ? 'Incluido' : 'No incluido';
    } else {
      return value;
    }
  };

  return (
    value !== null && (
      <div className='project-icon__container'>
        <i className={icon} />
        <p>
          {setValue(value)}
          <sup>{sup}</sup>
        </p>
      </div>
    )
  );
};

ProjectIcon.prototype = {
  icon: PropTypes.string,
  value: PropTypes.string,
  sup: PropTypes.string,
};

export default ProjectIcon;
