CONTENT_TYPE = 'application/json'

import { AUTH_TOKEN } from "../constants"

export const setHeader = (contentType = CONTENT_TYPE) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    const header = { 'Content-Type': contentType }
    if (token) header['Authorization'] = `Token ${token}`
    return Headers(header)
}