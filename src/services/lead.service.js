import { postRequest } from './global';

const CREATE_LEAD_PATH = projectId => `/projects/${projectId}/leads`;

export async function createLeadService(projectId, data) {
  return postRequest(CREATE_LEAD_PATH(projectId), data);
}
