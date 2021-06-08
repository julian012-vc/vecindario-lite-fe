import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchInput from '../../../search-input';

import { selectUser } from '../../../../redux/selectors/user.selector';

import * as Icons from '../../../../constants/icons';
import { LOG_OUT_ICON, MY_PROJECTS_ICON } from '../../../../constants/icons';
import { AUTH_TOKEN, SEARCH_PROJECT_PLACEHOLDER, USER_PICTURE_URL } from '../../../../constants';
import { FieldsMenu } from '../user-menu/userMenu';

import './loggedDropdown.scss';
import { logOut } from '../../../../redux/slices/user.slice';
import { removeValueFromLocalStorage } from '../../../../helpers';

const LoggedDropdown = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
    removeValueFromLocalStorage(AUTH_TOKEN);
    window.location.reload(false);
  };

  return (
    <div className='logged-dropdown__container'>
      <div className='logged-dropdown__container--header'>
        <div className='container--header__picture'>
          <img src={USER_PICTURE_URL} alt='Foto perfil' />
        </div>
        <div className='container--header__body'>
          <div className='container--header__body--title'>¡Hola {user.first_name}!</div>
          <div className='container--header__body--subtitle'>
            Estas listo para comprar con Vecindario
          </div>
        </div>
      </div>
      <div className='logged-dropdown__container--footer'>
        <FieldsMenu value='Mis Projectos' icon={MY_PROJECTS_ICON} />
        <div onClick={logOutUser} className='logged-dropdown__container--footer--logout'>
          <FieldsMenu value='Cerrar sesión' icon={LOG_OUT_ICON} />
        </div>
      </div>
      <div className='logged-dropdown__container--search'>
        <SearchInput iconRight={Icons.SEACH_ICON} placeholder={SEARCH_PROJECT_PLACEHOLDER} />
      </div>
    </div>
  );
};

export default LoggedDropdown;
