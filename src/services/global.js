import { setHeader } from '../helpers/headers';
import { SERVER_URL } from '../constants';

export async function getRequest(path) {
  const body = {
    method: 'GET',
    headers: setHeader(),
  };
  const res = await fetch(`${SERVER_URL}${path}`, body);
  const data = await res.json();
  return res.status >= 400 ? Promise.reject(data) : Promise.resolve(data);
}

export async function postRequest(path, data) {
  const body = {
    method: 'POST',
    headers: setHeader(),
    body: JSON.stringify(data),
  };
  const req = await fetch(`${SERVER_URL}${path}`, body);
  const res = await req.json();
  return req.status >= 400 ? Promise.reject(res) : Promise.resolve(res);
}

export async function putRequest(path, data) {
  const body = {
    method: 'PUT',
    headers: setHeader(),
    body: JSON.stringify(data),
  };
  const req = await fetch(`${SERVER_URL}${path}`, body);
  const res = await req.json();
  return req.status === 202 ? Promise.resolve(res) : Promise.reject(res);
}
