(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-inShop-inviteShop-index"],{"122f":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".scheduleCard[data-v-cc17abfc]{margin:%?48?% %?15?%;height:%?860?%;background:#fff;border-radius:%?20?%;box-shadow:0 %?4?% %?4?% hsla(0,0%,60%,.3);overflow:hidden;padding:%?20?%}.scheduleCard-top[data-v-cc17abfc]{padding-bottom:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex}.scheduleCard-top-left[data-v-cc17abfc]{-webkit-flex-basis:%?120?%;flex-basis:%?120?%;width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden}.scheduleCard-top-left uni-image[data-v-cc17abfc]{width:%?140?%;height:%?140?%;display:block;margin-top:%?-10?%;margin-left:%?-10?%}.scheduleCard-top-mid[data-v-cc17abfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:10px}.scheduleCard-top-right[data-v-cc17abfc]{-webkit-flex-basis:%?180?%;flex-basis:%?180?%}.scheduleCard-bottom uni-image[data-v-cc17abfc]{width:100%;height:100%}",""]),e.exports=t},"31c2":function(e,t,a){"use strict";a.r(t);var r=a("3983"),n=a("cccd");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("b96a");var o,c=a("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"cc17abfc",null,!1,r["a"],o);t["default"]=s.exports},3983:function(e,t,a){"use strict";var r={"tki-qrcode":a("7cc4").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"scheduleCard"},[a("v-uni-view",{staticClass:"scheduleCard-top",staticStyle:{height:"150rpx"}},[a("v-uni-view",{staticClass:"scheduleCard-top-left"},[a("v-uni-image",{staticClass:"scheduleCard-top-left-img",attrs:{src:e.userInfo.avatarUrl,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"scheduleCard-top-mid"},[a("v-uni-view",{staticClass:"scheduleCard-top-mid-top",staticStyle:{"font-size":"31rpx",padding:"10rpx",color:"#333333"}},[e._v(e._s(e.userInfo.nickName))]),a("v-uni-view",{staticClass:"scheduleCard-top-mid-bottom",staticStyle:{"font-size":"28rpx","padding-left":"10rpx",color:"#333333"}},[e._v(e._s(e.userInfo.phone))])],1),a("v-uni-view",{staticClass:"scheduleCard-top-right"})],1),a("v-uni-view",{staticClass:"scheduleCard-bottom",staticStyle:{height:"600rpx",border:"2rpx solid #979797"}},[a("v-uni-image",{attrs:{src:e.code,mode:""}})],1),a("v-uni-view",{staticStyle:{color:"#999999","text-align":"center","font-size":"28rpx",margin:"10px 0"}},[e._v("扫码注册成为商户，非客为您提供更优质服务")]),a("v-uni-view",{staticStyle:{color:"#999999","text-align":"center","font-size":"28rpx",margin:"10px 0"}},[e._v("邀请人编号"),a("v-uni-text",{staticStyle:{color:"#333333"}},[e._v(e._s(e.num))])],1)],1),a("tki-qrcode",{ref:"qrcode",attrs:{val:e.val,size:300,background:"#fff",foreground:"#1394DA",pdground:"#000",onval:!1,icon:e.imglogo,iconSize:30,loadMake:!1,show:!1},on:{result:function(t){arguments[0]=t=e.$handleEvent(t),e.qrR.apply(void 0,arguments)}}})],1)},i=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r}))},"6db4":function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c5f6");var n,i=r(a("7cc4")),o=a("ca20"),c=a("d1e4"),s=a("dc89"),d={component:{tkiQrcode:i.default},data:function(){return{userInfo:{},val:"https://feiaizn.com:1001/linkcode?id=1",code:"",num:0,imglogo:c.COMPANY_LOGO}},methods:{},onLoad:function(){n=this,n.userInfo=(0,o.getStorage)("userInfo"),n.num=Number(n.userInfo.id)+1e3;var e="1_2";n.val="https://feiaizn.com:1001/linkcode?id=".concat(e),console.log(n.val),console.log(this.num);var t=n.userInfo.id;console.log(t),(0,s.getUnlimited)({scene:t,width:600}).then((function(e){console.log(e),n.code=e}))}};t.default=d},"807f":function(e,t,a){var r=a("122f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("4f06").default;n("4fc56cdc",r,!0,{sourceMap:!1,shadowMode:!1})},b96a:function(e,t,a){"use strict";var r=a("807f"),n=a.n(r);n.a},cccd:function(e,t,a){"use strict";a.r(t);var r=a("6db4"),n=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=n.a},dc89:function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getUnlimited=u,t.postDesigner=f,t.postPay=p,a("8e6e"),a("ac6a"),a("456d");var n=r(a("bd86"));a("96cf");var i=r(a("3b8d")),o=a("d28b"),c=a("52cd");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e){return l.apply(this,arguments)}function l(){return l=(0,i.default)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=getApp().globalData.accessToken,e.t0=!a,!e.t0){e.next=8;break}return e.next=5,(0,o.request)({method:"GET",url:c.GET_ACCESS_TOKEN});case 5:if(e.t1=a=e.sent.access_token,!e.t1){e.next=8;break}getApp().globalData.accessToken=a;case 8:return e.abrupt("return",(0,o.request)({method:"POST",url:c.GET_UNLIMITED,data:d({access_token:a},t)}));case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e){return(0,o.request)({method:"POST",url:c.SHE_JI_SHI,showSuccessToast:!0,data:e})}function p(e){return(0,o.request)({method:"POST",url:c.PAY,showLoading:!1,hideLoading:!1,data:e})}}}]);