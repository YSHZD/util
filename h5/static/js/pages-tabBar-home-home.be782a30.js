(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-home-home"],{"3aff":function(i,t,a){"use strict";a.r(t);var s=a("4509"),e=a("596b");for(var n in e)"default"!==n&&function(i){a.d(t,i,function(){return e[i]})}(n);a("40b5");var u=a("2877"),c=Object(u["a"])(e["default"],s["a"],s["b"],!1,null,"48b370f0",null);t["default"]=c.exports},"40b5":function(i,t,a){"use strict";var s=a("9d26"),e=a.n(s);e.a},4509:function(i,t,a){"use strict";var s=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"page-section swiper"},[a("v-uni-view",{staticClass:"page-section-spacing"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{attrs:{mode:i.mode,src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"}})],1)],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{attrs:{mode:i.mode,src:"../../../static/images/2.jpg"}})],1)],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{attrs:{mode:i.mode,src:"../../../static/images/2.png"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"listitems"},[a("v-uni-view",{staticClass:"rowlist"},[a("v-uni-view",{staticClass:"listitem"},[a("v-uni-image",{attrs:{src:"../../../static/images/qcal.png"}}),a("v-uni-view",[i._v("清册案例")])],1),a("v-uni-view",{staticClass:"listitem"},[a("v-uni-image",{attrs:{src:"../../../static/images/qcal.png"}}),a("v-uni-view",[i._v("清册案例")])],1),a("v-uni-view",{staticClass:"listitem"},[a("v-uni-image",{attrs:{src:"../../../static/images/qcal.png"}}),a("v-uni-view",[i._v("清册案例")])],1)],1),a("v-uni-view",{staticClass:"rowlist"},[a("v-uni-view",{staticClass:"listitem",on:{click:function(t){t=i.$handleEvent(t),i.go("pick")}}},[a("v-uni-image",{attrs:{src:"../../../static/images/hyfx.png"}}),a("v-uni-view",[i._v("地区选择")])],1),a("v-uni-view",{staticClass:"listitem",on:{click:function(t){t=i.$handleEvent(t),i.go("img")}}},[a("v-uni-image",{attrs:{src:"../../../static/images/hyfx.png"}}),a("v-uni-view",[i._v("图片上传")])],1),a("v-uni-view",{staticClass:"listitem",on:{click:function(t){t=i.$handleEvent(t),i.go("echart")}}},[a("v-uni-image",{attrs:{src:"../../../static/images/hyfx.png"}}),a("v-uni-view",[i._v("echars")])],1)],1)],1)],1)],1)},e=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return e})},"596b":function(i,t,a){"use strict";a.r(t);var s=a("ab22"),e=a.n(s);for(var n in s)"default"!==n&&function(i){a.d(t,i,function(){return s[i]})}(n);t["default"]=e.a},"9d26":function(i,t,a){var s=a("a36c");"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var e=a("4f06").default;e("0f838f5a",s,!0,{sourceMap:!1,shadowMode:!1})},a36c:function(i,t,a){t=i.exports=a("2350")(!1),t.push([i.i,".swiper-item uni-image[data-v-48b370f0]{width:100%}",""])},ab22:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{mode:"scaleToFill",indicatorDots:!0,autoplay:!0,interval:3e3,duration:500}},methods:{go:function(i){"echart"==i?uni.navigateTo({url:"../../../js_sdk/wx-charts/pages/wxcharts/wxcharts"}):"img"==i?uni.navigateTo({url:"../../../pages/upimg/index/index"}):"pick"==i&&uni.navigateTo({url:"../../../component/w-picker/index"})}}};t.default=s}}]);