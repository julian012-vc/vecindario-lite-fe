import React, { useEffect, useState } from 'react';

import SearchInput from '../search-input/searchInput';

import { PLUS_ICON } from '../../../../constants/icons';

import './dropdownMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyProjects, selectWordFilter } from '../../../../redux/selectors/admin.selector';
import { openModal } from '../../../../redux/slices/modal.slice';
import { actualProject, fetchProjects } from '../../../../redux/slices/admin.slice';
import { PROJECT_ROUTE } from '../../../../constants/routes';
import { useHistory } from 'react-router-dom';
import { fetchMyProjects } from '../../../../services/admin.service';
import { projectWithFilter } from '../../../../helpers';

export const MODAL_ID = 'create-project-modal';

const DropdownMenu = () => {
  const projects = useSelector(selectMyProjects);
  const wordFilter = useSelector(selectWordFilter);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (projects.length === 0) {
      fetchMyProjects().then(res => {
        dispatch(fetchProjects(res));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [dispatch, projects.length]);

  const navigate = project => {
    dispatch(actualProject(project));
    history.push(`${PROJECT_ROUTE}${project.slug}`);
    window.location.reload(false);
  };

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
          {!isLoading &&
            projectWithFilter(projects, wordFilter.toUpperCase()).map(project => (
              <div
                className='dropdown-menu__container--projects--option'
                key={project.id}
                onClick={() => navigate(project)}
              >
                {project.title}
              </div>
            ))}
          {isLoading && (
            <div className='dropdown-menu__container--projects--option'>Cargando...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
