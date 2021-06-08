import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/selectors/user.selector';
import { PROJECTS_ROUTE } from '../../../../constants/routes';
import { LOG_OUT_ICON, MY_PROJECTS_ICON } from '../../../../constants/icons';

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
  const user = useSelector(selectUser);

  return (
    <div className='user-menu__container'>
      <Link to={`${PROJECTS_ROUTE}${user.slug}`} className='link__container'>
        <FieldsMenu value='Mis Projectos' icon={MY_PROJECTS_ICON} />
      </Link>
      <FieldsMenu value='Cerrar sesión' icon={LOG_OUT_ICON} />
    </div>
  );
};

export default UserMenu;
