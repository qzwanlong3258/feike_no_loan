(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-orderList-orderList"],{"066b":function(t,n,e){"use strict";var r=e("99a3"),a=e.n(r);a.a},"0ab5":function(t,n,e){var r=e("1b93");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("09107edc",r,!0,{sourceMap:!1,shadowMode:!1})},"0bf7":function(t,n,e){"use strict";e.r(n);var r=e("47b6"),a=e("2d13");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("066b");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"0decc01e",null,!1,r["a"],o);n["default"]=c.exports},1287:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("966c"),a={props:{infor:{type:Object,default:function(){return{}}}},filters:{formatOrderState:r.formatOrderState,formatOrderStateIcon:r.formatOrderStateIcon}};n.default=a},"14ed":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"menu-box"},[t.header?e("v-uni-view",{staticClass:"header"},[e("v-uni-text",{staticClass:"title"},[t._v("我的订单")]),e("v-uni-view",{staticClass:"link",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handChilck.apply(void 0,arguments)}}},[t._v("查看全部订单"),e("v-uni-image",{staticClass:"icon",attrs:{src:t.img.RIGHT}})],1)],1):t._e(),e("v-uni-view",{staticClass:"content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handChilck.apply(void 0,arguments)}}},t._l(t.list,(function(t,n){return e("ljl-column",{key:n,staticClass:"column",attrs:{infor:t,"data-index":n}})})),1)],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},"16a2":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.nav[data-v-0decc01e]{display:fixed;top:0}.detail-list[data-v-0decc01e]{width:100%}.detail-list .detail-content[data-v-0decc01e]{width:96%;background:#fff;margin:2%}.detail-list .detail-content .order-status[data-v-0decc01e]{position:absolute;right:%?90?%;color:#baa16d;margin-top:%?15?%;font-size:%?28?%}.detail-list .detail-content .iconcha[data-v-0decc01e]{position:absolute;right:%?80?%;margin-top:%?12?%}.detail-list .detail-content .infor-tip[data-v-0decc01e]{position:absolute;margin-top:%?-90?%;margin-left:%?50?%;font-size:%?20?%;right:%?50?%}.detail-list .detail-content .btn-list[data-v-0decc01e]{position:relative;top:%?-30?%;margin-bottom:%?10?%}',""]),t.exports=n},1718:function(t,n,e){"use strict";var r=e("0ab5"),a=e.n(r);a.a},"1a5d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("d1e4"),a={data:function(){return{imgs:{NULL_DATA:r.NULL_DATA}}},props:{content:{type:String,default:"暂无数据"}}};n.default=a},"1b0b":function(t,n,e){"use strict";var r=e("cb43"),a=e.n(r);a.a},"1b93":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.no-more-data-box[data-v-79865cde]{width:100%;height:%?50?%;background-color:#666;text-align:center;overflow:hidden;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.no-more-data-box uni-text[data-v-79865cde]{color:#fff;font-size:%?26?%}@-webkit-keyframes no-data-data-v-79865cde{80%{height:%?50?%}100%{height:0}}@keyframes no-data-data-v-79865cde{80%{height:%?50?%}100%{height:0}}',""]),t.exports=n},"2afe":function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("8e6e"),e("ac6a"),e("456d"),e("20d6");var a=r(e("bd86"));e("96cf");var i=r(e("3b8d"));e("c5f6"),e("7514");var o=r(e("b7b9")),s=r(e("b964")),c=r(e("6502")),u=e("966c"),d=r(e("b1cd")),l=e("e99c"),f=e("7c0c"),p=r(e("db2c"));function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach((function(n){(0,a.default)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var b={data:function(){return{orderStateList:[{state:2,count:0},{state:3,count:0},{state:4,count:0},{state:5,count:0}],list:[],state:2,isShowNoMoreData:!1,listQuery:{page:1,size:5}}},onLoad:function(t){t.state&&(this.state=t.state),t.title&&uni.setNavigationBarTitle({title:t.title}),this.stateChangeAll(2),this.stateChangeAll(3),this.stateChangeAll(4),this.stateChangeAll(5),this.stateChange()},onReachBottom:function(){var t=this,n=this.orderStateList.find((function(n){return n.state===Number(t.state)})).count;this.list.length<Number(n)?this.loadNextPage():this.$refs.NoMoreData.show()},filters:{formatOrderState:u.formatOrderState,formatOrderBtns:u.formatOrderBtns},methods:{linkToOrderDetail:function(t){uni.navigateTo({url:"".concat(l.ORDER_DETAIL,"?id=").concat(t.currentTarget.dataset.id)})},loadNextPage:function(){this.listQuery.page++,this.stateChange()},buttonChange:function(t){var n=t.event;this[n]&&this[n]()},stateChange:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var n,e,r=this,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:this.state,console.log(n),t.next=4,(0,f.getOrderList)({state:n,page:this.listQuery.page,size:this.listQuery.size});case 4:e=t.sent,this.state=n,this.list=[],e.list.map(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,f.getOrderDetail)({uuid:n.uuid});case 2:e=t.sent,console.log(e),r.list.push(h({},n,{url:e.showImg[0].url}));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()),console.log(this.list);case 9:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),stateChangeAll:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var n,e,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:this.state,console.log(n),t.next=4,(0,f.getOrderList)({state:n,page:this.listQuery.page,size:this.listQuery.size});case 4:e=t.sent,this.orderStateList.find((function(t){return t.state===Number(n)})).count=e.list.length;case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),deleteOrder:function(t){var n=this,e=t.id,r=this.list.findIndex((function(t){return t.id==e}));this.list.splice(r,1),this.orderStateList=this.orderStateList.map((function(t){return t.state===n.state&&t.count--,t}))}},components:{OrderInfor:o.default,OrderButton:s.default,NoMoreData:c.default,LjlOrderMenu:d.default,NullData:p.default}};n.default=b},"2b8c":function(t,n,e){"use strict";e.r(n);var r=e("1287"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},"2d13":function(t,n,e){"use strict";e.r(n);var r=e("2afe"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},"368c":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"nullData_view"},[e("v-uni-image",{staticClass:"nullData_image",attrs:{src:t.imgs.NULL_DATA,mode:"aspectFit"}}),e("v-uni-text",{staticClass:"nullData_text"},[t._v(t._s(t.content))])],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},"47b6":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"order-list-box"},[e("v-uni-view",{staticClass:"nav"},[e("ljl-order-menu",{attrs:{header:!1,list:t.orderStateList},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.stateChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"detail-list"},t._l(t.list,(function(n,r){return e("v-uni-view",{key:r,staticClass:"detail-content",attrs:{"data-id":n.id}},[e("v-uni-view",{staticClass:"order-status"},[t._v(t._s(t._f("formatOrderState")(t.state)))]),e("v-uni-view",{attrs:{"data-id":n.uuid},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.linkToOrderDetail.apply(void 0,arguments)}}},[e("order-infor",{attrs:{order:n}})],1),e("v-uni-view",{staticClass:"infor-tip"},[t._v("商品合计:"),e("span",{staticClass:"primary-theme-color",staticStyle:{"font-size":"28rpx"}},[t._v(t._s(n.goodsPrice*Number(n.orderCount)))]),t._v("积分")]),e("v-uni-view",{staticClass:"btn-list"},[e("order-button",{attrs:{btnList:t._f("formatOrderBtns")(t.state),infor:n},on:{updateList:function(n){arguments[0]=n=t.$handleEvent(n),t.changeOrderList.apply(void 0,arguments)},change:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonChange.apply(void 0,arguments)}}})],1)],1)})),1),e("no-more-data",{ref:"NoMoreData"}),t.list.length?t._e():e("null-data",{staticClass:"nullData_view"})],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},5096:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.menu-box[data-v-cdbe4a48]{background:#fff}.menu-box .header[data-v-cdbe4a48]{height:%?60?%;box-sizing:border-box;padding:%?10?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.menu-box .header .title[data-v-cdbe4a48]{font:%?28?%/%?40?% verdana;color:#333}.menu-box .header .link[data-v-cdbe4a48]{font:%?24?%/%?34?% verdana;color:#999;position:absolute;right:%?20?%}.menu-box .header .link .icon[data-v-cdbe4a48]{margin-left:%?6?%;width:%?12?%;height:%?22?%}.menu-box .content[data-v-cdbe4a48]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=n},6502:function(t,n,e){"use strict";e.r(n);var r=e("d47e"),a=e("8452");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("1718");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"79865cde",null,!1,r["a"],o);n["default"]=c.exports},6582:function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("e872")),i=e("d1e4"),o={data:function(){return{img:{RIGHT:i.RIGHT}}},props:{header:{type:Boolean,default:function(){return!0}},list:{type:Array,default:function(){return[]}}},methods:{handChilck:function(t){var n=t.target.dataset.index||0;this.$emit("change",this.list[n].state)}},components:{LjlColumn:a.default}};n.default=o},6911:function(t,n,e){var r=e("f431");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("a880fdb2",r,!0,{sourceMap:!1,shadowMode:!1})},"6cc5":function(t,n,e){"use strict";var r=e("6911"),a=e.n(r);a.a},"6e95":function(t,n,e){"use strict";var r=e("84d0"),a=e.n(r);a.a},"768f":function(t,n,e){"use strict";e.r(n);var r=e("1a5d"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},8452:function(t,n,e){"use strict";e.r(n);var r=e("e259"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},"84d0":function(t,n,e){var r=e("eb9c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("1071e8d5",r,!0,{sourceMap:!1,shadowMode:!1})},"99a3":function(t,n,e){var r=e("16a2");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("ec9ed7c4",r,!0,{sourceMap:!1,shadowMode:!1})},b1cd:function(t,n,e){"use strict";e.r(n);var r=e("14ed"),a=e("f115");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("1b0b");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"cdbe4a48",null,!1,r["a"],o);n["default"]=c.exports},cb43:function(t,n,e){var r=e("5096");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("1be9a8b0",r,!0,{sourceMap:!1,shadowMode:!1})},d47e:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"no-more-data-box",style:{animation:t.isShow?"no-data 2s":""},attrs:{hidden:!t.isShow}},[e("v-uni-text",[t._v("没有更多数据了哦！")])],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},db2c:function(t,n,e){"use strict";e.r(n);var r=e("368c"),a=e("768f");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("6cc5");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"1e0b574f",null,!1,r["a"],o);n["default"]=c.exports},e259:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("45d5"),a={data:function(){return{isShow:!1}},computed:{handHide:function(){var t=this;return(0,r.debounce)((function(){t.isShow=!1}),2e3)}},methods:{show:function(){this.isShow=!0,this.handHide()}}};n.default=a},e872:function(t,n,e){"use strict";e.r(n);var r=e("ee5b"),a=e("2b8c");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("6e95");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"905e319c",null,!1,r["a"],o);n["default"]=c.exports},eb9c:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.column-box[data-v-905e319c]{width:100%;box-sizing:border-box;padding:%?12?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.column-box .count[data-v-905e319c]{position:absolute;top:0;right:0;width:%?30?%;height:%?30?%;border-radius:50%;z-index:99;background:#fad64c;line-height:%?30?%;text-align:center;font-size:.3em;color:#fff}.column-box .icon[data-v-905e319c]{width:%?40?%;height:%?40?%}.column-box .title[data-v-905e319c]{font:%?24?%/%?34?% verdana;color:#999}',""]),t.exports=n},ee5b:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"column-box"},[e("v-uni-view",{staticClass:"count",attrs:{hidden:!t.infor.count}},[t._v(t._s(t.infor.count))]),e("v-uni-image",{staticClass:"icon",attrs:{src:t._f("formatOrderStateIcon")(t.infor.state),mode:"aspectFit"}}),e("v-uni-text",{staticClass:"title"},[t._v(t._s(t._f("formatOrderState")(t.infor.state)))])],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},f115:function(t,n,e){"use strict";e.r(n);var r=e("6582"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},f431:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/* Color\r\n--------------------------*/\n/* distance\r\n--------------------------*/\n/* radius\r\n--------------------------*/\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.nullData_image[data-v-1e0b574f]{width:100%;height:%?300?%}.nullData_text[data-v-1e0b574f]{display:block;width:100%;text-align:center}',""]),t.exports=n}}]);