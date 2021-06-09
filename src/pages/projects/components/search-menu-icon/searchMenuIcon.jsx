import React from 'react';

import { ARROW_DOWN_ICON } from '../../../../constants/icons';

import './searchMenuIcon.scss';

const SearchMenuIcon = () => {
  return (
    <div className='search-menu-icon__wrapper'>
      <span className='icon is-small is-right'>
        <i className={ARROW_DOWN_ICON} />
      </span>
    </div>
  );
};

export default SearchMenuIcon;
