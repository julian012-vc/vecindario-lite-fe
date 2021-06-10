import React from 'react';

import './projectBox.scss';
import { TYPE_PROJECTS } from '../../../../constants/type-projects';
import Modal from '../../../../components/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../redux/slices/modal.slice';
import EditProject from '../edit-project/editProject';
import { cleanEditProject, startEditProject } from '../../../../redux/slices/admin.slice';
import { Link } from 'react-router-dom';
import { PROJECTS_ROUTE } from '../../../../constants/routes';
import { selectUser } from '../../../../redux/selectors/user.selector';

const ProjectBox = ({ project }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const MODAL_ID = `edit-project-${project.id}`;

  const openEditProject = () => {
    dispatch(openModal(MODAL_ID));
    dispatch(startEditProject(project));
  };

  return (
    <div className='project-box__container'>
      <div className='project-box__container--header'>
        <div className='project-box__container--header--wrapper'>
          <div className='project-box__container--header--wrapper--title'>{project.title}</div>
          <div className='project-box__container--header--wrapper--type-project'>
            {TYPE_PROJECTS[project.type_project]} | Sobre planos
          </div>
          <div className='project-box__container--header--wrapper--location'>
            <div className='project-box__container--header--wrapper--location--city'>
              {project.city}:
            </div>
            <div className='project-box__container--header--wrapper--location--address'>
              {project.address}
            </div>
          </div>
        </div>
      </div>
      <div className='project-box__container--footer'>
        <div className='project-box__container--footer--edit' onClick={openEditProject}>
          Editar
        </div>
        <Link
          to={`${PROJECTS_ROUTE}${user.slug}/${project.slug}`}
          className='project-box__container--footer--lead'
        >
          Ver leads
        </Link>
      </div>

      <Modal id={MODAL_ID} onDispatch={cleanEditProject()}>
        <div>
          <EditProject />
        </div>
      </Modal>
    </div>
  );
};

export default ProjectBox;
