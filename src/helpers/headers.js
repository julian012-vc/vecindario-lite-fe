import { AUTH_TOKEN } from '../constants';

const CONTENT_TYPE = 'application/json';

export const setHeader = (contentType = CONTENT_TYPE) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const header = { 'Content-Type': contentType };
  if (token) header['Authorization'] = `Token ${token}`;
  return new Headers(header);
};
