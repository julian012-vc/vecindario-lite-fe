import React from 'react';

import { USER_LEAD_ICON } from '../../../../constants/icons';
import { randomUserColor } from '../../../../helpers';

import './userIcon.scss';

const UserIcon = () => {
  return (
    <div className='user-icon__wrapper'>
      <i className={USER_LEAD_ICON} style={{ color: randomUserColor() }} />
    </div>
  );
};

export default UserIcon;
