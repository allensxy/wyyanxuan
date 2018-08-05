/*
 * categoryList			面包屑
 * primaryPicUrl			第一张大图的地址，?imageView&quality=90&thumbnail=430x430		大图
 * 										?imageView&quality=95&thumbnail=78x78		小图
 * picUrl1				大图后面的四个小图（改最后的数字即可，与上面参数一致）
 * name					右侧的标题
 * simpleDesc			标题下的那行文字
 * retailPrice			价格
 * hdrkDetailVOList		促销内容（是个数组）
 * skuSpecList			颜色尺码相关信息（数组）
 * skuMap.sellVolume	商品的剩余数量（根据这个做是否能点击的功能）
 * 
 * attrList				下面详情里的内容
 * issueList				产品详情里的常见问题
 * 
 * picUrl				这个参数是修改过的，与原来数据的位置不一样
 * 
 */

var productList = {
    "110": {
        "appExclusiveFlag": false,
        "appExclusivePrice": 0,
        "attrList": [{
            "attrName": "型号",
            "attrValue": "iPhone7/7 Plus"
        }, {
            "attrName": "厚度",
            "attrValue": "0.4mm"
        }, {
            "attrName": "重量",
            "attrValue": "3g/6g"
        }, {
            "attrName": "颜色",
            "attrValue": "清透黑/纯净白"
        }, {
            "attrName": "工艺",
            "attrValue": "微磨砂+全包边"
        }, {
            "attrName": "材质",
            "attrValue": "PP塑料"
        }],
        "categoryList": [{
            "bannerUrl": "http://yanxuan.nosdn.127.net/c031900229c9f056bf65de64cc600522.jpg",
            "frontDesc": "挑选，你的生活",
            "frontName": "挑选，你的生活",
            "iconUrl": "http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png",
            "id": 1019000,
            "level": "L1",
            "name": "其他",
            "showIndex": 9,
            "subCateList": [],
            "superCategoryId": 0
        }, {
            "bannerUrl": "http://yanxuan.nosdn.127.net/3ec003761d346bc866de2ec249d7ff19.png",
            "frontDesc": "享受安全智能的科技生活",
            "frontName": "智能硬件，匠心出品",
            "iconUrl": "",
            "id": 1022000,
            "level": "L2",
            "name": "数码",
            "showIndex": 4,
            "subCateList": [],
            "superCategoryId": 1019000
        }],
        "collectionedByUser": false,
        "colorNum": 0,
        "flashPageLink": "",
        "gradientPrice": null,
        "hdrkDetailVOList": [{
            "activityType": "愚人节",
            "endTime": 1491062399000,
            "huodongUrlPc": "http://you.163.com/act/pub/qSWmmcEkyW.html",
            "id": 1064000,
            "name": "领全场满减券，额外机会包裹翻倍",
            "startTime": 1490457600000
        }],
        "id": 110,
        "issueList": [{
            "answer": "单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。\n(港澳台地区需满500元免邮费；不满500元，每单收取30元运费)",
            "question": "购买运费如何收取？"
        }, {
            "answer": "严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除外）。",
            "question": "使用什么快递发货？"
        }, {
            "answer": "1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；\n2.内裤和食品等特殊商品无质量问题不支持退货\n3.退货流程：\n确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；\n4.因网易严选产生的退货，如质量问题，退货邮费由网易严选承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。",
            "question": "如何申请退货？"
        }, {
            "answer": "1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）；\n2.如需开具增值税专用发票，请在购买后联系客服办理；\n3.可选开票内容：\n订单中含有办公用品（箱包、文具、口罩）--办公用品等、耗材等、日用品、家居用品、食品、酒/饮料、服饰、化妆品；\n不含有办公用品--日用品、家居用品、食品、酒/饮料、服饰、化妆品；\n订单商品为礼品卡--预付卡。",
            "question": "如何开具发票？"
        }],
        "itemDetail": {
            "detailHtml": "<p><img src=\"http://yanxuan.nosdn.127.net/c568a29a611297efd1bbcd55293d59be.jpg\" _src=\"http://yanxuan.nosdn.127.net/c568a29a611297efd1bbcd55293d59be.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/54c8bdfc2e5f5c4aeff97a5be9eeec09.jpg\" _src=\"http://yanxuan.nosdn.127.net/54c8bdfc2e5f5c4aeff97a5be9eeec09.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/75c11e5f91f79a6f89bd4ac73232fdd9.jpg\" _src=\"http://yanxuan.nosdn.127.net/75c11e5f91f79a6f89bd4ac73232fdd9.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/96db26021a7713132f7e3d0acc63d2b2.jpg\" _src=\"http://yanxuan.nosdn.127.net/96db26021a7713132f7e3d0acc63d2b2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/a00db7d66d8ccd3994a86d1f23335294.jpg\" _src=\"http://yanxuan.nosdn.127.net/a00db7d66d8ccd3994a86d1f23335294.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/af0286a35f85ed3feb902da440a1d6a2.jpg\" _src=\"http://yanxuan.nosdn.127.net/af0286a35f85ed3feb902da440a1d6a2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/00f0eba4be69d67a647bbbda503ee52f.jpg\" _src=\"http://yanxuan.nosdn.127.net/00f0eba4be69d67a647bbbda503ee52f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/45bc6ba8c353f0f063fae60465200a8a.jpg\" _src=\"http://yanxuan.nosdn.127.net/45bc6ba8c353f0f063fae60465200a8a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/fe6f7c6ecd1c713f945cf508c76b191c.jpg\" _src=\"http://yanxuan.nosdn.127.net/fe6f7c6ecd1c713f945cf508c76b191c.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b0f5e2c492cbc494860825ed75493213.jpg\" _src=\"http://yanxuan.nosdn.127.net/b0f5e2c492cbc494860825ed75493213.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/9585340ac0ba798042f7146c05148797.jpg\" _src=\"http://yanxuan.nosdn.127.net/9585340ac0ba798042f7146c05148797.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/1c8fa206bda76a6b684bf84c730163fe.jpg\" _src=\"http://yanxuan.nosdn.127.net/1c8fa206bda76a6b684bf84c730163fe.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/8364db13c30392ffbab0fc4c0cf5ca33.jpg\" _src=\"http://yanxuan.nosdn.127.net/8364db13c30392ffbab0fc4c0cf5ca33.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/131eee7b4862876849312fadf53d2025.jpg\" _src=\"http://yanxuan.nosdn.127.net/131eee7b4862876849312fadf53d2025.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/0f58de41beda20a3a878cbc73504f0cf.jpg\" _src=\"http://yanxuan.nosdn.127.net/0f58de41beda20a3a878cbc73504f0cf.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/02f43de5bcb9262bad7857a7db4db04d.jpg\" _src=\"http://yanxuan.nosdn.127.net/02f43de5bcb9262bad7857a7db4db04d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/fac20df8a052648e6929a696de9b2040.jpg\" _src=\"http://yanxuan.nosdn.127.net/fac20df8a052648e6929a696de9b2040.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/36da3ecdc55c68f297b30c6a0bd939eb.jpg\" _src=\"http://yanxuan.nosdn.127.net/36da3ecdc55c68f297b30c6a0bd939eb.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/06733f5a946e32ecbeab0c03a652e6c6.jpg\" _src=\"http://yanxuan.nosdn.127.net/06733f5a946e32ecbeab0c03a652e6c6.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b321c3fd73815d6374c7634989daf590.jpg\" _src=\"http://yanxuan.nosdn.127.net/b321c3fd73815d6374c7634989daf590.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7ec74b42adadb324d78088b120a68342.jpg\" _src=\"http://yanxuan.nosdn.127.net/7ec74b42adadb324d78088b120a68342.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c1356588890e97de879ec93387d3ba10.jpg\" _src=\"http://yanxuan.nosdn.127.net/c1356588890e97de879ec93387d3ba10.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/88037799f1cf7c31626b12528b378998.jpg\" _src=\"http://yanxuan.nosdn.127.net/88037799f1cf7c31626b12528b378998.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/07a4ea9fac645673db30c6f7ae2ddd44.jpg\" _src=\"http://yanxuan.nosdn.127.net/07a4ea9fac645673db30c6f7ae2ddd44.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f301a22090a071ea45817bed711296e1.jpg\" _src=\"http://yanxuan.nosdn.127.net/f301a22090a071ea45817bed711296e1.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/68dac656bba41d9ba82f6fad9b7ff27d.jpg\" _src=\"http://yanxuan.nosdn.127.net/68dac656bba41d9ba82f6fad9b7ff27d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ce2459ad6e4fe593d5a8b769cf69045c.jpg\" _src=\"http://yanxuan.nosdn.127.net/ce2459ad6e4fe593d5a8b769cf69045c.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/9939f9992b2ea352d32fb4bc26bc51f9.jpg\" _src=\"http://yanxuan.nosdn.127.net/9939f9992b2ea352d32fb4bc26bc51f9.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7e27dfa0daa762ba416df281c1e5ee86.jpg\" _src=\"http://yanxuan.nosdn.127.net/7e27dfa0daa762ba416df281c1e5ee86.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/67d1348c95d2c36115188a8588910bef.jpg\" _src=\"http://yanxuan.nosdn.127.net/67d1348c95d2c36115188a8588910bef.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c81c00567dd3a9184219f62d5fb03a65.jpg\" _src=\"http://yanxuan.nosdn.127.net/c81c00567dd3a9184219f62d5fb03a65.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/44b0eb1528f1837321f5c34077527963.jpg\" _src=\"http://yanxuan.nosdn.127.net/44b0eb1528f1837321f5c34077527963.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/a3d16a8135bd66d2e55dbb9c22c661b5.jpg\" _src=\"http://yanxuan.nosdn.127.net/a3d16a8135bd66d2e55dbb9c22c661b5.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/2ff77fd769176efeeecf9c0751b72c2a.jpg\" _src=\"http://yanxuan.nosdn.127.net/2ff77fd769176efeeecf9c0751b72c2a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/9621d48f2e5ae61c47cb1fa87bdedd2f.jpg\" _src=\"http://yanxuan.nosdn.127.net/9621d48f2e5ae61c47cb1fa87bdedd2f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/58d8975e68782a91116958a5b6a78d3a.jpg\" _src=\"http://yanxuan.nosdn.127.net/58d8975e68782a91116958a5b6a78d3a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/1225c3c9595164503ec3d254c1f11e31.jpg\" _src=\"http://yanxuan.nosdn.127.net/1225c3c9595164503ec3d254c1f11e31.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b7d2e9059b19eb26da1dac1ea02652e2.jpg\" _src=\"http://yanxuan.nosdn.127.net/b7d2e9059b19eb26da1dac1ea02652e2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/6ec2e6efa01c3144dd9ea5bdcac3d785.jpg\" _src=\"http://yanxuan.nosdn.127.net/6ec2e6efa01c3144dd9ea5bdcac3d785.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/4f18a6b247c40084060b47941efac0cb.jpg\" _src=\"http://yanxuan.nosdn.127.net/4f18a6b247c40084060b47941efac0cb.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/140b505333ac01d2a4ed0b9ad4b77adf.jpg\" _src=\"http://yanxuan.nosdn.127.net/140b505333ac01d2a4ed0b9ad4b77adf.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/563ced6a97a924ca0e40652d1925f806.jpg\" _src=\"http://yanxuan.nosdn.127.net/563ced6a97a924ca0e40652d1925f806.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/3a44a4cddcf12dae708b6dbe75a0ce4a.jpg\" _src=\"http://yanxuan.nosdn.127.net/3a44a4cddcf12dae708b6dbe75a0ce4a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/427bb2081db2dd7f42f68e7ca024ebe1.jpg\" _src=\"http://yanxuan.nosdn.127.net/427bb2081db2dd7f42f68e7ca024ebe1.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ad93ef2c5cf20c8d28572b42529be612.jpg\" _src=\"http://yanxuan.nosdn.127.net/ad93ef2c5cf20c8d28572b42529be612.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/6610487573557f7f6a6c98865d334ce8.jpg\" _src=\"http://yanxuan.nosdn.127.net/6610487573557f7f6a6c98865d334ce8.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f228355e53e0fb7572d539187f23f4f0.jpg\" _src=\"http://yanxuan.nosdn.127.net/f228355e53e0fb7572d539187f23f4f0.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/4c506a26cca1fe06bdcd16f93cdef0b6.jpg\" _src=\"http://yanxuan.nosdn.127.net/4c506a26cca1fe06bdcd16f93cdef0b6.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/5e6049f86d9a31fb4e5be7ab11b79924.jpg\" _src=\"http://yanxuan.nosdn.127.net/5e6049f86d9a31fb4e5be7ab11b79924.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/2fd393b3730553503ce977ff447e44e2.jpg\" _src=\"http://yanxuan.nosdn.127.net/2fd393b3730553503ce977ff447e44e2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/56db16dc911b2f2632a02c852db430cd.jpg\" _src=\"http://yanxuan.nosdn.127.net/56db16dc911b2f2632a02c852db430cd.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/fa3512e5466b40100da7a04d825edc26.jpg\" _src=\"http://yanxuan.nosdn.127.net/fa3512e5466b40100da7a04d825edc26.jpg\" style=\"\"/><\/p>",
            "picUrl1": "http://yanxuan.nosdn.127.net/00e12bbe8b11821cc3fe345cf226aa4e.jpg",
            "picUrl2": "http://yanxuan.nosdn.127.net/858b30dfda2c7c6de2c4834218dc9626.jpg",
            "picUrl3": "http://yanxuan.nosdn.127.net/964c5910f7e2bf8624c1ade51fd3b0b0.jpg",
            "picUrl4": "http://yanxuan.nosdn.127.net/a918c4fd0fd2f1091140b36909e9eb9d.jpg",
            "seoDesc": ""
        },
        "limitedFlag": 0,
        "listPicUrl": "",
        "name": "网易智造空气感苹果手机壳",
        "newItemFlag": false,
        "pieceNum": 0,
        "pieceUnitDesc": "件",
        "primaryPicUrl": "http://yanxuan.nosdn.127.net/d9e4b3e48fb0cd041f004edc79d15d66.png",
        "primarySkuId": 1144100,
        "primarySkuPreSellPrice": 0,
        "primarySkuPreSellStatus": 0,
        "productPlace": "",
        "promTag": "",
        "promotionDesc": "限时购",
        "rank": 11,
        "remarkTargetUrl": "",
        "remarkTitle": "",
        "reportPicList": [],
        "retailPrice": 38,
        "sellVolume": 1499,
        "seoTitle": "",
        "simpleDesc": "0.4mm纸一样薄 磨砂手感",
        "skuList": [{
            "appExclusiveSkuInfo": null,
            "counterPrice": 38,
            "giftCardFlag": false,
            "id": 1144098,
            "itemSkuSpecValueList": [{
                "id": 1141118,
                "skuId": 1144098,
                "skuSpec": {
                    "id": 1129024,
                    "name": "型号",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1129024,
                "skuSpecValue": {
                    "id": 1132095,
                    "picUrl": "",
                    "skuSpecId": 1129024,
                    "value": "iPhone 7"
                },
                "skuSpecValueId": 1132095
            }, {
                "id": 1141119,
                "skuId": 1144098,
                "skuSpec": {
                    "id": 1129025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1129025,
                "skuSpecValue": {
                    "id": 1132097,
                    "picUrl": "http://yanxuan.nosdn.127.net/4a145f5e618767ecfa3455dc8c2b13e3.jpg",
                    "skuSpecId": 1129025,
                    "value": "清透黑"
                },
                "skuSpecValueId": 1132097
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 38,
            "sellVolume": 118,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 38,
            "giftCardFlag": false,
            "id": 1144099,
            "itemSkuSpecValueList": [{
                "id": 1141120,
                "skuId": 1144099,
                "skuSpec": {
                    "id": 1129024,
                    "name": "型号",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1129024,
                "skuSpecValue": {
                    "id": 1132095,
                    "picUrl": "",
                    "skuSpecId": 1129024,
                    "value": "iPhone 7"
                },
                "skuSpecValueId": 1132095
            }, {
                "id": 1141121,
                "skuId": 1144099,
                "skuSpec": {
                    "id": 1129025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1129025,
                "skuSpecValue": {
                    "id": 1132098,
                    "picUrl": "http://yanxuan.nosdn.127.net/f62296c154fcb89bae66ea81976cfb49.jpg",
                    "skuSpecId": 1129025,
                    "value": "纯净白"
                },
                "skuSpecValueId": 1132098
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 38,
            "sellVolume": 810,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 38,
            "giftCardFlag": false,
            "id": 1144100,
            "itemSkuSpecValueList": [{
                "id": 1141122,
                "skuId": 1144100,
                "skuSpec": {
                    "id": 1129024,
                    "name": "型号",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1129024,
                "skuSpecValue": {
                    "id": 1132096,
                    "picUrl": "",
                    "skuSpecId": 1129024,
                    "value": "iPhone 7 Plus"
                },
                "skuSpecValueId": 1132096
            }, {
                "id": 1141123,
                "skuId": 1144100,
                "skuSpec": {
                    "id": 1129025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1129025,
                "skuSpecValue": {
                    "id": 1132097,
                    "picUrl": "http://yanxuan.nosdn.127.net/4a145f5e618767ecfa3455dc8c2b13e3.jpg",
                    "skuSpecId": 1129025,
                    "value": "清透黑"
                },
                "skuSpecValueId": 1132097
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": true,
            "purchaseAttribute": 0,
            "retailPrice": 38,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 38,
            "giftCardFlag": false,
            "id": 1144101,
            "itemSkuSpecValueList": [{
                "id": 1141124,
                "skuId": 1144101,
                "skuSpec": {
                    "id": 1129024,
                    "name": "型号",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1129024,
                "skuSpecValue": {
                    "id": 1132096,
                    "picUrl": "",
                    "skuSpecId": 1129024,
                    "value": "iPhone 7 Plus"
                },
                "skuSpecValueId": 1132096
            }, {
                "id": 1141125,
                "skuId": 1144101,
                "skuSpec": {
                    "id": 1129025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1129025,
                "skuSpecValue": {
                    "id": 1132098,
                    "picUrl": "http://yanxuan.nosdn.127.net/f62296c154fcb89bae66ea81976cfb49.jpg",
                    "skuSpecId": 1129025,
                    "value": "纯净白"
                },
                "skuSpecValueId": 1132098
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 38,
            "sellVolume": 571,
            "valid": true,
            "virtualFlag": false
        }],
        "skuMap": {
            "1132096;1132097": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 38,
                "giftCardFlag": false,
                "id": 1144100,
                "picUrl": "http://yanxuan.nosdn.127.net/4a145f5e618767ecfa3455dc8c2b13e3.jpg",
                "itemSkuSpecValueList": [{
                    "id": 1141122,
                    "skuId": 1144100,
                    "skuSpec": {
                        "id": 1129024,
                        "name": "型号",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1129024,
                    "skuSpecValue": {
                        "id": 1132096,
                        "picUrl": "",
                        "skuSpecId": 1129024,
                        "value": "iPhone 7 Plus"
                    },
                    "skuSpecValueId": 1132096
                }, {
                    "id": 1141123,
                    "skuId": 1144100,
                    "skuSpec": {
                        "id": 1129025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1129025,
                    "skuSpecValue": {
                        "id": 1132097,
                        "skuSpecId": 1129025,
                        "value": "清透黑"
                    },
                    "skuSpecValueId": 1132097
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": true,
                "purchaseAttribute": 0,
                "retailPrice": 38,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1132096;1132098": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 38,
                "giftCardFlag": false,
                "id": 1144101,
                "picUrl": "http://yanxuan.nosdn.127.net/f62296c154fcb89bae66ea81976cfb49.jpg",
                "itemSkuSpecValueList": [{
                    "id": 1141124,
                    "skuId": 1144101,
                    "skuSpec": {
                        "id": 1129024,
                        "name": "型号",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1129024,
                    "skuSpecValue": {
                        "id": 1132096,
                        "picUrl": "",
                        "skuSpecId": 1129024,
                        "value": "iPhone 7 Plus"
                    },
                    "skuSpecValueId": 1132096
                }, {
                    "id": 1141125,
                    "skuId": 1144101,
                    "skuSpec": {
                        "id": 1129025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1129025,
                    "skuSpecValue": {
                        "id": 1132098,
                        "skuSpecId": 1129025,
                        "value": "纯净白"
                    },
                    "skuSpecValueId": 1132098
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 38,
                "sellVolume": 571,
                "valid": true,
                "virtualFlag": false
            },
            "1132095;1132097": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 38,
                "giftCardFlag": false,
                "id": 1144098,
                "picUrl": "http://yanxuan.nosdn.127.net/4a145f5e618767ecfa3455dc8c2b13e3.jpg",
                "itemSkuSpecValueList": [{
                    "id": 1141118,
                    "skuId": 1144098,
                    "skuSpec": {
                        "id": 1129024,
                        "name": "型号",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1129024,
                    "skuSpecValue": {
                        "id": 1132095,
                        "picUrl": "",
                        "skuSpecId": 1129024,
                        "value": "iPhone 7"
                    },
                    "skuSpecValueId": 1132095
                }, {
                    "id": 1141119,
                    "skuId": 1144098,
                    "skuSpec": {
                        "id": 1129025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1129025,
                    "skuSpecValue": {
                        "id": 1132097,
                        "skuSpecId": 1129025,
                        "value": "清透黑"
                    },
                    "skuSpecValueId": 1132097
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 38,
                "sellVolume": 118,
                "valid": true,
                "virtualFlag": false
            },
            "1132095;1132098": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 38,
                "giftCardFlag": false,
                "id": 1144099,
                "picUrl": "http://yanxuan.nosdn.127.net/f62296c154fcb89bae66ea81976cfb49.jpg",
                "itemSkuSpecValueList": [{
                    "id": 1141120,
                    "skuId": 1144099,
                    "skuSpec": {
                        "id": 1129024,
                        "name": "型号",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1129024,
                    "skuSpecValue": {
                        "id": 1132095,
                        "picUrl": "",
                        "skuSpecId": 1129024,
                        "value": "iPhone 7"
                    },
                    "skuSpecValueId": 1132095
                }, {
                    "id": 1141121,
                    "skuId": 1144099,
                    "skuSpec": {
                        "id": 1129025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1129025,
                    "skuSpecValue": {
                        "id": 1132098,
                        "skuSpecId": 1129025,
                        "value": "纯净白"
                    },
                    "skuSpecValueId": 1132098
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 38,
                "sellVolume": 810,
                "valid": true,
                "virtualFlag": false
            }
        },
        "skuSpecList": [{
            "id": 1129024,
            "name": "型号",
            "skuSpecValueList": [{
                "id": 1132095,
                "picUrl": "",
                "skuSpecId": 1129024,
                "value": "iPhone 7"
            }, {
                "id": 1132096,
                "picUrl": "",
                "skuSpecId": 1129024,
                "value": "iPhone 7 Plus"
            }],
            "type": 0
        }, {
            "id": 1129025,
            "name": "颜色",
            "skuSpecValueList": [{
                "id": 1132097,
                "picUrl": "http://yanxuan.nosdn.127.net/4a145f5e618767ecfa3455dc8c2b13e3.jpg",
                "skuSpecId": 1129025,
                "value": "清透黑"
            }, {
                "id": 1132098,
                "picUrl": "http://yanxuan.nosdn.127.net/f62296c154fcb89bae66ea81976cfb49.jpg",
                "skuSpecId": 1129025,
                "value": "纯净白"
            }],
            "type": 1
        }],
        "soldOut": false,
        "status": 2,
        "tagList": [],
        "tryOutEventReport": null,
        "underShelf": false,
        "unitPrice": 0
    },
    "119": {
        "appExclusiveFlag": false,
        "appExclusivePrice": 0,
        "attrList": [{
            "attrName": "面料",
            "attrValue": "100%棉"
        }, {
            "attrName": "产地",
            "attrValue": "中国"
        }],
        "categoryList": [{
            "bannerUrl": "http://yanxuan.nosdn.127.net/003e1d1289f4f290506ac2aedbd09d35.jpg",
            "frontDesc": "贴身的，要亲肤",
            "frontName": "贴身的，要亲肤",
            "iconUrl": "http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png",
            "id": 1010000,
            "level": "L1",
            "name": "服装",
            "showIndex": 4,
            "subCateList": [],
            "superCategoryId": 0
        }, {
            "bannerUrl": "http://yanxuan.nosdn.127.net/94aa4a4814e2a7a97639438f1d52dcee.png",
            "frontDesc": "挺拔而不束缚",
            "frontName": "细节讲究，合身剪裁",
            "iconUrl": "",
            "id": 1020010,
            "level": "L2",
            "name": "衬衫",
            "showIndex": 6,
            "subCateList": [],
            "superCategoryId": 1010000
        }],
        "collectionedByUser": false,
        "colorNum": 4,
        "flashPageLink": "",
        "gradientPrice": null,
        "hdrkDetailVOList": [{
            "activityType": "出行季",
            "endTime": 1490457599000,
            "huodongUrlPc": "http://you.163.com/act/pub/4eYRLsLVYJ.html",
            "id": 1063002,
            "name": "满赠199元好礼，领全场券更优惠",
            "startTime": 1489852800000
        }],
        "id": 119,
        "issueList": [{
            "answer": "单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。",
            "question": "购买运费如何收取？"
        }, {
            "answer": "严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除外）。",
            "question": "使用什么快递发货？"
        }, {
            "answer": "1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；\n2.内裤和食品等特殊商品无质量问题不支持退货\n3.退货流程：\n确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；\n4.因网易严选产生的退货，如质量问题，退货邮费由网易严选承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。",
            "question": "如何申请退货？"
        }, {
            "answer": "1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）；\n2.如需开具增值税专用发票，请在购买后联系客服办理；\n3.可选开票内容：\n订单中含有办公用品（箱包、文具、口罩）--办公用品等、耗材等、日用品、家居用品、食品、酒/饮料、服饰、化妆品；\n不含有办公用品--日用品、家居用品、食品、酒/饮料、服饰、化妆品；\n订单商品为礼品卡--预付卡。",
            "question": "如何开具发票？"
        }],
        "itemDetail": {
            "detailHtml": "<p><img src=\"http://yanxuan.nosdn.127.net/f562293c49053b589a7ac49dd425ae36.jpg\" _src=\"http://yanxuan.nosdn.127.net/f562293c49053b589a7ac49dd425ae36.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b84bcfd9539d646fd0d83085dc673e37.jpg\" _src=\"http://yanxuan.nosdn.127.net/b84bcfd9539d646fd0d83085dc673e37.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/896eebb6e3d19306ba6bdb446d63db6a.jpg\" _src=\"http://yanxuan.nosdn.127.net/896eebb6e3d19306ba6bdb446d63db6a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/87ad985f2d784989a6d82c5d51319986.jpg\" _src=\"http://yanxuan.nosdn.127.net/87ad985f2d784989a6d82c5d51319986.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b44f754d89256b78f2e08be0f5949d97.jpg\" _src=\"http://yanxuan.nosdn.127.net/b44f754d89256b78f2e08be0f5949d97.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c6adff51df0789e6744da531aa3ab180.jpg\" _src=\"http://yanxuan.nosdn.127.net/c6adff51df0789e6744da531aa3ab180.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/8cec69f9cba22b0960484f51e75f40c2.jpg\" _src=\"http://yanxuan.nosdn.127.net/8cec69f9cba22b0960484f51e75f40c2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/9fc3b28a9862a11ab432212dc409f066.jpg\" _src=\"http://yanxuan.nosdn.127.net/9fc3b28a9862a11ab432212dc409f066.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f03bdf8831c29c67fcb72c4a30de6688.jpg\" _src=\"http://yanxuan.nosdn.127.net/f03bdf8831c29c67fcb72c4a30de6688.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/90ad4a549e58aa73d5e18138beacb9b1.jpg\" _src=\"http://yanxuan.nosdn.127.net/90ad4a549e58aa73d5e18138beacb9b1.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c9de9cb2a6f01ec7397ff01e3398ab0d.jpg\" _src=\"http://yanxuan.nosdn.127.net/c9de9cb2a6f01ec7397ff01e3398ab0d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/50aabcd9c0c907723a5fbf09d46cba10.jpg\" _src=\"http://yanxuan.nosdn.127.net/50aabcd9c0c907723a5fbf09d46cba10.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ef11e29a4c37990571066b358d01c19b.jpg\" _src=\"http://yanxuan.nosdn.127.net/ef11e29a4c37990571066b358d01c19b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7e0d6cc3f4f408adface4ac7af34a012.jpg\" _src=\"http://yanxuan.nosdn.127.net/7e0d6cc3f4f408adface4ac7af34a012.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7810279f0e30abaa7d7548303824088a.jpg\" _src=\"http://yanxuan.nosdn.127.net/7810279f0e30abaa7d7548303824088a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/4b215a7dbbca6a28653206195872a9c6.jpg\" _src=\"http://yanxuan.nosdn.127.net/4b215a7dbbca6a28653206195872a9c6.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/344331229dea13ce6721cb47aa6212e0.jpg\" _src=\"http://yanxuan.nosdn.127.net/344331229dea13ce6721cb47aa6212e0.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/459ad458129d74de2be7c8daa44b5ecc.jpg\" _src=\"http://yanxuan.nosdn.127.net/459ad458129d74de2be7c8daa44b5ecc.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/67a3bff10d23b97079ffe7da3f18b275.jpg\" _src=\"http://yanxuan.nosdn.127.net/67a3bff10d23b97079ffe7da3f18b275.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/97d9908c3d7d99bffebfd49545bb3708.jpg\" _src=\"http://yanxuan.nosdn.127.net/97d9908c3d7d99bffebfd49545bb3708.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/68762508294a4ea0e115e28340cf3444.jpg\" _src=\"http://yanxuan.nosdn.127.net/68762508294a4ea0e115e28340cf3444.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c3a7fd69fe9dd90e0435e2919e053c4e.jpg\" _src=\"http://yanxuan.nosdn.127.net/c3a7fd69fe9dd90e0435e2919e053c4e.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/307761f40f2fe728c901d9a0fcd07639.jpg\" _src=\"http://yanxuan.nosdn.127.net/307761f40f2fe728c901d9a0fcd07639.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/13f931a14b054e93136a8fcd2d0bc652.jpg\" _src=\"http://yanxuan.nosdn.127.net/13f931a14b054e93136a8fcd2d0bc652.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/195e0a33bfb3d99d4d5ac3b67aac2ff6.jpg\" _src=\"http://yanxuan.nosdn.127.net/195e0a33bfb3d99d4d5ac3b67aac2ff6.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/0669cfeeb823fde02a00dedcfdd8f77c.jpg\" _src=\"http://yanxuan.nosdn.127.net/0669cfeeb823fde02a00dedcfdd8f77c.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/364dbc14b05632a33bf0ecce1a6d9e9a.jpg\" _src=\"http://yanxuan.nosdn.127.net/364dbc14b05632a33bf0ecce1a6d9e9a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/89d2e6d2d905082649597557e03a61ef.jpg\" _src=\"http://yanxuan.nosdn.127.net/89d2e6d2d905082649597557e03a61ef.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/8ac4c861f82f5daa2ca7b6090cac870a.jpg\" _src=\"http://yanxuan.nosdn.127.net/8ac4c861f82f5daa2ca7b6090cac870a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d7a9e5a388c62c5e96b3651575eac4bc.jpg\" _src=\"http://yanxuan.nosdn.127.net/d7a9e5a388c62c5e96b3651575eac4bc.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/bfd6f75fd74f41e14140ed81afab7c7b.jpg\" _src=\"http://yanxuan.nosdn.127.net/bfd6f75fd74f41e14140ed81afab7c7b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/e031e68772b0041f0818821abdbe0f60.jpg\" _src=\"http://yanxuan.nosdn.127.net/e031e68772b0041f0818821abdbe0f60.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c6a9396314a16d5865a97277700bf9aa.jpg\" _src=\"http://yanxuan.nosdn.127.net/c6a9396314a16d5865a97277700bf9aa.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/1e485f6627fa2a53b7a5788415899916.jpg\" _src=\"http://yanxuan.nosdn.127.net/1e485f6627fa2a53b7a5788415899916.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b9111ec87af4d220fee5a33c323135b9.jpg\" _src=\"http://yanxuan.nosdn.127.net/b9111ec87af4d220fee5a33c323135b9.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/57fb53b8a62c6a3f27adde9a4f11193d.jpg\" _src=\"http://yanxuan.nosdn.127.net/57fb53b8a62c6a3f27adde9a4f11193d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/85e537f95e46b495836d30cd9506e597.jpg\" _src=\"http://yanxuan.nosdn.127.net/85e537f95e46b495836d30cd9506e597.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/e5ce60665cbbbf9ba351de6790f56e0b.jpg\" _src=\"http://yanxuan.nosdn.127.net/e5ce60665cbbbf9ba351de6790f56e0b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/be8e63bb6e56463b26fd73c5beba9c1b.jpg\" _src=\"http://yanxuan.nosdn.127.net/be8e63bb6e56463b26fd73c5beba9c1b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/46bbcf82cf035504b29422cbb4da58c1.jpg\" _src=\"http://yanxuan.nosdn.127.net/46bbcf82cf035504b29422cbb4da58c1.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/01448fd8274dd3c609eef7614a01930d.jpg\" _src=\"http://yanxuan.nosdn.127.net/01448fd8274dd3c609eef7614a01930d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/8234f59560977d85c6e40ec48c71d9b7.jpg\" _src=\"http://yanxuan.nosdn.127.net/8234f59560977d85c6e40ec48c71d9b7.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/66601475de6bb805a2512dafcc96fd20.jpg\" _src=\"http://yanxuan.nosdn.127.net/66601475de6bb805a2512dafcc96fd20.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/e1029cc962399562fea3becc2b695fa5.jpg\" _src=\"http://yanxuan.nosdn.127.net/e1029cc962399562fea3becc2b695fa5.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/5e6c2d9e34c673f4bd16854045ce5aab.jpg\" _src=\"http://yanxuan.nosdn.127.net/5e6c2d9e34c673f4bd16854045ce5aab.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ca23bfc28a50d8091ae2c4bc6e2d0011.jpg\" _src=\"http://yanxuan.nosdn.127.net/ca23bfc28a50d8091ae2c4bc6e2d0011.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b80f1bf607e53654d0e11af346f77b90.jpg\" _src=\"http://yanxuan.nosdn.127.net/b80f1bf607e53654d0e11af346f77b90.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d5248b95d445b8ebcb2dee3def6209be.jpg\" _src=\"http://yanxuan.nosdn.127.net/d5248b95d445b8ebcb2dee3def6209be.jpg\" style=\"\"/><\/p>",
            "picUrl1": "http://yanxuan.nosdn.127.net/116d8390a68790e225b23f28f503fec3.jpg",
            "picUrl2": "http://yanxuan.nosdn.127.net/472df53c53e09830045ea1b3ba2d430d.jpg",
            "picUrl3": "http://yanxuan.nosdn.127.net/2bd98abfe9b43cdfe7a4ce5460da02af.jpg",
            "picUrl4": "http://yanxuan.nosdn.127.net/ee1c4dbc1689ec0eddcc041ceaceb11a.jpg",
            "seoDesc": ""
        },
        "limitedFlag": 0,
        "listPicUrl": "",
        "name": "领尖扣商务免烫衬衫",
        "newItemFlag": false,
        "pieceNum": 0,
        "pieceUnitDesc": "件",
        "primaryPicUrl": "http://yanxuan.nosdn.127.net/8ba274d520744241b96ea370300516b6.png",
        "primarySkuId": 1097124,
        "primarySkuPreSellPrice": 0,
        "primarySkuPreSellStatus": 0,
        "productPlace": "",
        "promTag": "",
        "promotionDesc": "限时购",
        "rank": 99,
        "remarkTargetUrl": "",
        "remarkTitle": "",
        "reportPicList": ["http://yanxuan.nosdn.127.net/e237e167cbd6ef7abf8439d312808bb8.jpg", "http://yanxuan.nosdn.127.net/5d6a4e186a217ead9660e5cfba27a5fc.jpg", "http://yanxuan.nosdn.127.net/7d5e9e2f3179c013e48dfa88a2d31181.jpg", "http://yanxuan.nosdn.127.net/cd1c348738e1f32517afadb0797dbb6e.jpg", "http://yanxuan.nosdn.127.net/95cfd2f3f607fcfde514fe7cb62c69d5.jpg"],
        "retailPrice": 219,
        "sellVolume": 42,
        "seoTitle": "",
        "simpleDesc": "环保成衣免烫，商务人士优选",
        "skuList": [{
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097124,
            "itemSkuSpecValueList": [{
                "id": 1090220,
                "skuId": 1097124,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087050,
                    "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                    "skuSpecId": 1085015,
                    "value": "浅蓝"
                },
                "skuSpecValueId": 1087050
            }, {
                "id": 1090221,
                "skuId": 1097124,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087054,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "M"
                },
                "skuSpecValueId": 1087054
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": true,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097125,
            "itemSkuSpecValueList": [{
                "id": 1090222,
                "skuId": 1097125,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087050,
                    "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                    "skuSpecId": 1085015,
                    "value": "浅蓝"
                },
                "skuSpecValueId": 1087050
            }, {
                "id": 1090223,
                "skuId": 1097125,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087055,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "L"
                },
                "skuSpecValueId": 1087055
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097126,
            "itemSkuSpecValueList": [{
                "id": 1090224,
                "skuId": 1097126,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087050,
                    "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                    "skuSpecId": 1085015,
                    "value": "浅蓝"
                },
                "skuSpecValueId": 1087050
            }, {
                "id": 1090225,
                "skuId": 1097126,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087056,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XL"
                },
                "skuSpecValueId": 1087056
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097127,
            "itemSkuSpecValueList": [{
                "id": 1090226,
                "skuId": 1097127,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087050,
                    "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                    "skuSpecId": 1085015,
                    "value": "浅蓝"
                },
                "skuSpecValueId": 1087050
            }, {
                "id": 1090227,
                "skuId": 1097127,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087057,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XXL"
                },
                "skuSpecValueId": 1087057
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097128,
            "itemSkuSpecValueList": [{
                "id": 1090228,
                "skuId": 1097128,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087051,
                    "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                    "skuSpecId": 1085015,
                    "value": "深蓝"
                },
                "skuSpecValueId": 1087051
            }, {
                "id": 1090229,
                "skuId": 1097128,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087054,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "M"
                },
                "skuSpecValueId": 1087054
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097129,
            "itemSkuSpecValueList": [{
                "id": 1090230,
                "skuId": 1097129,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087051,
                    "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                    "skuSpecId": 1085015,
                    "value": "深蓝"
                },
                "skuSpecValueId": 1087051
            }, {
                "id": 1090231,
                "skuId": 1097129,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087055,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "L"
                },
                "skuSpecValueId": 1087055
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097130,
            "itemSkuSpecValueList": [{
                "id": 1090232,
                "skuId": 1097130,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087051,
                    "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                    "skuSpecId": 1085015,
                    "value": "深蓝"
                },
                "skuSpecValueId": 1087051
            }, {
                "id": 1090233,
                "skuId": 1097130,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087056,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XL"
                },
                "skuSpecValueId": 1087056
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097131,
            "itemSkuSpecValueList": [{
                "id": 1090234,
                "skuId": 1097131,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087051,
                    "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                    "skuSpecId": 1085015,
                    "value": "深蓝"
                },
                "skuSpecValueId": 1087051
            }, {
                "id": 1090235,
                "skuId": 1097131,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087057,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XXL"
                },
                "skuSpecValueId": 1087057
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 2,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097132,
            "itemSkuSpecValueList": [{
                "id": 1090236,
                "skuId": 1097132,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087052,
                    "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                    "skuSpecId": 1085015,
                    "value": "灰色"
                },
                "skuSpecValueId": 1087052
            }, {
                "id": 1090237,
                "skuId": 1097132,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087054,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "M"
                },
                "skuSpecValueId": 1087054
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097133,
            "itemSkuSpecValueList": [{
                "id": 1090238,
                "skuId": 1097133,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087052,
                    "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                    "skuSpecId": 1085015,
                    "value": "灰色"
                },
                "skuSpecValueId": 1087052
            }, {
                "id": 1090239,
                "skuId": 1097133,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087055,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "L"
                },
                "skuSpecValueId": 1087055
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097134,
            "itemSkuSpecValueList": [{
                "id": 1090240,
                "skuId": 1097134,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087052,
                    "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                    "skuSpecId": 1085015,
                    "value": "灰色"
                },
                "skuSpecValueId": 1087052
            }, {
                "id": 1090241,
                "skuId": 1097134,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087056,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XL"
                },
                "skuSpecValueId": 1087056
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097135,
            "itemSkuSpecValueList": [{
                "id": 1090242,
                "skuId": 1097135,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087052,
                    "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                    "skuSpecId": 1085015,
                    "value": "灰色"
                },
                "skuSpecValueId": 1087052
            }, {
                "id": 1090243,
                "skuId": 1097135,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087057,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XXL"
                },
                "skuSpecValueId": 1087057
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 10,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097136,
            "itemSkuSpecValueList": [{
                "id": 1090244,
                "skuId": 1097136,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087053,
                    "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                    "skuSpecId": 1085015,
                    "value": "白色"
                },
                "skuSpecValueId": 1087053
            }, {
                "id": 1090245,
                "skuId": 1097136,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087054,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "M"
                },
                "skuSpecValueId": 1087054
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097137,
            "itemSkuSpecValueList": [{
                "id": 1090246,
                "skuId": 1097137,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087053,
                    "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                    "skuSpecId": 1085015,
                    "value": "白色"
                },
                "skuSpecValueId": 1087053
            }, {
                "id": 1090247,
                "skuId": 1097137,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087055,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "L"
                },
                "skuSpecValueId": 1087055
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097138,
            "itemSkuSpecValueList": [{
                "id": 1090248,
                "skuId": 1097138,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087053,
                    "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                    "skuSpecId": 1085015,
                    "value": "白色"
                },
                "skuSpecValueId": 1087053
            }, {
                "id": 1090249,
                "skuId": 1097138,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087056,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XL"
                },
                "skuSpecValueId": 1087056
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 0,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 219,
            "giftCardFlag": false,
            "id": 1097139,
            "itemSkuSpecValueList": [{
                "id": 1090250,
                "skuId": 1097139,
                "skuSpec": {
                    "id": 1085015,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1085015,
                "skuSpecValue": {
                    "id": 1087053,
                    "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                    "skuSpecId": 1085015,
                    "value": "白色"
                },
                "skuSpecValueId": 1087053
            }, {
                "id": 1090251,
                "skuId": 1097139,
                "skuSpec": {
                    "id": 1085016,
                    "name": "尺码",
                    "skuSpecValueList": [],
                    "type": 0
                },
                "skuSpecId": 1085016,
                "skuSpecValue": {
                    "id": 1087057,
                    "picUrl": "",
                    "skuSpecId": 1085016,
                    "value": "XXL"
                },
                "skuSpecValueId": 1087057
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "",
            "preSellPrice": 0,
            "preSellStatus": 0,
            "preSellVolume": 0,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 219,
            "sellVolume": 30,
            "valid": true,
            "virtualFlag": false
        }],
        "skuMap": {
            "1087053;1087055": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097137,
                "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                "itemSkuSpecValueList": [{
                    "id": 1090246,
                    "skuId": 1097137,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087053,
                        "skuSpecId": 1085015,
                        "value": "白色"
                    },
                    "skuSpecValueId": 1087053
                }, {
                    "id": 1090247,
                    "skuId": 1097137,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087055,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "L"
                    },
                    "skuSpecValueId": 1087055
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 34,
                "valid": true,
                "virtualFlag": false
            },
            "1087052;1087055": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097133,
                "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                "itemSkuSpecValueList": [{
                    "id": 1090238,
                    "skuId": 1097133,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087052,
                        "skuSpecId": 1085015,
                        "value": "灰色"
                    },
                    "skuSpecValueId": 1087052
                }, {
                    "id": 1090239,
                    "skuId": 1097133,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087055,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "L"
                    },
                    "skuSpecValueId": 1087055
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087053;1087054": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097136,
                "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                "itemSkuSpecValueList": [{
                    "id": 1090244,
                    "skuId": 1097136,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087053,
                        "skuSpecId": 1085015,
                        "value": "白色"
                    },
                    "skuSpecValueId": 1087053
                }, {
                    "id": 1090245,
                    "skuId": 1097136,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087054,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "M"
                    },
                    "skuSpecValueId": 1087054
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 21,
                "valid": true,
                "virtualFlag": false
            },
            "1087052;1087056": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097134,
                "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                "itemSkuSpecValueList": [{
                    "id": 1090240,
                    "skuId": 1097134,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087052,
                        "skuSpecId": 1085015,
                        "value": "灰色"
                    },
                    "skuSpecValueId": 1087052
                }, {
                    "id": 1090241,
                    "skuId": 1097134,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087056,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XL"
                    },
                    "skuSpecValueId": 1087056
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 5,
                "valid": true,
                "virtualFlag": false
            },
            "1087052;1087054": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097132,
                "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                "itemSkuSpecValueList": [{
                    "id": 1090236,
                    "skuId": 1097132,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087052,
                        "skuSpecId": 1085015,
                        "value": "灰色"
                    },
                    "skuSpecValueId": 1087052
                }, {
                    "id": 1090237,
                    "skuId": 1097132,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087054,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "M"
                    },
                    "skuSpecValueId": 1087054
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087053;1087057": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097139,
                "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                "itemSkuSpecValueList": [{
                    "id": 1090250,
                    "skuId": 1097139,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087053,
                        "skuSpecId": 1085015,
                        "value": "白色"
                    },
                    "skuSpecValueId": 1087053
                }, {
                    "id": 1090251,
                    "skuId": 1097139,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087057,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XXL"
                    },
                    "skuSpecValueId": 1087057
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087052;1087057": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097135,
                "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                "itemSkuSpecValueList": [{
                    "id": 1090242,
                    "skuId": 1097135,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087052,
                        "skuSpecId": 1085015,
                        "value": "灰色"
                    },
                    "skuSpecValueId": 1087052
                }, {
                    "id": 1090243,
                    "skuId": 1097135,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087057,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XXL"
                    },
                    "skuSpecValueId": 1087057
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 10,
                "valid": true,
                "virtualFlag": false
            },
            "1087053;1087056": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097138,
                "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                "itemSkuSpecValueList": [{
                    "id": 1090248,
                    "skuId": 1097138,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087053,
                        "skuSpecId": 1085015,
                        "value": "白色"
                    },
                    "skuSpecValueId": 1087053
                }, {
                    "id": 1090249,
                    "skuId": 1097138,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087056,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XL"
                    },
                    "skuSpecValueId": 1087056
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087051;1087057": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097131,
                "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                "itemSkuSpecValueList": [{
                    "id": 1090234,
                    "skuId": 1097131,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087051,
                        "skuSpecId": 1085015,
                        "value": "深蓝"
                    },
                    "skuSpecValueId": 1087051
                }, {
                    "id": 1090235,
                    "skuId": 1097131,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087057,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XXL"
                    },
                    "skuSpecValueId": 1087057
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 2,
                "valid": true,
                "virtualFlag": false
            },
            "1087051;1087056": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097130,
                "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                "itemSkuSpecValueList": [{
                    "id": 1090232,
                    "skuId": 1097130,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087051,
                        "skuSpecId": 1085015,
                        "value": "深蓝"
                    },
                    "skuSpecValueId": 1087051
                }, {
                    "id": 1090233,
                    "skuId": 1097130,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087056,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XL"
                    },
                    "skuSpecValueId": 1087056
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087051;1087055": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097129,
                "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                "itemSkuSpecValueList": [{
                    "id": 1090230,
                    "skuId": 1097129,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087051,
                        "skuSpecId": 1085015,
                        "value": "深蓝"
                    },
                    "skuSpecValueId": 1087051
                }, {
                    "id": 1090231,
                    "skuId": 1097129,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087055,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "L"
                    },
                    "skuSpecValueId": 1087055
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 14,
                "valid": true,
                "virtualFlag": false
            },
            "1087051;1087054": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097128,
                "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                "itemSkuSpecValueList": [{
                    "id": 1090228,
                    "skuId": 1097128,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087051,
                        "skuSpecId": 1085015,
                        "value": "深蓝"
                    },
                    "skuSpecValueId": 1087051
                }, {
                    "id": 1090229,
                    "skuId": 1097128,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087054,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "M"
                    },
                    "skuSpecValueId": 1087054
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087050;1087054": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097124,
                "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                "itemSkuSpecValueList": [{
                    "id": 1090220,
                    "skuId": 1097124,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087050,
                        "skuSpecId": 1085015,
                        "value": "浅蓝"
                    },
                    "skuSpecValueId": 1087050
                }, {
                    "id": 1090221,
                    "skuId": 1097124,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087054,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "M"
                    },
                    "skuSpecValueId": 1087054
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": true,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087050;1087055": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097125,
                "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                "itemSkuSpecValueList": [{
                    "id": 1090222,
                    "skuId": 1097125,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087050,
                        "skuSpecId": 1085015,
                        "value": "浅蓝"
                    },
                    "skuSpecValueId": 1087050
                }, {
                    "id": 1090223,
                    "skuId": 1097125,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087055,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "L"
                    },
                    "skuSpecValueId": 1087055
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087050;1087056": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097126,
                "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                "itemSkuSpecValueList": [{
                    "id": 1090224,
                    "skuId": 1097126,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087050,
                        "skuSpecId": 1085015,
                        "value": "浅蓝"
                    },
                    "skuSpecValueId": 1087050
                }, {
                    "id": 1090225,
                    "skuId": 1097126,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087056,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XL"
                    },
                    "skuSpecValueId": 1087056
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            },
            "1087050;1087057": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 219,
                "giftCardFlag": false,
                "id": 1097127,
                "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                "itemSkuSpecValueList": [{
                    "id": 1090226,
                    "skuId": 1097127,
                    "skuSpec": {
                        "id": 1085015,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1085015,
                    "skuSpecValue": {
                        "id": 1087050,
                        "skuSpecId": 1085015,
                        "value": "浅蓝"
                    },
                    "skuSpecValueId": 1087050
                }, {
                    "id": 1090227,
                    "skuId": 1097127,
                    "skuSpec": {
                        "id": 1085016,
                        "name": "尺码",
                        "skuSpecValueList": [],
                        "type": 0
                    },
                    "skuSpecId": 1085016,
                    "skuSpecValue": {
                        "id": 1087057,
                        "picUrl": "",
                        "skuSpecId": 1085016,
                        "value": "XXL"
                    },
                    "skuSpecValueId": 1087057
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "",
                "preSellPrice": 0,
                "preSellStatus": 0,
                "preSellVolume": 0,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 219,
                "sellVolume": 0,
                "valid": true,
                "virtualFlag": false
            }
        },
        "skuSpecList": [{
            "id": 1085015,
            "name": "颜色",
            "skuSpecValueList": [{
                "id": 1087050,
                "picUrl": "http://yanxuan.nosdn.127.net/03fc9087f5743746cdf3ce1e774c9b55.png",
                "skuSpecId": 1085015,
                "value": "浅蓝"
            }, {
                "id": 1087051,
                "picUrl": "http://yanxuan.nosdn.127.net/24519ed5d9a2c7fbf2de28f6dd1d4e78.png",
                "skuSpecId": 1085015,
                "value": "深蓝"
            }, {
                "id": 1087052,
                "picUrl": "http://yanxuan.nosdn.127.net/0c70d7de764f82440defaa9db1374314.png",
                "skuSpecId": 1085015,
                "value": "灰色"
            }, {
                "id": 1087053,
                "picUrl": "http://yanxuan.nosdn.127.net/7c4ecc18cd93896f522fe5b634239d19.png",
                "skuSpecId": 1085015,
                "value": "白色"
            }],
            "type": 1
        }, {
            "id": 1085016,
            "name": "尺码",
            "skuSpecValueList": [{
                "id": 1087054,
                "picUrl": "",
                "skuSpecId": 1085016,
                "value": "M"
            }, {
                "id": 1087055,
                "picUrl": "",
                "skuSpecId": 1085016,
                "value": "L"
            }, {
                "id": 1087056,
                "picUrl": "",
                "skuSpecId": 1085016,
                "value": "XL"
            }, {
                "id": 1087057,
                "picUrl": "",
                "skuSpecId": 1085016,
                "value": "XXL"
            }],
            "type": 0
        }],
        "soldOut": false,
        "status": 2,
        "tagList": [],
        "tryOutEventReport": null,
        "underShelf": false,
        "unitPrice": 0
    },
    "120": {
        "appExclusiveFlag": false,
        "appExclusivePrice": 0,
        "attrList": [{
            "attrName": "主材质",
            "attrValue": "ABS+PC"
        }, {
            "attrName": "外箱",
            "attrValue": "55*45*26cm"
        }, {
            "attrName": "容积",
            "attrValue": "51L"
        }, {
            "attrName": "自重",
            "attrValue": "3.15KG"
        }],
        "categoryList": [{
            "bannerUrl": "http://yanxuan.nosdn.127.net/cad5aba2bc52d3b8adfd0232c9814de2.jpg",
            "frontDesc": "配角，亦是主角",
            "frontName": "配角，亦是主角",
            "iconUrl": "http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png",
            "id": 1008000,
            "level": "L1",
            "name": "配件",
            "showIndex": 3,
            "subCateList": [],
            "superCategoryId": 0
        }, {
            "bannerUrl": "http://yanxuan.nosdn.127.net/3050a2b3052d766c4b460d4b766353a3.png",
            "frontDesc": "箱子里装着你的生活",
            "frontName": "范思哲、Coach等品牌制造商出品",
            "iconUrl": "",
            "id": 1012001,
            "level": "L2",
            "name": "功能箱包",
            "showIndex": 1,
            "subCateList": [],
            "superCategoryId": 1008000
        }],
        "collectionedByUser": false,
        "colorNum": 4,
        "flashPageLink": "",
        "gradientPrice": null,
        "hdrkDetailVOList": [{
            "activityType": "出行季",
            "endTime": 1490457599000,
            "huodongUrlPc": "http://you.163.com/act/pub/4eYRLsLVYJ.html",
            "id": 1063013,
            "name": "券后直减仅203，满还赠199元好礼",
            "startTime": 1489852800000
        }],
        "id": 120,
        "issueList": [{
            "answer": "单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。\n(港澳台地区需满500元免邮费；不满500元，每单收取30元运费)",
            "question": "购买运费如何收取？"
        }, {
            "answer": "严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除外）。",
            "question": "使用什么快递发货？"
        }, {
            "answer": "1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；\n2.内裤和食品等特殊商品无质量问题不支持退货\n3.退货流程：\n确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；\n4.因网易严选产生的退货，如质量问题，退货邮费由网易严选承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。",
            "question": "如何申请退货？"
        }, {
            "answer": "1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）；\n2.如需开具增值税专用发票，请在购买后联系客服办理；\n3.可选开票内容：\n订单中含有办公用品（箱包、文具、口罩）--办公用品等、耗材等、日用品、家居用品、食品、酒/饮料、服饰、化妆品；\n不含有办公用品--日用品、家居用品、食品、酒/饮料、服饰、化妆品；\n订单商品为礼品卡--预付卡。",
            "question": "如何开具发票？"
        }],
        "itemDetail": {
            "detailHtml": "<p><img src=\"http://yanxuan.nosdn.127.net/b2cb2753c5832df0f39c86799a2e9ca8.jpg\" _src=\"http://yanxuan.nosdn.127.net/b2cb2753c5832df0f39c86799a2e9ca8.jpg\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/74e6ed11372c361703388d712f0bc8da.jpg\" _src=\"http://yanxuan.nosdn.127.net/74e6ed11372c361703388d712f0bc8da.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/bb78bfb102db3617ad6ac1a2296b61fe.jpg\" _src=\"http://yanxuan.nosdn.127.net/bb78bfb102db3617ad6ac1a2296b61fe.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/8c9b55b43b496237d242a4d2b7c1823f.jpg\" _src=\"http://yanxuan.nosdn.127.net/8c9b55b43b496237d242a4d2b7c1823f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c0fb8eb5793e33499b3738cd63513bb2.jpg\" _src=\"http://yanxuan.nosdn.127.net/c0fb8eb5793e33499b3738cd63513bb2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b4516ae5771b02fefbf434c3ffa82b5a.jpg\" _src=\"http://yanxuan.nosdn.127.net/b4516ae5771b02fefbf434c3ffa82b5a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/41986825d80cecfe81fa5541ebf6b723.jpg\" _src=\"http://yanxuan.nosdn.127.net/41986825d80cecfe81fa5541ebf6b723.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/a68ef06d27587cae3790816aa18e33d8.jpg\" _src=\"http://yanxuan.nosdn.127.net/a68ef06d27587cae3790816aa18e33d8.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/396eb934bce44d6fe9175d50d850d9b7.jpg\" _src=\"http://yanxuan.nosdn.127.net/396eb934bce44d6fe9175d50d850d9b7.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/8762af93c84c6eef9bd4f770b421b33a.jpg\" _src=\"http://yanxuan.nosdn.127.net/8762af93c84c6eef9bd4f770b421b33a.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/82fde65ff5707a3b1e7ed163c289f1f4.jpg\" _src=\"http://yanxuan.nosdn.127.net/82fde65ff5707a3b1e7ed163c289f1f4.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c76be9b2c6128f1526c440f6608842d0.jpg\" _src=\"http://yanxuan.nosdn.127.net/c76be9b2c6128f1526c440f6608842d0.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/1f6543ae7bad280867271f2016b2c1b2.jpg\" _src=\"http://yanxuan.nosdn.127.net/1f6543ae7bad280867271f2016b2c1b2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7f16769b648808e50b122882f2a31508.jpg\" _src=\"http://yanxuan.nosdn.127.net/7f16769b648808e50b122882f2a31508.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/6649b4f5b9011811476cb8822e64c276.jpg\" _src=\"http://yanxuan.nosdn.127.net/6649b4f5b9011811476cb8822e64c276.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/066e6843607ad917871f5de9a5336614.jpg\" _src=\"http://yanxuan.nosdn.127.net/066e6843607ad917871f5de9a5336614.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/bfce32e65493b6876c09783a881801a5.jpg\" _src=\"http://yanxuan.nosdn.127.net/bfce32e65493b6876c09783a881801a5.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b420f6a157d2756c2f76dcffb59d4e95.jpg\" _src=\"http://yanxuan.nosdn.127.net/b420f6a157d2756c2f76dcffb59d4e95.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/680dc1f4c658c7b972046c795de86aa9.jpg\" _src=\"http://yanxuan.nosdn.127.net/680dc1f4c658c7b972046c795de86aa9.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/31aafdda5f7f93d2ae33d5aa9745c27b.jpg\" _src=\"http://yanxuan.nosdn.127.net/31aafdda5f7f93d2ae33d5aa9745c27b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/10d91ad2546b91ce10d7f2989ea5edc7.jpg\" _src=\"http://yanxuan.nosdn.127.net/10d91ad2546b91ce10d7f2989ea5edc7.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/13b703c936856ff6310484435bade3eb.jpg\" _src=\"http://yanxuan.nosdn.127.net/13b703c936856ff6310484435bade3eb.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/bc6fe09064a2cd884f0afd1e7da57fc2.jpg\" _src=\"http://yanxuan.nosdn.127.net/bc6fe09064a2cd884f0afd1e7da57fc2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/47541691af6dd240d534f896b56e4ed4.jpg\" _src=\"http://yanxuan.nosdn.127.net/47541691af6dd240d534f896b56e4ed4.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/475b803927ab7a3844321c6f1ecb8c33.jpg\" _src=\"http://yanxuan.nosdn.127.net/475b803927ab7a3844321c6f1ecb8c33.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/189f56df0ad203b9a7fdf9846133a01d.jpg\" _src=\"http://yanxuan.nosdn.127.net/189f56df0ad203b9a7fdf9846133a01d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/45a5cd3b3d75fd216f67970ba2fc41cf.jpg\" _src=\"http://yanxuan.nosdn.127.net/45a5cd3b3d75fd216f67970ba2fc41cf.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/22bc5a77b5113caae2ca06a169430c75.jpg\" _src=\"http://yanxuan.nosdn.127.net/22bc5a77b5113caae2ca06a169430c75.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f4a2f17ac869ef5d86ab8bcfc299eb35.jpg\" _src=\"http://yanxuan.nosdn.127.net/f4a2f17ac869ef5d86ab8bcfc299eb35.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f184c84954d1ff4dbb5894c3c59dcfb6.jpg\" _src=\"http://yanxuan.nosdn.127.net/f184c84954d1ff4dbb5894c3c59dcfb6.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/2e608564c843c1f8c35490057e68ebfd.jpg\" _src=\"http://yanxuan.nosdn.127.net/2e608564c843c1f8c35490057e68ebfd.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/debd632afce5a112b44c619a617d0ad0.jpg\" _src=\"http://yanxuan.nosdn.127.net/debd632afce5a112b44c619a617d0ad0.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d3aeda7d4c9adbc0110499e26e4012ce.jpg\" _src=\"http://yanxuan.nosdn.127.net/d3aeda7d4c9adbc0110499e26e4012ce.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/87fce03b39a5d91a88866552b51ed129.jpg\" _src=\"http://yanxuan.nosdn.127.net/87fce03b39a5d91a88866552b51ed129.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b79e404caa45d64079b2e0ad755abae4.jpg\" _src=\"http://yanxuan.nosdn.127.net/b79e404caa45d64079b2e0ad755abae4.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/df7953a3a8d8a2d73e47e87867a35c7b.jpg\" _src=\"http://yanxuan.nosdn.127.net/df7953a3a8d8a2d73e47e87867a35c7b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/2c438b10a3ed8ef57ad1e70d31c3264c.jpg\" _src=\"http://yanxuan.nosdn.127.net/2c438b10a3ed8ef57ad1e70d31c3264c.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/95e0554e840f224ef17bd5ae7f3400f4.jpg\" _src=\"http://yanxuan.nosdn.127.net/95e0554e840f224ef17bd5ae7f3400f4.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/55b2a1753b34f50fbb047f73d5617fd7.jpg\" _src=\"http://yanxuan.nosdn.127.net/55b2a1753b34f50fbb047f73d5617fd7.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/bce41cc512ee089ce0b7b1624b2e069f.jpg\" _src=\"http://yanxuan.nosdn.127.net/bce41cc512ee089ce0b7b1624b2e069f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/78be56a72d4030012444b8287ae6c576.jpg\" _src=\"http://yanxuan.nosdn.127.net/78be56a72d4030012444b8287ae6c576.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ca9686b1c8eefe5f93ecdd8ce6b6a447.jpg\" _src=\"http://yanxuan.nosdn.127.net/ca9686b1c8eefe5f93ecdd8ce6b6a447.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/00366f07092b5410ace7f602d357cf25.jpg\" _src=\"http://yanxuan.nosdn.127.net/00366f07092b5410ace7f602d357cf25.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d7b0bc0eb7ae509220f071dd8a2c1b6c.jpg\" _src=\"http://yanxuan.nosdn.127.net/d7b0bc0eb7ae509220f071dd8a2c1b6c.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d762af0093a49911bc925ed836f095bb.jpg\" _src=\"http://yanxuan.nosdn.127.net/d762af0093a49911bc925ed836f095bb.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/eba0e0f9ca0c2c4490ce58caaf4f0746.jpg\" _src=\"http://yanxuan.nosdn.127.net/eba0e0f9ca0c2c4490ce58caaf4f0746.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7f34d2653610c039aecefd5dbb053888.jpg\" _src=\"http://yanxuan.nosdn.127.net/7f34d2653610c039aecefd5dbb053888.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/4f45d2eed6d8cf8328b782b398c5f5f2.jpg\" _src=\"http://yanxuan.nosdn.127.net/4f45d2eed6d8cf8328b782b398c5f5f2.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/45524a23f42166f189923c24315290c9.jpg\" _src=\"http://yanxuan.nosdn.127.net/45524a23f42166f189923c24315290c9.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b731c0ca0d46047558e9849ac50baddd.jpg\" _src=\"http://yanxuan.nosdn.127.net/b731c0ca0d46047558e9849ac50baddd.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/4d36424a19086919a8fd191a5d0c4529.jpg\" _src=\"http://yanxuan.nosdn.127.net/4d36424a19086919a8fd191a5d0c4529.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/27fa5705258478aeffb74a208c627080.jpg\" _src=\"http://yanxuan.nosdn.127.net/27fa5705258478aeffb74a208c627080.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/c266533033ae90c8c219cb5c16d3e171.jpg\" _src=\"http://yanxuan.nosdn.127.net/c266533033ae90c8c219cb5c16d3e171.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7d4ffd69c28886087af8364ab92f45b4.jpg\" _src=\"http://yanxuan.nosdn.127.net/7d4ffd69c28886087af8364ab92f45b4.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f3ef4a0a5dec57f1168e1500e9afe136.jpg\" _src=\"http://yanxuan.nosdn.127.net/f3ef4a0a5dec57f1168e1500e9afe136.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/40d5d51ce04bf0beca3be7cf34764a35.jpg\" _src=\"http://yanxuan.nosdn.127.net/40d5d51ce04bf0beca3be7cf34764a35.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/be1ffb7e4ac182c1b08bee197a82ae28.jpg\" _src=\"http://yanxuan.nosdn.127.net/be1ffb7e4ac182c1b08bee197a82ae28.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/e68c856b0d114a9455745a9c690e8aba.jpg\" _src=\"http://yanxuan.nosdn.127.net/e68c856b0d114a9455745a9c690e8aba.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/78c0554808c624e03155f75e04307269.jpg\" _src=\"http://yanxuan.nosdn.127.net/78c0554808c624e03155f75e04307269.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d349f9a9a3816cbba511820fdcd25665.jpg\" _src=\"http://yanxuan.nosdn.127.net/d349f9a9a3816cbba511820fdcd25665.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/0348a2105e66b82213b5cc8c7c5bd7d4.jpg\" _src=\"http://yanxuan.nosdn.127.net/0348a2105e66b82213b5cc8c7c5bd7d4.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/3616f4aef0099b4c4d762e8795c21460.jpg\" _src=\"http://yanxuan.nosdn.127.net/3616f4aef0099b4c4d762e8795c21460.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f0e925e63fff5e6fe3ed63468cc2651f.jpg\" _src=\"http://yanxuan.nosdn.127.net/f0e925e63fff5e6fe3ed63468cc2651f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/0ef2c54f60cf9ce8e004038a8e523f5d.jpg\" _src=\"http://yanxuan.nosdn.127.net/0ef2c54f60cf9ce8e004038a8e523f5d.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/4b04ed27f44f3c38edaa75538e435085.jpg\" _src=\"http://yanxuan.nosdn.127.net/4b04ed27f44f3c38edaa75538e435085.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/97e24de354e915956bf509dc741585bf.jpg\" _src=\"http://yanxuan.nosdn.127.net/97e24de354e915956bf509dc741585bf.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/009b7a1fae0c6c8c76ee0503068109af.jpg\" _src=\"http://yanxuan.nosdn.127.net/009b7a1fae0c6c8c76ee0503068109af.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/572656b345ac59f58ac729ee4cbd5c5f.jpg\" _src=\"http://yanxuan.nosdn.127.net/572656b345ac59f58ac729ee4cbd5c5f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/2e01fdfb5f92a7051ac177445e9b887c.jpg\" _src=\"http://yanxuan.nosdn.127.net/2e01fdfb5f92a7051ac177445e9b887c.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/fcb73fb6b76ae46e23e3eddd7dbc19f3.jpg\" _src=\"http://yanxuan.nosdn.127.net/fcb73fb6b76ae46e23e3eddd7dbc19f3.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/b32d458ee134c7a3c65cb2096fd3e481.jpg\" _src=\"http://yanxuan.nosdn.127.net/b32d458ee134c7a3c65cb2096fd3e481.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/af675e44537b75a77bfb093063d0503f.jpg\" _src=\"http://yanxuan.nosdn.127.net/af675e44537b75a77bfb093063d0503f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/32e53875383d1fe1b293a249052f6675.jpg\" _src=\"http://yanxuan.nosdn.127.net/32e53875383d1fe1b293a249052f6675.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/d03cb0a65d58a1cf06f83f75b75b129b.jpg\" _src=\"http://yanxuan.nosdn.127.net/d03cb0a65d58a1cf06f83f75b75b129b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/6bbf226c990d45e45ed4ea33fc90c813.jpg\" _src=\"http://yanxuan.nosdn.127.net/6bbf226c990d45e45ed4ea33fc90c813.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/a61436a586aeb06f29eca9bdc4319342.jpg\" _src=\"http://yanxuan.nosdn.127.net/a61436a586aeb06f29eca9bdc4319342.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/fb5d02e3e7e952da3e56720dae48a116.jpg\" _src=\"http://yanxuan.nosdn.127.net/fb5d02e3e7e952da3e56720dae48a116.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/7cb9b3c5b0d20710007d08042590769b.jpg\" _src=\"http://yanxuan.nosdn.127.net/7cb9b3c5b0d20710007d08042590769b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/6d40781cd43dcb80981070499d1d9fa7.jpg\" _src=\"http://yanxuan.nosdn.127.net/6d40781cd43dcb80981070499d1d9fa7.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/fcf658f78cf5a4b04c1db0d8050a97d3.jpg\" _src=\"http://yanxuan.nosdn.127.net/fcf658f78cf5a4b04c1db0d8050a97d3.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/f916dda3468cb9b544bd8568070d1cc5.jpg\" _src=\"http://yanxuan.nosdn.127.net/f916dda3468cb9b544bd8568070d1cc5.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/3d313edbfa6f1238cf70d0fbc09bdfb7.jpg\" _src=\"http://yanxuan.nosdn.127.net/3d313edbfa6f1238cf70d0fbc09bdfb7.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/e369ad076f0c125c5ea5a0d814575104.jpg\" _src=\"http://yanxuan.nosdn.127.net/e369ad076f0c125c5ea5a0d814575104.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ed0245153708ff1978c06a28b44e488b.jpg\" _src=\"http://yanxuan.nosdn.127.net/ed0245153708ff1978c06a28b44e488b.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/41e17e8d0e0fc9564f0e19260128799f.jpg\" _src=\"http://yanxuan.nosdn.127.net/41e17e8d0e0fc9564f0e19260128799f.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/ebae051e4ce3e65fb8e0eda1a3e11370.jpg\" _src=\"http://yanxuan.nosdn.127.net/ebae051e4ce3e65fb8e0eda1a3e11370.jpg\" style=\"\"/><\/p><p><img src=\"http://yanxuan.nosdn.127.net/951801db15eb4619e70ce3c79f64bdb5.jpg\" _src=\"http://yanxuan.nosdn.127.net/951801db15eb4619e70ce3c79f64bdb5.jpg\" style=\"\"/><\/p>",
            "picUrl1": "http://yanxuan.nosdn.127.net/4624a11536a74061da3f0eaf1bce17c9.jpg",
            "picUrl2": "http://yanxuan.nosdn.127.net/9100d1de4596d61d45e2b5ba276784fb.jpg",
            "picUrl3": "http://yanxuan.nosdn.127.net/b1a88b4ea3b742fb0329a275f0913dcb.jpg",
            "picUrl4": "http://yanxuan.nosdn.127.net/f2e724c0d4d67ec4d97db764d98b5c90.jpg",
            "seoDesc": ""
        },
        "limitedFlag": 0,
        "listPicUrl": "",
        "name": "20寸 PC膜拉链登机箱",
        "newItemFlag": false,
        "pieceNum": 0,
        "pieceUnitDesc": "件",
        "primaryPicUrl": "http://yanxuan.nosdn.127.net/6e5453a4709cebfec0d9ac8d9d508ef0.png",
        "primarySkuId": 1114089,
        "primarySkuPreSellPrice": 0,
        "primarySkuPreSellStatus": 0,
        "productPlace": "",
        "promTag": "",
        "promotionDesc": "限时购",
        "rank": 1,
        "remarkTargetUrl": "",
        "remarkTitle": "",
        "reportPicList": ["http://yanxuan.nosdn.127.net/fbfcf1ff8aaff6ac33d9edf1e69f02af.jpg", "http://yanxuan.nosdn.127.net/e5c972760b2db476158e6325846c32fb.jpg", "http://yanxuan.nosdn.127.net/43560be2403953c79716ab1445bd8f90.jpg", "http://yanxuan.nosdn.127.net/0526035c08dd367c8a61ac2e41d88e72.jpg", "http://yanxuan.nosdn.127.net/d9e84f3923de8bba62e5e8acafe87d27.jpg"],
        "retailPrice": 228,
        "sellVolume": 40729,
        "seoTitle": "",
        "simpleDesc": "一年保修，30天保退",
        "skuList": [{
            "appExclusiveSkuInfo": null,
            "counterPrice": 208,
            "giftCardFlag": false,
            "id": 1114089,
            "itemSkuSpecValueList": [{
                "id": 1112157,
                "skuId": 1114089,
                "skuSpec": {
                    "id": 1102025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1102025,
                "skuSpecValue": {
                    "id": 1104061,
                    "picUrl": "http://yanxuan.nosdn.127.net/ad32a97cafb9e2bb6e88277a3c8bc59e.png",
                    "skuSpecId": 1102025,
                    "value": "伯爵黑"
                },
                "skuSpecValueId": 1104061
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "预计3月1日开始发货",
            "preSellPrice": 228,
            "preSellStatus": 2,
            "preSellVolume": 366,
            "primarySku": true,
            "purchaseAttribute": 0,
            "retailPrice": 228,
            "sellVolume": 19803,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 208,
            "giftCardFlag": false,
            "id": 1114090,
            "itemSkuSpecValueList": [{
                "id": 1112158,
                "skuId": 1114090,
                "skuSpec": {
                    "id": 1102025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1102025,
                "skuSpecValue": {
                    "id": 1104062,
                    "picUrl": "http://yanxuan.nosdn.127.net/541c41e152ba5ce4772dc0977a48412b.png",
                    "skuSpecId": 1102025,
                    "value": "钢琴白"
                },
                "skuSpecValueId": 1104062
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "预计3月1日开始发货",
            "preSellPrice": 228,
            "preSellStatus": 2,
            "preSellVolume": 764,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 228,
            "sellVolume": 2827,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 208,
            "giftCardFlag": false,
            "id": 1114091,
            "itemSkuSpecValueList": [{
                "id": 1112159,
                "skuId": 1114091,
                "skuSpec": {
                    "id": 1102025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1102025,
                "skuSpecValue": {
                    "id": 1104063,
                    "picUrl": "http://yanxuan.nosdn.127.net/cbe1741ac4ade4e39572e03027329747.png",
                    "skuSpecId": 1102025,
                    "value": "肉桂粉"
                },
                "skuSpecValueId": 1104063
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "预计3月24日开始发货",
            "preSellPrice": 228,
            "preSellStatus": 2,
            "preSellVolume": 749,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 228,
            "sellVolume": 12383,
            "valid": true,
            "virtualFlag": false
        }, {
            "appExclusiveSkuInfo": null,
            "counterPrice": 208,
            "giftCardFlag": false,
            "id": 1115028,
            "itemSkuSpecValueList": [{
                "id": 1113031,
                "skuId": 1115028,
                "skuSpec": {
                    "id": 1102025,
                    "name": "颜色",
                    "skuSpecValueList": [],
                    "type": 1
                },
                "skuSpecId": 1102025,
                "skuSpecValue": {
                    "id": 1105026,
                    "picUrl": "http://yanxuan.nosdn.127.net/a98f506ed67f16e4c3cc08839438291f.png",
                    "skuSpecId": 1102025,
                    "value": "孔灵蓝"
                },
                "skuSpecValueId": 1105026
            }],
            "limitPurchaseCount": 0,
            "limitPurchaseFlag": false,
            "limitedFlag": 0,
            "preSellDesc": "预计3月1日开始发货",
            "preSellPrice": 228,
            "preSellStatus": 2,
            "preSellVolume": 391,
            "primarySku": false,
            "purchaseAttribute": 0,
            "retailPrice": 228,
            "sellVolume": 5716,
            "valid": true,
            "virtualFlag": false
        }],
        "skuMap": {
            "1105026": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 208,
                "giftCardFlag": false,
                "id": 1115028,
                "picUrl": "http://yanxuan.nosdn.127.net/a98f506ed67f16e4c3cc08839438291f.png",
                "itemSkuSpecValueList": [{
                    "id": 1113031,
                    "skuId": 1115028,
                    "skuSpec": {
                        "id": 1102025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1102025,
                    "skuSpecValue": {
                        "id": 1105026,
                        "skuSpecId": 1102025,
                        "value": "孔灵蓝"
                    },
                    "skuSpecValueId": 1105026
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "预计3月1日开始发货",
                "preSellPrice": 228,
                "preSellStatus": 2,
                "preSellVolume": 391,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 228,
                "sellVolume": 5716,
                "valid": true,
                "virtualFlag": false
            },
            "1104063": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 208,
                "giftCardFlag": false,
                "id": 1114091,
                "picUrl": "http://yanxuan.nosdn.127.net/cbe1741ac4ade4e39572e03027329747.png",
                "itemSkuSpecValueList": [{
                    "id": 1112159,
                    "skuId": 1114091,
                    "skuSpec": {
                        "id": 1102025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1102025,
                    "skuSpecValue": {
                        "id": 1104063,
                        "skuSpecId": 1102025,
                        "value": "肉桂粉"
                    },
                    "skuSpecValueId": 1104063
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "预计3月24日开始发货",
                "preSellPrice": 228,
                "preSellStatus": 2,
                "preSellVolume": 749,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 228,
                "sellVolume": 12383,
                "valid": true,
                "virtualFlag": false
            },
            "1104062": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 208,
                "giftCardFlag": false,
                "id": 1114090,
                "picUrl": "http://yanxuan.nosdn.127.net/541c41e152ba5ce4772dc0977a48412b.png",
                "itemSkuSpecValueList": [{
                    "id": 1112158,
                    "skuId": 1114090,
                    "skuSpec": {
                        "id": 1102025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1102025,
                    "skuSpecValue": {
                        "id": 1104062,
                        "skuSpecId": 1102025,
                        "value": "钢琴白"
                    },
                    "skuSpecValueId": 1104062
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "预计3月1日开始发货",
                "preSellPrice": 228,
                "preSellStatus": 2,
                "preSellVolume": 764,
                "primarySku": false,
                "purchaseAttribute": 0,
                "retailPrice": 228,
                "sellVolume": 2827,
                "valid": true,
                "virtualFlag": false
            },
            "1104061": {
                "appExclusiveSkuInfo": null,
                "counterPrice": 208,
                "giftCardFlag": false,
                "id": 1114089,
                "picUrl": "http://yanxuan.nosdn.127.net/ad32a97cafb9e2bb6e88277a3c8bc59e.png",
                "itemSkuSpecValueList": [{
                    "id": 1112157,
                    "skuId": 1114089,
                    "skuSpec": {
                        "id": 1102025,
                        "name": "颜色",
                        "skuSpecValueList": [],
                        "type": 1
                    },
                    "skuSpecId": 1102025,
                    "skuSpecValue": {
                        "id": 1104061,
                        "skuSpecId": 1102025,
                        "value": "伯爵黑"
                    },
                    "skuSpecValueId": 1104061
                }],
                "limitPurchaseCount": 0,
                "limitPurchaseFlag": false,
                "limitedFlag": 0,
                "preSellDesc": "预计3月1日开始发货",
                "preSellPrice": 228,
                "preSellStatus": 2,
                "preSellVolume": 366,
                "primarySku": true,
                "purchaseAttribute": 0,
                "retailPrice": 228,
                "sellVolume": 19803,
                "valid": true,
                "virtualFlag": false
            }
        },
        "skuSpecList": [{
            "id": 1102025,
            "name": "颜色",
            "skuSpecValueList": [{
                "id": 1104061,
                "picUrl": "http://yanxuan.nosdn.127.net/ad32a97cafb9e2bb6e88277a3c8bc59e.png",
                "skuSpecId": 1102025,
                "value": "伯爵黑"
            }, {
                "id": 1104062,
                "picUrl": "http://yanxuan.nosdn.127.net/541c41e152ba5ce4772dc0977a48412b.png",
                "skuSpecId": 1102025,
                "value": "钢琴白"
            }, {
                "id": 1104063,
                "picUrl": "http://yanxuan.nosdn.127.net/cbe1741ac4ade4e39572e03027329747.png",
                "skuSpecId": 1102025,
                "value": "肉桂粉"
            }, {
                "id": 1105026,
                "picUrl": "http://yanxuan.nosdn.127.net/a98f506ed67f16e4c3cc08839438291f.png",
                "skuSpecId": 1102025,
                "value": "孔灵蓝"
            }],
            "type": 1
        }],
        "soldOut": false,
        "status": 2,
        "tagList": [{
            "id": 1001037,
            "tagName": "新秀丽制造商"
        }],
        "tryOutEventReport": null,
        "underShelf": false,
        "unitPrice": 0
    }
}