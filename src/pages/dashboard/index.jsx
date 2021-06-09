import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/container';

import { fetchProjects } from '../../services/project.service';
import { selectProjects } from '../../redux/selectors/project.selector';
import { fetchProjectsSuccess } from '../../redux/slices/project.slice';
import ProjectCard from './components/project-card/projectCard';

import './index.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    fetchProjects().then(data => {
      dispatch(fetchProjectsSuccess(data));
    });
  }, [dispatch]);

  return (
    <Container>
      <div className='dasboard__container'>
        <div className='dasboard__container--header'>Recomendados cerca de ti</div>
        <div className='dasboard__container--body'>
          {projects.map(project => (
            <ProjectCard project={project} key={`project-${project.id}`} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
