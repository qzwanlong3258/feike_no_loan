(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-openMember-index"],{"01bd":function(t,e,n){"use strict";var o=n("0826"),i=n.n(o);i.a},"0826":function(t,e,n){var o=n("ed40");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("0314fff0",o,!0,{sourceMap:!1,shadowMode:!1})},"26bd":function(t,e,n){"use strict";var o=n("4ea4");n("8e6e"),n("456d");var i=o(n("bd86"));n("96cf");var a=o(n("3b8d"));n("ac6a"),n("5df3");var c=n("0859");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=2e3;function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.phone,n=void 0===e?"":e;uni.makePhoneCall({phoneNumber:n,success:function(){},fail:function(){uni.showToast({icon:"none",title:"拨打失败",duration:d})}})}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.urls,n=void 0===e?[]:e,o=t.header,i=void 0===o?{}:o;function a(t){var e=null,n=new Promise((function(n,o){e=uni.downloadFile({url:t,header:i,success:function(t){var e=t.statusCode;if(200===e){var i=t.tempFilePath;n(i)}else{var a=t.errMsg,c="下载失败：".concat(e,"-").concat(a);o(c)}},fail:function(t){var e="接口调用失败：".concat(t);o(e)}})}));return n.onProgressUpdate=function(t){e.onProgressUpdate((function(e){t(e)}))},n.abort=function(){e.abort()},n}var c=n.length;return 1===c?new Promise((function(t,e){a(n[0]).then((function(e){return thenHandle(e,t)})).catch((function(t){return catchHandle(t,e)}))})):c>1?new Promise((function(t,e){Promise.all(n.map((function(t){return a(t)}))).then((function(t){return thenHandle(t,resolve)})).catch((function(t){return catchHandle(t,e)}))})):void 0}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url,n=void 0===e?c.uploadImageUrl:e,o=t.fn,i=void 0===o?function(){}:o,a=t.needAlbum,r=void 0===a||a,s=t.needCamera,d=void 0===s||s,l=[];r&&l.push("album"),d&&l.push("camera"),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:l,success:function(t){var e=t.tempFilePaths;uni.showLoading(),uni.uploadFile({header:{"Content-Type":"multipart/form-data"},url:n,filePath:e[0],name:"file",success:function(t){uni.hideLoading(),i(t)}})}})}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url,n=void 0===e?c.uploadImageUrl:e,o=t.fn,i=void 0===o?i=function(){}:o,r=t.count,s=void 0===r?9:r,d=t.needAlbum,l=void 0===d||d,p=t.needCamera,u=void 0===p||p,g=[];l&&g.push("album"),u&&g.push("camera"),uni.chooseImage({count:s,sizeType:["original","compressed"],sourceType:g,success:function(t){var e=t.tempFilePaths;e.forEach(function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.uploadFile({url:n,filePath:e,name:"file",header:{"Content-Type":"multipart/form-data"},success:function(t){i(t)},fail:function(t){uni.showModal({content:t.msg,showCancel:!1})}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,n=void 0===e?"温馨提示":e,o=t.content,i=void 0===o?"该数据删除后无法找回，请问是否确认删除？":o,a=t.confirmText,c=void 0===a?"确认":a,r=t.showCancel,s=void 0===r||r;t.successFunction,t.failFunction;return new Promise((function(t,e){setTimeout((function(){wx.showModal({title:n,content:i,confirmText:c,showCancel:s,cancelColor:"#888888",confirmColor:"#000",success:function(e){t(e)},fail:function(t){e(res)}})}),100)}))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,n=void 0===e?"紧急加载中":e,o=t.mask,i=void 0===o||o,a=t.icon,c=void 0===a?"loading":a,r=t.duration,s=void 0===r?1e3:r;return new Promise((function(t,e){setTimeout((function(){wx.showToast({title:n,mask:i,icon:c,duration:s,success:function(e){t(e)},fail:function(t){e(t)}})}),100)}))}function E(t){return new Promise((function(e,n){uni.requestPayment(s({},t,{success:function(t){f({title:"购买成功",icon:"success"}).then((function(t){e({type:"success",msg:t})}))},fail:function(t){"requestPayment:fail cancel"!==t.errMsg?h({title:"系统错误",content:t.errMsg,showCancel:!1}).then((function(t){n({type:"error",msg:t})})):h({content:"用户取消购买支付",showCancel:!1}).then((function(t){e({type:"cancel",msg:t})}))}}))}))}t.exports={downloadFile:p,singleImage:u,muchImages:g,makePhoneCall:l,toast:f,model:h,wxpay:E}},"55a1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loadHomeCarousel=a,e.loadHomeNews=c;var o=n("d28b"),i=n("52cd");function a(t){return(0,o.request)({method:"GET",url:i.LOAD_HOME_CAROUSEL,data:t})}function c(t){return(0,o.request)({method:"GET",url:i.LOAD_HOME_NEWS,data:t})}},5929:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"recomCenter"},[n("v-uni-view",{staticClass:"recomCenter-nav ",staticStyle:{position:"relative"}},["黄金会员"==t.userInfo.level?n("v-uni-image",{staticStyle:{position:"absolute",right:"0",top:"0",width:"250rpx"},attrs:{src:t.img[8],mode:"widthFix"}}):t._e(),n("v-uni-view",{staticStyle:{position:"absolute",width:"100%",height:"100%"}},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"recomCenter-nav-top"},[n("v-uni-image",{staticClass:"recomCenter-nav-top-img",attrs:{src:t.userInfo.avatarUrl,mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticStyle:{"text-align":"center",color:"#000000","font-size":"20rpx",margin:"10rpx"}},[t._v(t._s(t.userInfo.nickName?t.userInfo.nickName:t.WELCOME))]),n("v-uni-view",{staticStyle:{"text-align":"center",color:"#605800","font-size":"18rpx",margin:"10rpx"}},[t._v(t._s(t.userInfo.level))]),n("v-uni-view",{staticStyle:{"text-align":"center",color:"#000000","font-size":"20rpx",margin:"20rpx 200rpx 0 200rpx","border-left":"2rpx solid #000000","border-right":"2rpx solid #000000"}},[t._v("10249人")]),n("v-uni-view",{staticStyle:{"text-align":"center",color:"#000000","font-size":"20rpx",margin:"0 200rpx","border-left":"2rpx solid #000000","border-right":"2rpx solid #000000"}},[t._v("加入黄金会员")])],1)],1),n("v-uni-view",{staticClass:"schedule"},[n("v-uni-view",{staticStyle:{flex:"1",color:"#333333","font-size":"26rpx","text-align":"center","font-weight":"Regular"}},[t._v("选择开通类型")]),n("v-uni-view",{staticStyle:{flex:"0.7"}}),n("v-uni-view",{staticStyle:{flex:"1.3",position:"relative","font-size":"20rpx",color:"#666666","text-align":"center","margin-right":"20rpx"}},[t._v("黄金会员一经开通，无法退订")])],1),n("v-uni-view",{staticClass:"seclect"},[n("v-uni-view",{staticStyle:{flex:"1",padding:"10rpx 0"}},[n("v-uni-view",{staticStyle:{height:"40rpx","line-height":"40rpx","text-align":"center",color:"#333333","font-size":"24rpx"}},[t._v("一年黄金会员")]),n("v-uni-view",{staticStyle:{height:"30rpx","line-height":"30rpx","text-align":"center","font-size":"18rpx",color:"#666666"}},[t._v("赠送100积分")])],1),n("v-uni-view",{staticStyle:{flex:"1"}}),n("v-uni-view",{staticStyle:{flex:"1","text-align":"right","line-height":"80rpx","padding-right":"20rpx"}},[n("v-uni-label",{staticClass:"radio",staticStyle:{"font-size":"25rpx"}},[n("v-uni-text",{staticStyle:{color:"#AD0505","font-size":"24rpx","margin-right":"10rpx","vertical-align":"middle"}},[t._v("￥198")]),n("v-uni-radio",{staticStyle:{"vertical-align":"middle"},attrs:{value:"r1",checked:t.agreeM},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreeClick()}}})],1)],1)],1),n("v-uni-view",{staticStyle:{color:"#333333","font-size":"26rpx","text-align":"left",height:"90rpx","line-height":"90rpx","margin-left":"20rpx","margin-bottom":"20rpx"}},[t._v("黄金会员的八大权益")]),n("v-uni-view",{staticClass:"box"},t._l(t.datalist,(function(e,o){return n("v-uni-view",{key:o,staticClass:"box_item"},[n("v-uni-image",{attrs:{src:e.img,mode:"aspectFit"}}),n("v-uni-view",{staticStyle:{color:"#333333","font-size":"18rpx","text-align":"center"}},[t._v(t._s(e.nametop))]),n("v-uni-view",{staticStyle:{color:"#333333","font-size":"18rpx","text-align":"center"}},[t._v(t._s(e.namebottom))])],1)})),1),n("v-uni-view",{staticClass:"ft",staticStyle:{position:"fixed",height:"130rpx",width:"100%",left:"0",bottom:"20px","z-index":"800",background:"#FFFFFF"}},[n("v-uni-view",{staticStyle:{"text-align":"center","padding-bottom":"10rpx",height:"20rpx"}},[n("v-uni-label",{staticClass:"radio",staticStyle:{"font-size":"25rpx"}},[n("v-uni-radio",{attrs:{value:"r1",checked:t.agree},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agre.apply(void 0,arguments)}}}),t._v("你已完全阅读并确认"),n("v-uni-label",{staticClass:"noticeBook",staticStyle:{color:"#333333"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[t._v("《会员协议》")]),t._v("的内容")],1)],1),n("v-uni-view",{staticClass:"apptMeasureHome_ft"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v("立即支付")])],1)],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"66ac":function(t,e,n){var o=n("e514");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("41dbef49",o,!0,{sourceMap:!1,shadowMode:!1})},"6a94":function(t,e,n){"use strict";var o=n("66ac"),i=n.n(o);i.a},"9bf8":function(t,e,n){"use strict";var o=n("dbce"),i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7514"),n("96cf");var a=i(n("3b8d"));n("3b2b"),n("a481");var c,r=n("d1e4"),s=n("ca20"),d=n("e99c"),l=n("dc89"),p=o(n("55a1")),u=n("602a"),g=n("26bd"),h={data:function(){return{userInfo:{avatarUrl:"https://s2.ax1x.com/2019/10/08/ufSasU.jpg",nickName:"李三",phone:"广东 深圳"},agreeM:!1,img:[r.MEMBER_ONE,r.MEMBER_TWO,r.MEMBER_THREE,r.MEMBER_FOUR,r.MEMBER_FIVE,r.MEMBER_SIX,r.MEMBER_SEVEN,r.MEMBER_EIGHT,r.VIP],datalist:[{img:r.MEMBER_ONE,nametop:"新房免费",namebottom:"除甲醛"},{img:r.MEMBER_TWO,nametop:"新房",namebottom:"开荒服务"},{img:r.MEMBER_THREE,nametop:"赠送全屋定制",namebottom:"方案效果图"},{img:r.MEMBER_FOUR,nametop:" 赠送装修分期",namebottom:"减息卡一张"},{img:r.MEMBER_FIVE,nametop:" 指定银行按揭",namebottom:"利率优惠"},{img:r.MEMBER_SIX,nametop:"赠送",namebottom:"100积分"},{img:r.MEMBER_SEVEN,nametop:"先装修后付款",namebottom:"体验卡一张"},{img:r.MEMBER_EIGHT,nametop:"赠送全年金融",namebottom:"咨询服务"}],agree:!1,member:"",openId:""}},methods:{agreeClick:function(){c.agreeM=!this.agreeM},agre:function(){c.agree=!this.agree},open:function(){var t="/",e=this.member.replace(new RegExp(t,"g"),"!"),n=e.replace(":","*");console.log(n);var o=n.substring(n.lastIndexOf(".")+1),i="jpg"===o,a="png"===o,c="jpeg"===o;i||a||c?uni.navigateTo({url:"".concat(BANK_DETAIL,"?id=").concat(n)}):uni.navigateTo({url:"".concat(d.TO_WEB,"?id=").concat(n)})},pay:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,n,o,i,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.agreeM||uni.showToast({title:"请选择金额",icon:"none",duration:2e3}),this.agree||uni.showToast({title:"请阅读会员协议",icon:"none",duration:2e3}),e={openid:this.openId,price:"198"},t.next=5,(0,l.postPay)(e);case 5:return n=t.sent,console.log(n),n.paySign=n.sign,t.next=10,(0,g.wxpay)(n);case 10:if(o=t.sent,"success"!=o.type){t.next=39;break}return t.next=14,(0,u.getApplyId)();case 14:if(i=t.sent.applyId,!i){t.next=20;break}return t.next=18,(0,u.addScore)({id:i,integral:"100"});case 18:return t.next=20,(0,u.addScoreRecord)({userid:i,money:"100",msg:"邀请会员赠送100积分"});case 20:return t.next=22,(0,u.addScore)({id:this.userInfo.id,integral:"100"});case 22:return t.next=24,(0,u.addScoreRecord)({userid:this.userInfo.id,money:"100",msg:"注册会员赠送100积分"});case 24:if("黄金会员"!=this.userInfo.level){t.next=30;break}return a={id:this.userInfo.cardId,number:"365"},t.next=28,(0,u.aginMember)(a);case 28:t.next=38;break;case 30:if(!this.userInfo.state){t.next=36;break}return c={id:this.userInfo.cardId,number:"365"},t.next=34,(0,u.oldMember)(c);case 34:t.next=38;break;case 36:return t.next=38,(0,u.newMember)({number:"365"});case 38:uni.navigateBack({delta:1});case 39:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c=this,c.userInfo=(0,s.getStorage)("userInfo"),c.openId=(0,s.getStorage)("openId"),p.loadHomeCarousel({type:4}).then((function(t){e.member=t.list.find((function(t){return"会员协议"==t.url})).img}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()};e.default=h},"9ea2":function(t,e,n){"use strict";n.r(e);var o=n("9bf8"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c42a:function(t,e,n){"use strict";n.r(e);var o=n("5929"),i=n("9ea2");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("01bd"),n("6a94");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"6e38a49c",null,!1,o["a"],c);e["default"]=s.exports},d1e4:function(t,e,n){"use strict";var o="https://www.feiaizn.com/feiai";t.exports={COMPANY_LOGO:"".concat(o,"/companyLogo.png"),TOUXIANG_LOGO:"".concat(o,"/touxianglogo.png"),HOME_DEMO:"".concat(o,"/demo.png"),NULL_DATA:"".concat(o,"/nullData.png"),HOME_HEADER:"".concat(o,"/todoChild/home/position.png"),ME_1:"".concat(o,"/tabbar/bitmap.png"),ME_2:"".concat(o,"/tabbar/bitmap1.png"),ME_3:"".concat(o,"/tabbar/bitmap2.png"),ME_4:"".concat(o,"/tabbar/分享@2x.png"),ME_5:"".concat(o,"/tabbar/积分商城@2x.png"),ME_6:"".concat(o,"/tabbar/分销@2x.png"),ME_7:"".concat(o,"/tabbar/分享@2x.png"),ME_8:"".concat(o,"/tabbar/地址@2x.png"),CHECK_IN:"".concat(o,"/tabbar/签到.png"),CROSS:"".concat(o,"/tabbar/叉号.png"),RIGHT:"".concat(o,"/tabbar/right.png"),PRE_PAYMENT:"".concat(o,"/tabbar/待付款@2x.png"),TO_BE_DELIVERED:"".concat(o,"/tabbar/待发货@2x.png"),TO_BE_RECEIVED:"".concat(o,"/tabbar/待收货@2x.png"),EVALUATION:"".concat(o,"/tabbar/评价@2x.png"),AFTER_SALE:"".concat(o,"/tabbar/售后@2x.png"),MEMBER:"".concat(o,"/todoChild/distribution/位图@2x.png"),DESIGNER:"https://www.feiaizn.com/images/20200514152221_qianbi.png",CLIENT:"".concat(o,"/todoChild/distribution/位图@2x(2).png"),POSTER:"".concat(o,"/todoChild/海报@2x.png"),GOODS:"".concat(o,"/todoChild/商品@2x.png"),INVITE_MEMBER:"".concat(o,"/todoChild/发送纸飞机@2x.png"),INVITE_DESIGNER:"".concat(o,"/todoChild/邀请@2x(1).png"),INVITE_CLIENT:"".concat(o,"/todoChild/邀请@2x.png"),DISTRIBUTION_MENU_HEOM:"".concat(o,"/todoChild/distribution/system-loadingc@2x.png"),DIR_TITLE_ONE:"".concat(o,"/todoChild/distribution/业绩@2x.png"),DIR_TITLE_TWO:"".concat(o,"/todoChild/distribution/工具@2x.png"),DIR_NAV_ONE:"".concat(o,"/todoChild/distribution/海报.png"),DIR_NAV_TWO:"".concat(o,"/todoChild/distribution/商品.png"),DIR_NAV_THREE:"".concat(o,"/todoChild/distribution/会员.png"),DIR_NAV_FOUR:"".concat(o,"/todoChild/distribution/设计师.png"),DIR_NAV_FIVE:"".concat(o,"/todoChild/distribution/客户.png"),DIR_NAV_SIX:"".concat(o,"/todoChild/distribution/首页.png"),DIR_VIP:"".concat(o,"/todoChild/distribution/vip.png"),DIR_RESGITER:"".concat(o,"/todoChild/distribution/shejishi.png"),DIR_KEHU:"".concat(o,"/todoChild/distribution/kehu.png"),RECOMMENDED_MEMBER:"".concat(o,"/todoChild/member/推荐好友.png"),INVITE_NOW:"".concat(o,"/todoChild/member/立即邀请.png"),DOWNLOAD_IMG:"".concat(o,"/todoChild/promoteGoods/save_album.png"),POSTER_1:"".concat(o,"/todoChild/poster/11.jpg"),POSTER_2:"".concat(o,"/todoChild/poster/22.jpg"),POSTER_3:"".concat(o,"/todoChild/poster/33.jpg"),POSTER_4:"".concat(o,"/todoChild/poster/44.jpg"),POSTER_5:"".concat(o,"/todoChild/poster/55.jpg"),POSTER_6:"".concat(o,"/todoChild/poster/66.jpg"),SUCCESSPAY:"".concat(o,"/todoChild/打款成功@2x.png"),ONEHOME:"".concat(o,"/todoChild/testonetest/一室一厅@2x.png"),TWOHOME:"".concat(o,"/todoChild/testonetest/户型 (1)@2x.png"),THREEHOME:"".concat(o,"/todoChild/testonetest/户型 (3)@2x.png"),OTHERHOME:"".concat(o,"/todoChild/testonetest/户型 (2)@2x.png"),TESTMEN:"".concat(o,"/todoChild/testonetest/男孩@2x.png"),TESTWOMEN:"".concat(o,"/todoChild/testonetest/女孩@2x.png"),INCOMEONE:"".concat(o,"/todoChild/testonetest/收入ONE.png"),INCOMETWO:"".concat(o,"/todoChild/testonetest/收入TWO.png"),INCOMETHREE:"".concat(o,"/todoChild/testonetest/收入THREE.png"),INCOMEFOUR:"".concat(o,"/todoChild/testonetest/收入FOUR.png"),BUSINESSMAN:"".concat(o,"/todoChild/testonetest/个体商户@2x.png"),SERVANTMAN:"".concat(o,"/todoChild/testonetest/公务员@2x.png"),EMPLOYEE:"".concat(o,"/todoChild/testonetest/员工@2x.png"),STAFF:"".concat(o,"/todoChild/testonetest/一般员工@2x.png"),HOMEONE:"".concat(o,"/todoChild/testonetest/homeone.png"),HOMETWO:"".concat(o,"/todoChild/testonetest/hometwo.png"),HOMETHREE:"".concat(o,"/todoChild/testonetest/homethree.png"),HOMEFOUR:"".concat(o,"/todoChild/testonetest/homefour.png"),TESTSUCCESS:"".concat(o,"/todoChild/testonetest/完成@2x.png"),TESTFAIL:"".concat(o,"/todoChild/testonetest/3.0-未完成@2x.png"),LOAN_PICTURE:"https://www.feiaizn.com/images/20200601172853_loan.png",MEASUREHOME:"".concat(o,"/todoChild/约量房.png"),MEASUREHOME_SUCCESS:"".concat(o,"/todoChild/约量房成功@2x.png"),MEASUREHOME_CHOOSE:"".concat(o,"/todoChild/measureHome/choose.png"),MEASUREHOME_ISCHOOSE:"".concat(o,"/todoChild/measureHome/ischoose.png"),UPLOAD:"".concat(o,"/todoChild/上传@2x.png"),BANNER_ONE:"".concat(o,"/banner/banner1@2x.png"),BANNER_TWO:"".concat(o,"/banner/banner2@2x.png"),BANNER_THREE:"".concat(o,"/banner/banner3@2x.png"),BANNER_FOUR:"".concat(o,"/banner/banner4@2x.png"),HEAT_POINT:"".concat(o,"/banner/redian.png"),NAV_ONE:"".concat(o,"/banner/navone.png"),NAV_TWO:"".concat(o,"/banner/navtwo.png"),NAV_THREE:"".concat(o,"/banner/navthree.png"),NAV_FOUR:"".concat(o,"/banner/navfour.png"),AD_ONE:"".concat(o,"/banner/广告位1@2x.png"),AD_TWO:"".concat(o,"/banner/广告位2@2x.png"),AD_THREE:"".concat(o,"/banner/广告位3@2x.png"),BANK_PIC:"".concat(o,"/todoChild/decoration/bankmoney.png"),BANK_LOGO:"".concat(o,"/todoChild/decoration/banklogo.png"),LOAN_NAV_PIC:"https://www.feiaizn.com/images/20200518163409_loanTH.jpg",BANK_JH:"".concat(o,"/todoChild/decoration/建设银行@2x.png"),BANK_BH:"".concat(o,"/todoChild/decoration/碧海银行@2x.png"),BANK_BJ:"".concat(o,"/todoChild/decoration/北京银行@2x.png"),BANK_JH_DETAIL:"".concat(o,"/todoChild/decoration/jianshe.png"),BANK_BH_DETAIL:"".concat(o,"/todoChild/decoration/bohai.png"),BANK_BJ_DETAIL:"".concat(o,"/todoChild/decoration/beijing.png"),BANK_APPT:"".concat(o,"/todoChild/decoration/appt.png"),BANK_RECORD:"".concat(o,"/todoChild/decoration/record.png"),BANK_LOOKFOR:"".concat(o,"/todoChild/decoration/lookfor.png"),APPT_TITLE_ONE:"".concat(o,"/todoChild/decoration/工单信息@2x.png"),APPT_TITLE_TWO:"".concat(o,"/todoChild/decoration/贷款信息变更@2x.png"),MINE_MONEY:"".concat(o,"/todoChild/mine/money.png"),MINE_INTEGRAL:"".concat(o,"/todoChild/mine/integral.png"),MINE_MEASURE:"".concat(o,"/todoChild/mine/mine_measure.png"),MINE_LOAN:"".concat(o,"/todoChild/mine/mine_loan.png"),MINE_RECOMMEND:"".concat(o,"/todoChild/mine/推荐@2x.png"),MINE_INTEGRAL_LOGO:"".concat(o,"/todoChild/mine/积分@2x.png"),MINE_SHARE_CENTER:"".concat(o,"/todoChild/mine/分销中心@2x.png"),MINE_ADRESS:"".concat(o,"/todoChild/mine/地址@2x.png"),MINE_DESIGER:"https://www.feiaizn.com/images/20200518111543_shejishirenzheng.png",MINE_ROLE_CHANGE:"https://www.feiaizn.com/images/20200518111657_jiaoseqiehuan.png",RECOMMEND_POINT:"".concat(o,"/todoChild/recommend/积分@2x.png"),RECOMMEND_COUPON:"".concat(o,"/todoChild/recommend/优惠券@2x.png"),RECOMMEND_GIFT:"".concat(o,"/todoChild/recommend/gift.png"),RECOMMEND_INVITE:"".concat(o,"/todoChild/recommend/yaoqing.png"),RECOMMEND_DESIGNER:"".concat(o,"/todoChild/recommend/shejishi.png"),RECOMMEND_VIP:"".concat(o,"/todoChild/recommend/vip.png"),RECOMMEND_CLIENT:"".concat(o,"/todoChild/recommend/kehu.png"),RECOMMEND_OVER:"".concat(o,"/todoChild/recommend/已结束@2x.png"),MEMBER_ONE:"".concat(o,"/todoChild/mine/组 2@2x.png"),MEMBER_TWO:"".concat(o,"/todoChild/mine/组 2@2x (1).png"),MEMBER_THREE:"".concat(o,"/todoChild/mine/组 2@2x (2).png"),MEMBER_FOUR:"".concat(o,"/todoChild/mine/组 2@2x (3).png"),MEMBER_FIVE:"".concat(o,"/todoChild/mine/组 2@2x (4).png"),MEMBER_SIX:"".concat(o,"/todoChild/mine/组 2@2x (5).png"),MEMBER_SEVEN:"".concat(o,"/todoChild/mine/组 2@2x (6).png"),MEMBER_EIGHT:"".concat(o,"/todoChild/mine/组 2@2x (7).png"),INVITE_GIFT:"".concat(o,"/todoChild/invitegift/invitegift.png"),INVITE_FRIEND:"".concat(o,"/todoChild/invitegift/friend.png"),INVITE_POINT_ONE:"".concat(o,"/todoChild/invitegift/10.png"),INVITE_POINT_TWO:"".concat(o,"/todoChild/invitegift/50.png"),INVITE_POINT_THREE:"".concat(o,"/todoChild/invitegift/500.png"),SIGNIN:"".concat(o,"/todoChild/calender/签到@2x.png"),SIGNIN_IMAGE:"".concat(o,"/todoChild/calender/时间@2x.png"),FENXIANG:"https://www.feiaizn.com/images/20200601151507_fenxiang.jpg",JIFEN_PIC:"https://www.feiaizn.com/images/20200514171649_jifenfenxiao.png",BOTTOM_JIANTOU:"https://www.feiaizn.com/images/20200516120658_xiatubiao.png",DECORATE_HOUSE:"https://www.feiaizn.com/images/20200527142354_4e6d517e31fb6692320d165fad7e500.png",STAR:"https://www.feiaizn.com/images/20200522114244_xingxing.png",MASK_IMG:"https://www.feiaizn.com/images/20200522164139_youhuijuan.png",COUPON_BG:"https://www.feiaizn.com/images/20200524201641_youhuijuanbeijing.png",MINE_RECORD:"https://www.feiaizn.com/images/20200525111941_jilu.png",MINE_KEFU:"https://www.feiaizn.com/images/20200525112119_kefu.png",VIP:"https://www.feiaizn.com/images/20200525112629_v.png"}},dbce:function(t,e){function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}t.exports=n},dc89:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getUnlimited=l,e.postDesigner=u,e.postPay=g,n("8e6e"),n("ac6a"),n("456d");var i=o(n("bd86"));n("96cf");var a=o(n("3b8d")),c=n("d28b"),r=n("52cd");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t){return p.apply(this,arguments)}function p(){return p=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=getApp().globalData.accessToken,t.t0=!n,!t.t0){t.next=8;break}return t.next=5,(0,c.request)({method:"GET",url:r.GET_ACCESS_TOKEN});case 5:if(t.t1=n=t.sent.access_token,!t.t1){t.next=8;break}getApp().globalData.accessToken=n;case 8:return t.abrupt("return",(0,c.request)({method:"POST",url:r.GET_UNLIMITED,data:d({access_token:n},e)}));case 9:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function u(t){return(0,c.request)({method:"POST",url:r.SHE_JI_SHI,showSuccessToast:!0,data:t})}function g(t){return(0,c.request)({method:"POST",url:r.PAY,showLoading:!1,hideLoading:!1,data:t})}},e514:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".recomCenter[data-v-6e38a49c]{padding:%?20?% 0}.recomCenter-nav[data-v-6e38a49c]{background-color:#fce77a;height:%?360?%;margin:0 %?20?%}.top[data-v-6e38a49c]{height:%?120?%;padding:10px 0 2px}.recomCenter-nav-top[data-v-6e38a49c]{width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden;margin:0 auto}.recomCenter-nav-top-img[data-v-6e38a49c]{width:%?140?%;height:%?140?%;display:block;margin-top:%?-10?%;margin-left:%?-10?%}.btn-box[data-v-6e38a49c]{height:%?30?%;margin-top:%?30?%}.schedule[data-v-6e38a49c]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?90?%;border-bottom:%?6?% solid #f7f7f7}.seclect[data-v-6e38a49c]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?90?%;border-bottom:%?6?% solid #f7f7f7}.box[data-v-6e38a49c]{height:%?320?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.box .box_item[data-v-6e38a49c]{-webkit-box-flex:25%;-webkit-flex:25%;flex:25%;height:%?120?%;margin-top:%?20?%}.box_item uni-image[data-v-6e38a49c]{width:%?50?%;height:%?50?%;margin:0 auto;display:block}.apptMeasureHome_ft[data-v-6e38a49c]{\n\t/* position: absolute;\n\tleft: 0;\n\tbottom: 20rpx; */width:100%;height:%?100?%;margin-top:%?30?%}.btn[data-v-6e38a49c]{height:%?80?%;text-align:center;line-height:%?80?%;border-radius:%?40?%;background:#ffe906;color:#000;margin-left:%?20?%;margin-right:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.3);font-size:%?28?%;letter-spacing:%?4?%}",""]),t.exports=e},ed40:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-6e38a49c]{background:#fff}body.?%PAGE?%[data-v-6e38a49c]{background:#fff}",""]),t.exports=e}}]);