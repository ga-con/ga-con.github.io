(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2165f1"],{c1d1:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("card",{attrs:{title:"24 Hours Performance",subTitle:"Line Chart"}},[a("div",{staticClass:"ct-chart",attrs:{id:"chartPerformance"}})])],1),a("div",{staticClass:"col-lg-6"},[a("card",{attrs:{title:"NASDAQ: AAPL",subTitle:"Line Chart with Points"}},[a("div",{staticClass:"ct-chart",attrs:{id:"chartStock"}})])],1),a("div",{staticClass:"col-lg-6"},[a("card",{attrs:{title:"Views",subTitle:"Bar Chart"}},[a("div",{staticClass:"ct-chart",attrs:{id:"chartViews"}})])],1),a("div",{staticClass:"col-lg-6"},[a("card",{attrs:{title:"Activity",subTitle:"Multiple Bars Chart"}},[a("div",{staticClass:"ct-chart",attrs:{id:"chartActivity"}})])],1)])},r=[],s=a("1da1"),n=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),{data:function(){return{$Chartist:null}},methods:{initPerformanceChart:function(){var t={labels:["6pm","9pm","11pm","2am","4am","8am","2pm","5pm","8pm","11pm","4am"],series:[[1,6,8,7,4,7,8,12,16,17,14,13]]},i={showPoint:!1,lineSmooth:!0,axisX:{showGrid:!1,showLabel:!0},axisY:{offset:40},low:0,high:16,height:"250px"};this.$Chartist.Line("#chartPerformance",t,i)},initActivityChart:function(){var t={labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,443,320,780,553,453,326,434,568,610,756,895],[412,243,280,580,453,353,300,364,368,410,636,695]]},i={seriesBarDistance:10,axisX:{showGrid:!1},height:"250px"},a=[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]];this.$Chartist.Bar("#chartActivity",t,i,a)},initStockChart:function(){var t={labels:["'07","'08","'09","'10","'11","'12","'13","'14","'15"],series:[[22.2,34.9,42.28,51.93,62.21,80.23,62.21,82.12,102.5,107.23]]},i={lineSmooth:!1,axisY:{offset:40,labelInterpolationFnc:function(t){return"$".concat(t)}},low:10,height:"250px",high:110,classNames:{point:"ct-point ct-green",line:"ct-line ct-green"}};this.$Chartist.Line("#chartStock",t,i)},initViewsChart:function(){var t={labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},i={seriesBarDistance:10,classNames:{bar:"ct-bar"},axisX:{showGrid:!1},height:"250px"},a=[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]];this.$Chartist.Bar("#chartViews",t,i,a)},initCharts:function(){this.initPerformanceChart(),this.initStockChart(),this.initViewsChart(),this.initActivityChart()}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,a.e("chunk-2d219ff9").then(a.t.bind(null,"ba48",7));case 2:e=i.sent,t.$Chartist=e.default?e.default:e,t.initCharts();case 5:case"end":return i.stop()}}),i)})))()}}),c=n,h=a("2877"),l=Object(h["a"])(c,e,r,!1,null,null,null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2165f1.f71f64a8.js.map