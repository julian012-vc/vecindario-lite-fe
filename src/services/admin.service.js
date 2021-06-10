import { getRequest } from './global';

const MY_PROJECTS_PATH = '/user/projects';

export async function fetchMyProjects() {
  return getRequest(MY_PROJECTS_PATH);
}
