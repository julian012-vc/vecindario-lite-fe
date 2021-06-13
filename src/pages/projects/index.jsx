import React, { useEffect, useState } from 'react';

import NavBar from './components/nav-bar/navBar';

import { useDispatch, useSelector } from 'react-redux';
import { selectMyProjects, selectWordFilter } from '../../redux/selectors/admin.selector';
import { fetchMyProjects } from '../../services/admin.service';
import { fetchProjects } from '../../redux/slices/admin.slice';
import ProjectBox from './components/project-box/projectBox';
import './index.scss';
import { projectWithFilter } from '../../helpers';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const projects = useSelector(selectMyProjects);
  const wordFilter = useSelector(selectWordFilter);

  useEffect(() => {
    fetchMyProjects()
      .then(res => {
        dispatch(fetchProjects(res));
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div className='project-dashboard__wrapper'>
      <div className='project-dashboard__wrapper--header'>
        <NavBar />
      </div>
      <div className='project-dashboard__wrapper--body'>
        <div className='project-dashboard__wrapper--body--title'>Lista de proyectos creados:</div>
        <div className='project-dashboard__wrapper--body--wrapper'>
          {!isLoading &&
            projectWithFilter(projects, wordFilter.toUpperCase()).map(project => (
              <ProjectBox project={project} key={project.id} />
            ))}
          {isLoading && <div>Cargando...</div>}
        </div>
      </div>
      <div className='project-dashboard__wrapper--footer' />
    </div>
  );
};

export default Projects;
