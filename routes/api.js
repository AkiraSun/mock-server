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

// 获取个人中心
router.get('/member/app/getAppCenterInfo', function (req, res, next) {
  res.send({
    "imgUrl": "http://cma-it.oss-cn-hangzhou.aliyuncs.com/user/2374e48d-504d-402d-9fb6-4d4e9d05b2e3?Expires=1490244297&OSSAccessKeyId=LTAIJ8FK1pxYKRdp&Signature=KOO14/cNaEbCJAfJE/YTALofDOQ%3D",
    "nickName": "member2",
    "mobile": "18000000027"
  });
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

// 获取订单
router.post('/common/orders/equipPagingOrder', function (req, res, next) {
  res.send({
    "total": 3,
    "data": [
      {
        "order": {
          "id": 123,
          "purchaserName": "zhangsan",
          "originFee": 200000,
          "status": 0,
          "shipFee": 50,
          "createdAt": "2016/11/28 11:11:11"
        },
        "orderItems": [
          {
            "attributeMap": [
              {
                "tag": "内饰",
                "attributeMap": {
                  "内饰颜色": "白"
                }
              },
              {
                "tag": "配置",
                "attributeMap": {
                  "发动机": "3.5L",
                  "变速器": "6QT"
                }
              },
              {
                "tag": "外观",
                "attributeMap": {
                  "外饰颜色": "灰"
                }
              }
            ],
            "itemName": "博瑞帝豪,舒适型",
            "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
            "skuOriginPrice": 2000,
            "originFee": 4000,
            "quantity": 2
          },
          {
            "attributeMap": [
              {
                "tag": "内饰",
                "attributeMap": {
                  "内饰颜色": "白"
                }
              },
              {
                "tag": "配置",
                "attributeMap": {
                  "发动机": "3.5L",
                  "变速器": "6QT"
                }
              },
              {
                "tag": "外观",
                "attributeMap": {
                  "外饰颜色": "灰"
                }
              }
            ],
            "itemName": "博瑞帝豪,舒适型",
            "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
            "skuOriginPrice": 2000,
            "originFee": 2000,
            "quantity": 1
          }
        ],
        "orderDeliery": {
          "receiver": "汪志意",
          "province": "浙江省",
          "city": "杭州市",
          "region": "上海区",
          "street": "曼哈顿街道",
          "detail": "世纪公寓3栋609",
          "mobile": "18868876201"
        },
        "orderInvoice": {
          "invoiceCode": 23505,
          "invoiceType": 1,
          "invoiceTitle": "杭州数梦",
          "ownerName": "小林",
          "ownerId": "361330199201044198",
          "ownerMobile": "13000000010",
          "orgTaxNo": "123546",
          "orgContactName": "小林",
          "orgContactMobile": "1300000001l",
          "orgName": "杭州数梦",
          "receiver": "马云",
          "mobile": "13000000010",
          "provinceId": 330000,
          "province": "浙江省",
          "cityId": 330100,
          "city": "杭州市",
          "regionId": 330108,
          "region": "滨江区",
          "streetId": 10,
          "street": "西兴街道",
          "detail": "浦沿路158号，长河小区9幢9单元2289",
          "remark": null,
          "zip": null,
          "createdAt": null
        },
        "num": 3
      },
      {
        "order": {
          "id": 222,
          "purchaserName": "zhangsan",
          "originFee": 200000,
          "status": 0,
          "shipFee": 50,
          "createdAt": "2016/11/28 11:11:11"
        },
        "orderItems": [
          {
            "attributeMap": [
              {
                "tag": "内饰",
                "attributeMap": {
                  "内饰颜色": "白"
                }
              },
              {
                "tag": "配置",
                "attributeMap": {
                  "发动机": "3.5L",
                  "变速器": "6QT"
                }
              },
              {
                "tag": "外观",
                "attributeMap": {
                  "外饰颜色": "灰"
                }
              }
            ],
            "itemName": "真皮座椅",
            "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
            "skuOriginPrice": 2000,
            "originFee": 4000,
            "quantity": 2
          },
          {
            "attributeMap": [
              {
                "tag": "内饰",
                "attributeMap": {
                  "内饰颜色": "白"
                }
              },
              {
                "tag": "配置",
                "attributeMap": {
                  "发动机": "3.5L",
                  "变速器": "6QT"
                }
              },
              {
                "tag": "外观",
                "attributeMap": {
                  "外饰颜色": "灰"
                }
              }
            ],
            "itemName": "博瑞帝豪,舒适型",
            "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
            "skuOriginPrice": 2000,
            "originFee": 2000,
            "quantity": 1
          }
        ],
        "orderDeliery": {
          "receiver": "汪志意",
          "province": "浙江省",
          "city": "杭州市",
          "region": "上海区",
          "street": "曼哈顿街道",
          "detail": "世纪公寓3栋609",
          "mobile": "18868876201"
        },
        "orderInvoice": {
          "invoiceCode": 23505,
          "invoiceType": 1,
          "invoiceTitle": "杭州数梦",
          "ownerName": "小林",
          "ownerId": "361330199201044198",
          "ownerMobile": "13000000010",
          "orgTaxNo": "123546",
          "orgContactName": "小林",
          "orgContactMobile": "1300000001l",
          "orgName": "杭州数梦",
          "receiver": "马云",
          "mobile": "13000000010",
          "provinceId": 330000,
          "province": "浙江省",
          "cityId": 330100,
          "city": "杭州市",
          "regionId": 330108,
          "region": "滨江区",
          "streetId": 10,
          "street": "西兴街道",
          "detail": "浦沿路158号，长河小区9幢9单元2289",
          "remark": null,
          "zip": null,
          "createdAt": null
        },
        "num": 3
      },
      {
        "order": {
          "id": 333,
          "purchaserName": "zhangsan",
          "originFee": 200000,
          "status": 0,
          "shipFee": 50,
          "createdAt": "2016/11/28 11:11:11"
        },
        "orderItems": [
          {
            "attributeMap": [
              {
                "tag": "内饰",
                "attributeMap": {
                  "内饰颜色": "白"
                }
              },
              {
                "tag": "配置",
                "attributeMap": {
                  "发动机": "3.5L",
                  "变速器": "6QT"
                }
              },
              {
                "tag": "外观",
                "attributeMap": {
                  "外饰颜色": "灰"
                }
              }
            ],
            "itemName": "车载音响",
            "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
            "skuOriginPrice": 2000,
            "originFee": 4000,
            "quantity": 2
          },
          {
            "attributeMap": [
              {
                "tag": "内饰",
                "attributeMap": {
                  "内饰颜色": "白"
                }
              },
              {
                "tag": "配置",
                "attributeMap": {
                  "发动机": "3.5L",
                  "变速器": "6QT"
                }
              },
              {
                "tag": "外观",
                "attributeMap": {
                  "外饰颜色": "灰"
                }
              }
            ],
            "itemName": "博瑞帝豪,舒适型",
            "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
            "skuOriginPrice": 2000,
            "originFee": 2000,
            "quantity": 1
          }
        ],
        "orderDeliery": {
          "receiver": "汪志意",
          "province": "浙江省",
          "city": "杭州市",
          "region": "上海区",
          "street": "曼哈顿街道",
          "detail": "世纪公寓3栋609",
          "mobile": "18868876201"
        },
        "orderInvoice": {
          "invoiceCode": 23505,
          "invoiceType": 1,
          "invoiceTitle": "杭州数梦",
          "ownerName": "小林",
          "ownerId": "361330199201044198",
          "ownerMobile": "13000000010",
          "orgTaxNo": "123546",
          "orgContactName": "小林",
          "orgContactMobile": "1300000001l",
          "orgName": "杭州数梦",
          "receiver": "马云",
          "mobile": "13000000010",
          "provinceId": 330000,
          "province": "浙江省",
          "cityId": 330100,
          "city": "杭州市",
          "regionId": 330108,
          "region": "滨江区",
          "streetId": 10,
          "street": "西兴街道",
          "detail": "浦沿路158号，长河小区9幢9单元2289",
          "remark": null,
          "zip": null,
          "createdAt": null
        },
        "num": 3
      }
    ],
    "empty": false
  });
});

// 确认收货
router.post('/front/orders/arrive', function (req, res, next) {
  res.send({
    "msg": '成功',
    "body": req.body
  });
});

// 评论订单
router.post('/front/orders/updateOrderAssess', function (req, res, next) {
  res.send({
    "msg": '成功',
    "body": req.body
  });
});

// 获取物流信息
router.post('/common/orders/getEquipOrderDetail', function (req, res, next) {
  res.send({
    "order": {
      "id": 1003004000000010500,
      "purchaserName": "zhangsan",
      "originFee": 200000,
      "status": 4,
      "shipFee": 50,
      "createdAt": "2016/11/28 11:11:11"
    },
    "orderItems": [
      {
        "attribute": [
          {
            "tag": "内饰",
            "attributeMap": {
              "内饰颜色": "白"
            }
          },
          {
            "tag": "配置",
            "attributeMap": {
              "发动机": "3.5L",
              "变速器": "6QT"
            }
          },
          {
            "tag": "外观",
            "attributeMap": {
              "外饰颜色": "灰"
            }
          }
        ],
        "itemName": "吉利帝豪EC7远景GC7海景SC7点火线圈1.5 1.8L CVVT",
        "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
        "skuOriginPrice": 2000,
        "originFee": 4000,
        "quantity": 2
      },
      {
        "attribute": [
          {
            "tag": "内饰",
            "attributeMap": {
              "内饰颜色": "白"
            }
          },
          {
            "tag": "配置",
            "attributeMap": {
              "发动机": "3.5L",
              "变速器": "6QT"
            }
          },
          {
            "tag": "外观",
            "attributeMap": {
              "外饰颜色": "灰"
            }
          }
        ],
        "itemName": "吉利帝豪EC7远景GC7海景SC7点火线圈1.5 1.8L CVVT",
        "itemImage": "http://cma-it.img-cn-hangzhou.aliyuncs.com/2016101114413761056269.JPG",
        "skuOriginPrice": 2000,
        "originFee": 2000,
        "quantity": 1
      }
    ],
    "orderDelivery": {
      "receiver": "汪志意",
      "province": "浙江省",
      "city": "杭州市",
      "region": "上海区",
      "street": "曼哈顿街道",
      "detail": "世纪公寓3栋609",
      "mobile": "18868876201"
    },
    "defaultDelivery": {
      "id": 1,
      "userId": 23447569671,
      "receiverName": "张三",
      "mobile": "15012345678",
      "email": "zhangsan@zcy.gov.cn",
      "areaCode": "0571",
      "phone": "26200281",
      "phoneExt": "3301",
      "province": "xx省",
      "provinceCode": "5921",
      "city": "xx市",
      "cityCode": "9150",
      "region": "xx区",
      "regionCode": "78234",
      "street": "xx街道",
      "streetCode": "71345",
      "details": "xxx",
      "zip": "410000",
      "isDefault": true
    },
    "orderFlowTracks": [
      {
        "orderStatus": 1,
        "statusTime": "2016-12-13 16:00:00"
      }
    ],
    "orderInvoice": {
      "invoiceCode": 23505,
      "invoiceType": 1,
      "invoiceTitle": "杭州数梦",
      "ownerName": "小林",
      "ownerId": "361330199201044198",
      "ownerMobile": "13000000010",
      "orgTaxNo": "123546",
      "orgContactName": "小林",
      "orgContactMobile": "1300000001l",
      "orgName": "杭州数梦",
      "receiver": "马云",
      "mobile": 13000000010,
      "provinceId": 330000,
      "province": "浙江省",
      "cityId": 330100,
      "city": "杭州市",
      "regionId": 330108,
      "region": "滨江区",
      "streetId": 10,
      "street": "西兴街道",
      "detail": "浦沿路158号，长河小区9幢9单元2289",
      "remark": null,
      "zip": null,
      "createdAt": null
    },
    "total": 200050,
    "expressInfos": [{
      "location": "四川资中公司A",
      "context": "快件在四川资中公司A,由资中公司,扫描收件，收件员徐勇,",
      "time": "2017-01-03 20:11:26"
    }, {
      "location": "四川资中公司A",
      "context": "义乌福田市场一部,的义乌福田市场一部,正在派件,扫描员义乌福田市场一部,",
      "time": "2017-01-07 12:50:11"
    }, {
      "location": "四川资中公司A", "context": "派件已签收，签收人是本人,签收网点是义乌福田市场一部,", "time": "2017-01-07 17:34:03"
    }],
    "orderTrack": {
      "orderId": 1010022000000011300,
      "purchaserId": 10,
      "supplierId": 22,
      "expressNumber": "536403456095",
      "expressCode": "kuaijiesudi",
      "expressName": "快捷速递",
      "deliverAt": "2017-01-18 21:12:00",
      "confirmedAt": "2017-01-18 21:12:00"
    },
    "usedPoint": 100,
    "money": "1.00",
    "time": 15
  });
});

module.exports = router;
