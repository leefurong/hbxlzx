/**
 * 根据key函数， 来对seq的内容进行分组
 * @param {sequence} seq
 * @param {function} key
 */
function group(seq, key) {
  const result = {};
  for (const i in seq) {
    const item = seq[i];
    if (result[key(item)] === undefined) {
      result[key(item)] = [];
    }
    result[key(item)].push(item);
  }
  return result;
}

const byStatus = doctor => doctor.status;

function shuffle(arr) {
  if (arr === undefined) {
    return;
  }
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function sort(doctors) {
  console.log('before sort:', doctors);
  const { 在线 = [], 离线 = [], 忙碌 = [] } = group(doctors, byStatus);
  [在线, 离线, 忙碌].map(shuffle);
  const result = 在线.concat(忙碌, 离线);
  console.log('after sort:', result);
  return result;
}

module.exports = sort;
