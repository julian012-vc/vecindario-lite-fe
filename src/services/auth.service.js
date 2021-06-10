import { postRequest, getRequest } from './global';

const SIGN_UP_PATH = '/auth/create';
const IS_LOGGED_PATH = '/auth/me';

export async function createAccount(data) {
  return postRequest(SIGN_UP_PATH, data);
}

export async function isLogged() {
  return getRequest(IS_LOGGED_PATH);
}
