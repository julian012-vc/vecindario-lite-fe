import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectLeads = () => {
  const { slug, projectSlug } = useParams();

  return (
    <div>
      {slug} {projectSlug}
    </div>
  );
};

export default ProjectLeads;
