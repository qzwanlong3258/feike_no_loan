(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-writeOrder-writeOrder"],{"0444":function(e,t,n){"use strict";n.r(t);var r=n("cfd8"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"0cbf":function(e,t,n){var r=n("71a8");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("663c745c",r,!0,{sourceMap:!1,shadowMode:!1})},"1ab3":function(e,t,n){"use strict";n.r(t);var r=n("b174"),i=n("486a");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("a95c");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"68723ddc",null,!1,r["a"],a);t["default"]=c.exports},2001:function(e,t,n){"use strict";var r=n("0cbf"),i=n.n(r);i.a},"26bd":function(e,t,n){"use strict";var r=n("4ea4");n("8e6e"),n("456d");var i=r(n("bd86"));n("96cf");var o=r(n("3b8d"));n("ac6a"),n("5df3");var a=n("0859");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=2e3;function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.phone,n=void 0===t?"":t;uni.makePhoneCall({phoneNumber:n,success:function(){},fail:function(){uni.showToast({icon:"none",title:"拨打失败",duration:d})}})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.urls,n=void 0===t?[]:t,r=e.header,i=void 0===r?{}:r;function o(e){var t=null,n=new Promise((function(n,r){t=uni.downloadFile({url:e,header:i,success:function(e){var t=e.statusCode;if(200===t){var i=e.tempFilePath;n(i)}else{var o=e.errMsg,a="下载失败：".concat(t,"-").concat(o);r(a)}},fail:function(e){var t="接口调用失败：".concat(e);r(t)}})}));return n.onProgressUpdate=function(e){t.onProgressUpdate((function(t){e(t)}))},n.abort=function(){t.abort()},n}var a=n.length;return 1===a?new Promise((function(e,t){o(n[0]).then((function(t){return thenHandle(t,e)})).catch((function(e){return catchHandle(e,t)}))})):a>1?new Promise((function(e,t){Promise.all(n.map((function(e){return o(e)}))).then((function(e){return thenHandle(e,resolve)})).catch((function(e){return catchHandle(e,t)}))})):void 0}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,n=void 0===t?a.uploadImageUrl:t,r=e.fn,i=void 0===r?function(){}:r,o=e.needAlbum,s=void 0===o||o,c=e.needCamera,d=void 0===c||c,u=[];s&&u.push("album"),d&&u.push("camera"),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:u,success:function(e){var t=e.tempFilePaths;uni.showLoading(),uni.uploadFile({header:{"Content-Type":"multipart/form-data"},url:n,filePath:t[0],name:"file",success:function(e){uni.hideLoading(),i(e)}})}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,n=void 0===t?a.uploadImageUrl:t,r=e.fn,i=void 0===r?i=function(){}:r,s=e.count,c=void 0===s?9:s,d=e.needAlbum,u=void 0===d||d,l=e.needCamera,f=void 0===l||l,v=[];u&&v.push("album"),f&&v.push("camera"),uni.chooseImage({count:c,sizeType:["original","compressed"],sourceType:v,success:function(e){var t=e.tempFilePaths;t.forEach(function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.uploadFile({url:n,filePath:t,name:"file",header:{"Content-Type":"multipart/form-data"},success:function(e){i(e)},fail:function(e){uni.showModal({content:e.msg,showCancel:!1})}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"温馨提示":t,r=e.content,i=void 0===r?"该数据删除后无法找回，请问是否确认删除？":r,o=e.confirmText,a=void 0===o?"确认":o,s=e.showCancel,c=void 0===s||s;e.successFunction,e.failFunction;return new Promise((function(e,t){setTimeout((function(){wx.showModal({title:n,content:i,confirmText:a,showCancel:c,cancelColor:"#888888",confirmColor:"#000",success:function(t){e(t)},fail:function(e){t(res)}})}),100)}))}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"紧急加载中":t,r=e.mask,i=void 0===r||r,o=e.icon,a=void 0===o?"loading":o,s=e.duration,c=void 0===s?1e3:s;return new Promise((function(e,t){setTimeout((function(){wx.showToast({title:n,mask:i,icon:a,duration:c,success:function(t){e(t)},fail:function(e){t(e)}})}),100)}))}function b(e){return new Promise((function(t,n){uni.requestPayment(c({},e,{success:function(e){h({title:"购买成功",icon:"success"}).then((function(e){t({type:"success",msg:e})}))},fail:function(e){"requestPayment:fail cancel"!==e.errMsg?p({title:"系统错误",content:e.errMsg,showCancel:!1}).then((function(e){n({type:"error",msg:e})})):p({content:"用户取消购买支付",showCancel:!1}).then((function(e){t({type:"cancel",msg:e})}))}}))}))}e.exports={downloadFile:l,singleImage:f,muchImages:v,makePhoneCall:u,toast:h,model:p,wxpay:b}},3916:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadIntegral=o,t.loadIntegralDeyail=a;var r=n("d28b"),i=n("52cd");function o(e){return(0,r.request)({method:"GET",url:i.LOAD_INTEGRAL,data:e,showLoading:!1,hideLoading:!1})}function a(e){return(0,r.request)({method:"GET",url:i.GET_SCORE_DETAIL,data:e})}},"3ab1":function(e,t,n){"use strict";n.r(t);var r=n("7837"),i=n("0444");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("9cae");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"007dea1b",null,!1,r["a"],a);t["default"]=c.exports},"486a":function(e,t,n){"use strict";n.r(t);var r=n("dea2"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"52c9":function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"clothe-box"},[n("v-uni-view",{staticClass:"box-left"},[n("v-uni-image",{attrs:{src:e.order.url,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"box-right"},[n("v-uni-view",{staticClass:"title-font one-line-elipsis"},[e._v(e._s(e.order.goodsName))]),n("v-uni-view",{staticClass:"tip-font"},[e._v("原价: ¥"+e._s(e.order.goodsOriginalPrice))]),n("v-uni-view",{staticClass:"tip-font"},[e._v("单价: "+e._s(e.order.goodsPrice)+"积分")]),n("v-uni-view",{staticClass:"tip-font"},[e._v("数量: 1")])],1)],1)},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}))},"71a8":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.clothe-box[data-v-7c031562]{width:94%;height:%?330?%;margin:3% %?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;background:#fff}.clothe-box .box-left[data-v-7c031562]{width:26%;height:%?238?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:%?30?%}.clothe-box .box-left uni-image[data-v-7c031562]{width:100%;height:100%;border-radius:%?10?%}.clothe-box .box-right[data-v-7c031562]{width:58%}.clothe-box .box-right .clothe-size[data-v-7c031562]{margin-top:%?24?%}.clothe-box .box-right .tip-font[data-v-7c031562]{line-height:%?52?%}.clothe-box .box-right .count-box[data-v-7c031562]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;color:#8f8fa7;margin-top:%?20?%}.clothe-box .box-right .content-font[data-v-7c031562]{color:#8f8fa7}.clothe-box .box-right .right-bottom[data-v-7c031562]{width:%?132?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.clothe-box .box-right .right-bottom i[data-v-7c031562]{font-size:%?36?%;color:#df365d}.clothe-box .box-right .right-bottom uni-text[data-v-7c031562]{font-size:%?32?%;line-height:%?45?%}',""]),e.exports=t},"74b6":function(e,t,n){var r=n("b14a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("c7fe3c2c",r,!0,{sourceMap:!1,shadowMode:!1})},7837:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-scroll-view",{staticClass:"container",attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"clothe-infor"},[n("order-infor",{attrs:{order:e.orderInformation},on:{changeAllMoney:function(t){arguments[0]=t=e.$handleEvent(t),e.changeAllMoney.apply(void 0,arguments)}}}),n("i",{staticClass:"iconfont iconcha",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOrderListPage.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"order-infor"},[n("v-uni-view",{staticClass:"address-infor"},[n("v-uni-view",{staticClass:"adress-tip title-font"},[e._v("收货地址")]),n("yld-address",{attrs:{address:e.shippingAddress.infor}})],1),n("v-uni-view",{staticClass:"delivery-infor"},[n("v-uni-view",{staticClass:"title-font"},[e._v("快递")]),n("v-uni-view",{staticClass:"infor-content"},[n("i",{staticClass:"iconfont iconqueding"}),n("v-uni-view",{staticClass:"tip-font delivery-name"},[e._v("顺丰")]),n("v-uni-view",{staticClass:"tip-font"},[e._v("￥0.00")])],1)],1),n("v-uni-view",{staticClass:"pay-infor"},[n("v-uni-view",{staticClass:"title-font"},[e._v("支付方式")]),n("v-uni-view",{staticClass:"infor-content"},[n("v-uni-view",{staticClass:"tip-font"},[e._v("积分支付")])],1)],1),n("v-uni-view",{staticClass:"money-infor"},[n("v-uni-view",{staticClass:"tip-font infor-con"},[n("v-uni-view",[e._v("商品总金额")]),n("v-uni-view",[e._v(e._s(e.allMoney)+"积分")])],1),n("v-uni-view",{staticClass:"tip-font infor-con"},[n("v-uni-view",[e._v("优惠券抵扣")]),n("v-uni-view",[e._v("￥ 0.00")])],1),n("v-uni-view",{staticClass:"tip-font infor-con"},[n("v-uni-view",[e._v("运费")]),n("v-uni-view",[e._v("￥ 0.00")])],1),n("v-uni-view",{staticClass:"title-font infor-con"},[n("v-uni-view",[e._v("实付款")]),n("v-uni-view",[e._v(e._s(e.allMoney)+"积分")])],1)],1)],1),n("v-uni-button",{staticClass:"start-todo primary-cus-big-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.startTodo.apply(void 0,arguments)}}},[e._v("提交订单")])],1)},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}))},"7c0c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createOrder=o,t.payOrder=a,t.getOrderDetail=s,t.deleteOrder=c,t.orderDelivery=d,t.getOrderList=u,t.updateOrder=l;var r=n("d28b"),i=n("52cd");function o(e){return(0,r.request)({method:"POST",url:i.CREATE_ORDER,data:e})}function a(e){return(0,r.request)({method:"POST",url:i.PAY_ORDER,data:e})}function s(e){return(0,r.request)({method:"GET",url:i.GET_ORDER_DETAIL,data:e})}function c(e){return(0,r.request)({method:"POST",url:i.DELETE_ORDER,data:e})}function d(e){return(0,r.request)({method:"POST",url:i.ORDER_DELIVERY,data:{orderid:e}})}function u(e){return(0,r.request)({method:"GET",url:i.GET_ORDER_LIST,data:e})}function l(e){return(0,r.request)({method:"POST",url:i.UPDATE_ORDER,data:e})}},"82eb":function(e,t,n){"use strict";n.r(t);var r=n("c838"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"9cae":function(e,t,n){"use strict";var r=n("74b6"),i=n.n(r);i.a},a95c:function(e,t,n){"use strict";var r=n("fcdb"),i=n.n(r);i.a},b14a:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.iconcha[data-v-007dea1b]{position:absolute;right:%?64?%;top:%?64?%}.order-infor[data-v-007dea1b]{width:100%;height:calc(100% - %?300?%);border-top:%?4?% solid #dcdcdc;border-top-left-radius:%?150?%;border-top-right-radius:%?150?%;box-shadow:0 0 %?1?% %?1?% rgba(0,0,0,.1);background:#fff}.order-infor .address-infor[data-v-007dea1b]{width:82%;margin-left:9%;margin-top:%?80?%;padding-bottom:%?46?%;border-bottom:%?1?% solid #dcdcdc}.order-infor .delivery-infor[data-v-007dea1b]{width:82%;margin-left:9%;margin-top:%?46?%;padding-bottom:%?46?%;border-bottom:%?1?% solid #dcdcdc}.order-infor .delivery-infor .infor-content[data-v-007dea1b]{margin-top:%?23?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-infor .delivery-infor .infor-content .delivery-name[data-v-007dea1b]{margin-right:%?380?%}.order-infor .delivery-infor .infor-content .tip-font[data-v-007dea1b]{color:#333}.order-infor .pay-infor[data-v-007dea1b]{width:82%;margin-left:9%;margin-top:%?46?%;padding-bottom:%?46?%;border-bottom:%?1?% solid #dcdcdc;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order-infor .pay-infor .tip-font[data-v-007dea1b]{color:#333;margin-top:%?22?%}.order-infor .money-infor[data-v-007dea1b]{width:82%;margin-left:9%;margin-top:%?46?%;padding-bottom:%?46?%;border-bottom:%?1?% solid #dcdcdc}.order-infor .money-infor .infor-con[data-v-007dea1b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order-infor .money-infor .tip-font[data-v-007dea1b]{color:#333;margin-top:%?22?%}.order-infor .money-infor .title-font[data-v-007dea1b]{margin-top:%?53?%}',""]),e.exports=t},b174:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"order-address",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAdress.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"address-icon"},[n("i",{staticClass:"iconfont iconweizhi-tianchong"})]),e.address.addres?n("v-uni-view",{staticClass:"user-info"},[n("v-uni-view",{staticClass:"base-info"},[e._v(e._s(e.address.name)),n("v-uni-text",[e._v(e._s(e.address.phone))])],1),n("v-uni-view",{staticClass:"user-address tip-font"},[e._v(e._s(e.address.addres))])],1):n("v-uni-view",{staticClass:"user-info"},[n("v-uni-view",{staticClass:"base-info"},[e._v("还没有地址，前去添加")])],1),n("v-uni-view",{staticClass:"right-icon"},[n("i",{staticClass:"iconfont iconright"})])],1)},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}))},b7b9:function(e,t,n){"use strict";n.r(t);var r=n("52c9"),i=n("82eb");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("2001");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"7c031562",null,!1,r["a"],a);t["default"]=c.exports},c838:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{order:{type:Object}},data:function(){return{orderCounts:1}},methods:{reduceorderCounts:function(){this.orderCounts>1&&(this.orderCounts-=1,this.$emit("changeAllMoney",this.orderCounts))},addorderCounts:function(){this.orderCounts<=this.order.orderCount&&(this.orderCounts+=1,this.$emit("changeAllMoney",this.orderCounts))}}};t.default=r},cfd8:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=r(n("3b8d"));n("c5f6");var o=r(n("b7b9")),a=r(n("1ab3")),s=n("e99c"),c=n("26bd"),d=n("e04c"),u=n("7c0c"),l=n("3916"),f=n("602a"),v=n("ca20"),p={data:function(){return{orderInformation:{},shippingAddress:{infor:{},listQuery:{page:1,size:5}},allMoney:0,submiting:!1,integral:0,userInfo:{}}},onLoad:function(){var e=this;this.orderInformation=getApp().globalData.goodsInfor,this.allMoney=this.orderInformation.goodsPrice,(0,d.loadAddress)(this.shippingAddress.listQuery).then((function(t){e.shippingAddress.infor=t.list[0]})),this.$eventBus.$on("addressChange",(function(t){e.shippingAddress.infor=t})),this.loadIntegral(),this.userInfo=(0,v.getStorage)("userInfo")},components:{OrderInfor:o.default,YldAddress:a.default},methods:{loadIntegral:function(){var e=this;(0,l.loadIntegral)().then((function(t){e.integral=Number(t.integral)}))},changeAllMoney:function(e){this.allMoney=Number(e)*Number(this.orderInformation.goodsPrice)},checkAddress:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.shippingAddress.infor,n=!0,t.addres&&t.name&&t.phone){e.next=6;break}return this.isSuccess=!1,e.next=6,(0,c.model)({content:"请添加收货地址"});case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createOrder:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.createOrder)({addressId:this.shippingAddress.infor.id,gid:this.orderInformation.id});case 2:if(t=e.sent,e.t0=1!==Number(t.count),!e.t0){e.next=8;break}return t=null,e.next=8,(0,c.model)({content:"创建订单失败,请重新选择商品",showCancel:!1});case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),payOrder:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.payOrder)({uuid:t,money:this.allMoney});case 2:if(n=e.sent,console.log(n),e.t0=1!==Number(n.count),!e.t0){e.next=9;break}return n=null,e.next=9,(0,c.model)({content:"支付失败,请重新选择商品",showCancel:!1});case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),startTodo:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Number(this.integral)-Number(this.allMoney),console.log(t),!(t<0)){e.next=6;break}return e.next=5,(0,c.model)({content:"你的积分不足，无法支付",showCancel:!1});case 5:this.submiting=!0;case 6:if(!this.submiting){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,(0,f.addScoreRecord)({userid:this.userInfo.id,money:"-"+this.allMoney,msg:"兑换商品".concat("-"+this.allMoney,"积分")});case 10:return this.submiting=!0,e.next=13,this.checkAddress();case 13:if(e.t1=e.sent,!e.t1){e.next=18;break}return e.next=17,this.createOrder();case 17:e.t1=n=e.sent;case 18:if(e.t0=e.t1,!e.t0){e.next=23;break}return e.next=22,this.payOrder(n.uuid);case 22:e.t0=e.sent;case 23:if(e.t0){e.next=25;break}return e.abrupt("return",this.submiting=!1);case 25:uni.navigateTo({url:"".concat(s.ORDER_DETAIL,"?id=").concat(n.uuid)}),this.submiting=!1;case 27:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=p},dea2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("e99c"),i={props:{address:{type:Object}},methods:{chooseAdress:function(){uni.navigateTo({url:"".concat(r.ADDRESS_INDEX,"?operating=selectAddress")})}}};t.default=i},e04c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadAddress=o,t.addReceiveAddress=a,t.updateReceiveAddress=s,t.deleteReceiveAddress=c,n("c5f6");var r=n("d28b"),i=n("52cd");function o(e){return(0,r.request)({method:"GET",url:i.LOAD_ADDRESS,data:e}).then((function(e){return e.list.length&&(e.list[0].default=!0),e}))}function a(e){return(0,r.request)({method:"POST",url:i.ADD_ADDRESS,data:e})}function s(e){return e.default&&Number(e.default),(0,r.request)({method:"POST",url:i.UPDATE_ADDRESS,data:e})}function c(e){return(0,r.request)({method:"POST",url:i.DELETE_ADDRESS,data:e})}},fbce:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.order-address[data-v-68723ddc]{width:100%;height:%?150?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?22?%;border:%?1?% solid #dcdcdc;border-radius:%?10?%}.order-address .address-icon i[data-v-68723ddc]{font-size:%?55?%;color:#666}.order-address .user-info[data-v-68723ddc]{line-height:%?42?%;width:%?390?%}.order-address .user-info .base-info[data-v-68723ddc]{font-size:%?30?%}.order-address .user-info .base-info uni-text[data-v-68723ddc]{margin-left:%?22?%}.order-address .right-icon i[data-v-68723ddc]{font-size:%?53?%;color:#666;position:relative}.user-address[data-v-68723ddc]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',""]),e.exports=t},fcdb:function(e,t,n){var r=n("fbce");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("4af8363a",r,!0,{sourceMap:!1,shadowMode:!1})}}]);