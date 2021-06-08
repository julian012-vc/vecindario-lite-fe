import React from 'react';
import PropTypes from 'prop-types';

import './projectCard.scss';
import { PROJECT_PICTURE_URL } from '../../../../constants';
import * as Colors from '../../../../constants/colors';
import Button from '../../../../components/button/button';
import { TYPE_PROJECTS } from '../../../../constants/type-projects';
import ProjectIcon from '../project-icon/projectIcon';
import * as Icons from '../../../../constants/icons';

const ProjectCard = ({ project }) => {
  const transformPrice = price => Math.round(price / 1_000_000).toFixed(0);

  return (
    <div className='project-card__container'>
      <div className='project-card__container--header'>
        <div className='project-card__container--header--title-project'>
          <div className='project-card__container--header--title-project--name'>
            {project.title}
          </div>
          <div className='project-card__container--header--title-project--check'>
            <i className='fal fa-badge-check' />
          </div>
        </div>
        <div className='project-card__container--header--type-project'>
          {TYPE_PROJECTS[project.type_project]}
        </div>
        <div className='project-card__container--header--location'>
          <div className='project-card__container--header--location--city'>{project.city}:</div>
          <div className='project-card__container--header--location--address'>
            {project.address}
          </div>
        </div>
      </div>
      <div className='project-card__container--body'>
        <img src={PROJECT_PICTURE_URL} alt={project.title} />
        <div className='project-card__container--body--wrapper'>
          <div className='project-card__container--body--wrapper--message'>Precio final desde:</div>
          <div className='project-card__container--body--wrapper--price'>
            {transformPrice(project.price)} millones*
          </div>
        </div>
      </div>
      <div className='project-card__container--footer'>
        <div className='project-card__container--footer--icons-wrapper'>
          <ProjectIcon
            icon={Icons.PRIVATE_AREA_ICON}
            value={`${project.private_area} mt`}
            sup='2'
          />
          <ProjectIcon
            icon={Icons.BUILDING_AREA_ICON}
            value={`${project.building_area} mt`}
            sup='2'
          />
          <ProjectIcon icon={Icons.HAS_VIS_ICON} value={project.has_vis} />
          <ProjectIcon icon={Icons.BATHROOMS_ICON} value={project.bathrooms} />
          <ProjectIcon icon={Icons.HAS_PARKING_ICON} value={project.has_parking} />
        </div>
        <div className='project-card__container--footer--button'>
          <Button
            background={Colors.WHITE}
            onHoverColor={Colors.YELLOW_PRIMARY}
            text='Conoce más'
          />
        </div>
      </div>
    </div>
  );
};

ProjectCard.prototype = {
  project: PropTypes.object,
};

export default ProjectCard;
