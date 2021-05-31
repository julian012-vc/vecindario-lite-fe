import { getRequest, postRequest } from './global'

const LOG_IN_PATH = '/auth/login'
const RETRIEVE_USER_PATH = '/auth/me'

export async function logIn(data) {
    return postRequest(LOG_IN_PATH, data)
}

export async function getUserByToken() {
    return getRequest(RETRIEVE_USER_PATH)
}

