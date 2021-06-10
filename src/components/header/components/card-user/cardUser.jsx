import React from 'react';
import { useSelector } from 'react-redux';

import { USER_PICTURE_URL } from '../../../../constants';

import './cardUser.scss';
import { selectUser } from '../../../../redux/selectors/user.selector';

const CardUser = () => {
  const user = useSelector(selectUser);

  return (
    <div className='card-user__container'>
      <img className='card-user__container--logo' src={USER_PICTURE_URL} alt='logo' />
      <div className='card-user__container--name'>{!!user && user.first_name}</div>
      <i className='far fa-chevron-down card-user__container--icon' />
    </div>
  );
};

export default CardUser;
