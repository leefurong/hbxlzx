import sha256 from 'js-sha256';
import axios from 'axios';
import { groups } from './groups';
import { doctors } from './doctors';
import { contains } from './utils';
axios.defaults.withCredentials = true;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
const api = {
  domain: 'hbxlzx.udesk.cn',
  baseUrl: 'https://www.udesk.cn/apiv2/im/',
  token: 'f3fae368-5acb-4f9c-ac69-f698e2d0b357',
  email: 'hbxlzx@udesk.cn'
};

export function makeSign(timestamp) {
  const { email, token } = api;
  return sha256(email + token + timestamp);
}

function makeUrl(target) {
  return api.baseUrl + target;
}

function ensureParam(params) {
  if (!params) {
    params = {};
  }

  const timestamp = new Date().getTime();
  params.email = api.email;
  params.timestamp = timestamp;
  params.sign = makeSign(timestamp);
  return params;
}

export async function fetch(target, params) {
  return await axios.get(makeUrl(target), ensureParam(params));
}

export async function fetchGroup(groupName) {
  return doctors.filter(
    groupName === '*' ? _ => true : doctor => contains(doctor.tags, groupName)
  );
}
