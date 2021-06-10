import React from 'react';

import SearchInput from '../search-input/searchInput';

import { PLUS_ICON } from '../../../../constants/icons';

import './dropdownMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyProjects } from '../../../../redux/selectors/admin.selector';
import { openModal } from '../../../../redux/slices/modal.slice';

export const MODAL_ID = 'create-project-modal';

const DropdownMenu = () => {
  const projects = useSelector(selectMyProjects);
  const dispatch = useDispatch();

  return (
    <>
      <div className='dropdown-menu__container'>
        <div
          className='dropdown-menu__container--create'
          onClick={() => dispatch(openModal(MODAL_ID))}
        >
          <i className={PLUS_ICON} />
          Crear projecto
        </div>
        <div className='dropdown-menu__container--divider' />
        <div className='dropdown-menu__container--search'>
          <SearchInput />
        </div>
        <div className='dropdown-menu__container--subtitle'>Activos</div>
        <div className='dropdown-menu__container--divider' />
        <div className='dropdown-menu__container--projects'>
          {projects.map(project => (
            <div className='dropdown-menu__container--projects--option' key={project.id}>
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
