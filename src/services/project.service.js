import { getRequest, postRequest, putRequest } from './global';

const CRUD_PROJECTS = '/projects';

export async function fetchProjects() {
  return getRequest(CRUD_PROJECTS);
}

export async function registerProject(data, userId) {
  return postRequest(CRUD_PROJECTS, { ...data, user_id: userId });
}

export async function updateProject(data, projectId) {
  return putRequest(`${CRUD_PROJECTS}/${projectId}`, data);
}

export async function fetchProjectBySlug(slug) {
  return getRequest(`${CRUD_PROJECTS}/${slug}`);
}

export async function fetchProjectLeadsBySlug(slug) {
  return getRequest(`${CRUD_PROJECTS}/${slug}/leads`);
}
