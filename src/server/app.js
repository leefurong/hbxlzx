var express = require('express');
var app = express();
var axios = require('axios');
var doctorArr = require('./doctors');
var cors = require('cors');
var sort = require('./DoctorsSort');

app.use(
  cors({
    credentials: true,
    origin: 'http://wuhan.zenkids01.com/'
  })
);

// 设置跨域
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token,adminid,X-Requested-With");
//   res.header("Access-Control-Expose-Headers", "*");

//   if (req.method == 'OPTIONS') {
//   // 让options请求快速返回
//     res.send(200);
//   } else {
//     next();
//   }
// });
function getStatus(val) {
  switch (val) {
    case 'online':
      return '在线';
    case 'busy':
      return '忙碌';
    default:
      return '离线';
  }
}
app.get('/doctors', function(req, res) {
  // timestamp 1581990568
  // group_id=177051&
  axios
    .get(
      'https://hbxlzx.udesk.cn/open_api_v1/im/agent_status?email=hbxlzx@udesk.cn&timestamp=1581990568&sign=1ab410a30cc1a154bea19ab37ecade403ddeb477'
    )
    .then(({ data }) => {
      var remoteArr = data.agents;
      remoteArr.map(itm => {
        var idx = doctorArr.findIndex(item => item.staffId === itm.id);
        if (idx >= 0) {
          doctorArr[idx].status = getStatus(itm.im_status);
        }
      });
      const sorted = sort(doctorArr);
      res.send({ returnCode: 0, arr: sorted });
    })
    .catch(err => {
      res.send({ returnCode: -1, errMsg: err.message });
    });
});

var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
