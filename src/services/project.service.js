import { getRequest } from './global';

const GET_PROJECTS = '/projects';

export async function fetchProjects() {
  return getRequest(GET_PROJECTS);
}
