(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-swapRole-index"],{"061c":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".swapRole[data-v-d19f3548]{font-size:%?32?%;color:#666;background:rgba(232,232,231,.1);height:%?1250?%}.swapRole-hd[data-v-d19f3548]{height:%?300?%;text-align:center}.iconclass[data-v-d19f3548]{font-size:%?100?%;color:#bfbfbf}.swapRole-bd[data-v-d19f3548]{font-size:%?60?%;text-align:center;color:#000}.box[data-v-d19f3548]{margin:0 %?100?%;background:#fff;border-radius:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?140?%}.box-left[data-v-d19f3548]{-webkit-flex-basis:%?150?%;flex-basis:%?150?%;text-align:center;line-height:%?70?%}.box-right[data-v-d19f3548]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.box-right-static[data-v-d19f3548]{width:%?120?%;height:%?40?%;background:rgba(7,193,96,.1);color:#06e570;border-radius:%?5?%;text-align:center;font-size:%?22?%;line-height:%?40?%}",""]),t.exports=i},"1ffe":function(t,i,e){var n=e("061c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("96c70848",n,!0,{sourceMap:!1,shadowMode:!1})},"58fe":function(t,i,e){"use strict";e.r(i);var n=e("6874"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},6874:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a,s=n(e("3b8d")),o=e("ca20"),c={data:function(){return{index:0}},methods:{swapRole:function(t){a.index=t,(0,o.setStorage)("index",t)}},onLoad:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=this,a.index=(0,o.getStorage)("index");case 2:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()};i.default=c},cb59:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"swapRole"},[e("v-uni-view",{staticClass:"swapRole-hd"},[e("v-uni-icon",{staticClass:"iconfont iconjiaoseqiehuan iconclass"})],1),e("v-uni-view",{staticClass:"swapRole-bd"},[t._v("轻触以切换角色")]),e("v-uni-view",{staticStyle:{height:"50rpx","border-bottom":"2rpx solid #bfbfbf",margin:"0 250rpx 100rpx"}}),e("v-uni-view",{staticClass:"box",staticStyle:{"margin-bottom":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.swapRole(0)}}},[e("v-uni-view",{staticClass:"box-left"},[e("v-uni-icon",{staticClass:" iconfont iconperson",staticStyle:{"font-size":"80rpx","margin-top":"30rpx",color:"#F39813"}})],1),e("v-uni-view",{staticClass:"box-right"},[e("v-uni-view",{staticStyle:{height:"50%","line-height":"70rpx","font-size":"12px","font-weight":"700"}},[t._v("用户")]),0==t.index?e("v-uni-view",{staticStyle:{height:"50%"}},[e("v-uni-view",{staticClass:"box-right-static"},[t._v("当前角色")])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"box",staticStyle:{"margin-bottom":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.swapRole(1)}}},[e("v-uni-view",{staticClass:"box-left"},[e("v-uni-icon",{staticClass:" iconfont iconperson",staticStyle:{"font-size":"80rpx","margin-top":"30rpx",color:"#F4EA2A"}})],1),e("v-uni-view",{staticClass:"box-right"},[e("v-uni-view",{staticStyle:{height:"50%","line-height":"70rpx","font-size":"12px","font-weight":"700"}},[t._v("面签员")]),1==t.index?e("v-uni-view",{staticStyle:{height:"50%"}},[e("v-uni-view",{staticClass:"box-right-static"},[t._v("当前角色")])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.swapRole(2)}}},[e("v-uni-view",{staticClass:"box-left "},[e("v-uni-icon",{staticClass:"iconfont iconsheyingshi",staticStyle:{"font-size":"80rpx",color:"#41C2C2","margin-top":"30rpx"}})],1),e("v-uni-view",{staticClass:"box-right"},[e("v-uni-view",{staticStyle:{height:"50%","line-height":"70rpx","font-size":"12px","font-weight":"700"}},[t._v("拍照员")]),2==t.index?e("v-uni-view",{staticStyle:{height:"50%"}},[e("v-uni-view",{staticClass:"box-right-static"},[t._v("当前角色")])],1):t._e()],1)],1)],1)},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},f69c:function(t,i,e){"use strict";e.r(i);var n=e("cb59"),a=e("58fe");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("ffc7");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"d19f3548",null,!1,n["a"],o);i["default"]=r.exports},ffc7:function(t,i,e){"use strict";var n=e("1ffe"),a=e.n(n);a.a}}]);