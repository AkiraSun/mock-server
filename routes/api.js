var express = require('express');
var router = express.Router();
var cors = require('cors');
/**
 * 访问数据统计
 * */
router.use('*', cors(), function (req, res, next) {
  next();
});

// api
router.get('/', function (req, res, next) {
  res.send('api server');
});



// getAppPersonalInfo
router.get('/member/app/getAppPersonalInfo', function (req, res, next) {
  res.send({
    "nickName": "这个是昵称",
    "gender": 1,
    'req': req.query
  });
});

// 更新个人信息
router.post('/member/app/updateAppInfo', function (req, res, next) {
  console.log('req',req.body)
  res.send({
    "nickName": "这个是昵称",
    "gender": 1,
    "birth": "1999-1-1",
    "password": "password",
    "reqcwwww":req.body
  });
});


module.exports = router;
