import React from 'react';
import { ADMIN_LOGO_URL } from '../../../../constants';
import CardUser from '../../../../components/header/components/card-user/cardUser';
import UserMenu from '../../../../components/header/components/user-menu/userMenu';
import Dropdown from '../../../../components/dropdown/dropdown';

import './navBar.scss';
import SearchMenuIcon from '../search-menu-icon/searchMenuIcon';
import SearchInput from '../search-input/searchInput';
import DropdownMenu, { MODAL_ID } from '../dropdown-menu/dropdownMenu';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../../../constants/routes';
import Modal from '../../../../components/modal/modal';
import CreateProject from '../create-project/createProject';
import { cleanCreateProject } from '../../../../redux/slices/admin.slice';

const NavBar = () => {
  return (
    <>
      <div className='navbar__wrapper'>
        <Link to={HOME_ROUTE} className='navbar__wrapper--icon'>
          <img src={ADMIN_LOGO_URL} alt='icon' />
        </Link>

        <div className='navbar__wrapper--search-input'>
          <SearchInput />
          <Dropdown header={<SearchMenuIcon />}>
            <DropdownMenu />
          </Dropdown>
        </div>

        <Dropdown header={<CardUser />}>
          <UserMenu />
        </Dropdown>
      </div>
      <Modal id={MODAL_ID} onDispatch={cleanCreateProject()}>
        <CreateProject />
      </Modal>
    </>
  );
};

export default NavBar;
