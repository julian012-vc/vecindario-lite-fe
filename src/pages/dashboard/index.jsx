import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/container';

import { fetchProjects } from '../../services/project.service';
import { selectProjects, selectWordFilter } from '../../redux/selectors/project.selector';
import { fetchProjectsSuccess } from '../../redux/slices/project.slice';
import ProjectCard from './components/project-card/projectCard';

import './index.scss';
import { projectWithFilter } from '../../helpers';

const Dashboard = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const wordFilter = useSelector(selectWordFilter);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then(data => {
      dispatch(fetchProjectsSuccess(data));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <Container>
      <div className='dashboard__container'>
        {!isLoading && (
          <>
            <div className='dashboard__container--header'>Recomendados cerca de ti</div>
            <div className='dashboard__container--body'>
              {projectWithFilter(projects, wordFilter.toUpperCase()).map(project => (
                <ProjectCard project={project} key={`project-${project.id}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
