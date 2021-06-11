import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import NavBar from '../projects/components/nav-bar/navBar';
import LeadTable from './components/lead-table/leadTable';

import { selectActualProject } from '../../redux/selectors/admin.selector';
import { selectUser } from '../../redux/selectors/user.selector';
import { actualProject, fetchProjectLeads } from '../../redux/slices/admin.slice';
import { fetchProjectBySlug, fetchProjectLeadsBySlug } from '../../services/project.service';

import './index.scss';
import { PROJECTS_ROUTE } from '../../constants/routes';
import { COMEBACK_ARROW_ICON } from '../../constants/icons';

const ProjectLeads = () => {
  const { slug } = useParams();
  const actual = useSelector(selectActualProject);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjectBySlug(slug).then(res => {
      dispatch(actualProject(res));
      fetchProjectLeadsBySlug(slug).then(res => {
        dispatch(fetchProjectLeads(res));
        setIsLoading(false);
      });
    });
  }, [dispatch, slug]);

  return (
    <div className='project-leads__wrapper'>
      <div className='project-leads__wrapper--header'>
        <NavBar />
      </div>
      {!isLoading && (
        <div className='project-leads__wrapper--body'>
          <Link
            to={`${PROJECTS_ROUTE}${user.id}`}
            className='project-leads__wrapper--body--comeback'
          >
            <i className={COMEBACK_ARROW_ICON} />
            Volver
          </Link>
          <div className='project-leads__wrapper--body--title'>Leads de {actual.project.title}</div>
          <div className='project-leads__wrapper--body--box'>
            <div className='project-leads__wrapper--body--box--total'>{actual.leads.length}</div>
            <div className='project-leads__wrapper--body--box--message'>Clientes interesados</div>
          </div>
          <div className='project-leads__wrapper--body--table'>
            <LeadTable userLeads={actual.leads} />
          </div>
        </div>
      )}
      {isLoading && <div>Cargando ....</div>}
      <div className='project-leads__wrapper--footer' />
    </div>
  );
};

export default ProjectLeads;
