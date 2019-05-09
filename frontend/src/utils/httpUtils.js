import axios from 'axios';

export function get(
  url,
  params = {},
  headers = { 'Content-Type': 'application/json' }
) {
  return axios({
    method: 'get',
    url: url,
    params: params,
    data: {},
    headers: headers,
  });
}
