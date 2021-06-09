import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../../../redux/selectors/user.selector';
import { logOut } from '../../../../redux/slices/user.slice';

import { removeValueFromLocalStorage } from '../../../../helpers';

import { AUTH_TOKEN } from '../../../../constants';
import { LOG_OUT_ICON, MY_PROJECTS_ICON } from '../../../../constants/icons';
import { PROJECTS_ROUTE } from '../../../../constants/routes';
import './userMenu.scss';

export const FieldsMenu = ({ icon, value }) => {
  return (
    <div className='fields-menu__container'>
      <i className={icon} />
      <p>{value}</p>
    </div>
  );
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOutUser = () => {
    dispatch(logOut());
    removeValueFromLocalStorage(AUTH_TOKEN);
    window.location.reload(false);
  };

  return (
    <div className='user-menu__container'>
      <Link to={`${PROJECTS_ROUTE}${user.slug}`} className='link__container'>
        <FieldsMenu value='Mis Projectos' icon={MY_PROJECTS_ICON} />
      </Link>
      <div onClick={logOutUser} className='user-menu__container--logout'>
        <FieldsMenu onClick={logOutUser} value='Cerrar sesión' icon={LOG_OUT_ICON} />
      </div>
    </div>
  );
};

export default UserMenu;
