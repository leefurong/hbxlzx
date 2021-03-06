import sha256 from 'js-sha256';
import axios from 'axios';
import { groups } from './groups';
import { contains } from './utils';
import Qs from 'qs';
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

function getAvatar(staffId) {
  return 'http://q5xccnsj7.bkt.clouddn.com/' + staffId + '.png';
}
function injectAvatar(doctor) {
  const { staffId } = doctor;
  doctor.avatar = getAvatar(staffId);
  return doctor;
}

export async function fetchGroup(groupName) {
  // TODO 连接服务器的事情搞定后， 我们把服务器上的数据和本地的比对。
  // 将医生的状态设为在线/离线/忙线。
  // dev
  const { data } = await axios('/doctors');
  // prod
  // const { data } = await axios('http://127.0.0.1:3001/doctors')
  console.log(data);
  if (data.returnCode === 0) {
    return data.arr
      .filter(
        groupName === '*'
          ? _ => true
          : doctor => contains(doctor.tags, groupName)
      )
      .map(injectAvatar);
  } else {
    return [];
  }
}
