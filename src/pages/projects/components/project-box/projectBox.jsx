import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import EditProject from '../edit-project/editProject';
import Modal from '../../../../components/modal/modal';

import { openModal } from '../../../../redux/slices/modal.slice';
import {
  actualProject,
  cleanEditProject,
  startEditProject,
} from '../../../../redux/slices/admin.slice';

import { TYPE_PROJECTS } from '../../../../constants/type-projects';
import { PROJECT_ROUTE } from '../../../../constants/routes';

import './projectBox.scss';

const ProjectBox = ({ project }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const MODAL_ID = `edit-project-${project.id}`;

  const openEditProject = () => {
    dispatch(openModal(MODAL_ID));
    dispatch(startEditProject(project));
  };

  const navigate = () => {
    dispatch(actualProject(project));
    history.push(`${PROJECT_ROUTE}${project.slug}`);
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
        <div className='project-box__container--footer--lead' onClick={navigate}>
          Ver leads
        </div>
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
