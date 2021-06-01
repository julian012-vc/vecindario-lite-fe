import { setHeader } from '../helpers/headers';
import { SERVER_URL } from '../constants';

export async function getRequest(path) {
  const body = {
    method: 'GET',
    headers: setHeader(),
  };
  const res = fetch(`${SERVER_URL}${path}`, body);
  const data = await (await res).json;
  // TODO Test
  return res.status >= 400 ? Promise.reject(data) : Promise.resolve(data);
}

export async function postRequest(path, data) {
  const body = {
    method: 'POST',
    headers: setHeader(),
    body: JSON.stringify(data),
  };
  const req = fetch(`${SERVER_URL}${path}`, body);
  const res = await (await req).json;
  // TODO Test
  return req.status >= 400 ? Promise.reject(res) : Promise.resolve(res);
}
