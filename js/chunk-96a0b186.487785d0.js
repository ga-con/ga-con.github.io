(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96a0b186"],{1717:function(e,t,s){},"52d7":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a="YOUR_API_KEY"},"65a5":function(e,t,s){"use strict";s("1717")},"71ac":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("card",{staticClass:"card-map"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("h4",{staticClass:"card-title"},[e._v("Satellite Map")])]),s("div",{staticClass:"map map-big",attrs:{id:"satelliteMap"}})])],1),s("div",{staticClass:"col-md-6"},[s("card",{staticClass:"card-map"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("h4",{staticClass:"card-title"},[e._v("Regular Map")])]),s("div",{staticClass:"map",attrs:{id:"regularMap"}})])],1),s("div",{staticClass:"col-md-6"},[s("card",{staticClass:"card-map"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("h4",{staticClass:"card-title"},[e._v("Custom Skin & Settings Map")])]),s("div",{staticClass:"map",attrs:{id:"customSkinMap"}})])],1)])},i=[],o=s("52d7"),r=s("7a6e"),l=new r["a"](o["a"]),n={mounted:function(){l.load().then((function(e){var t=new window.google.maps.LatLng(40.748817,-73.985428),s={zoom:3,scrollwheel:!1,center:t,mapTypeId:window.google.maps.MapTypeId.SATELLITE},a=new window.google.maps.Map(document.getElementById("satelliteMap"),s),i=new window.google.maps.Marker({position:t,title:"Satellite Map!"});i.setMap(a);var o=new window.google.maps.LatLng(40.748817,-73.985428),r={zoom:8,center:o,scrollwheel:!1},l=new window.google.maps.Map(document.getElementById("regularMap"),r),n=new window.google.maps.Marker({position:o,title:"Regular Map!"});n.setMap(l);var p=new e.maps.LatLng(40.748817,-73.985428),d={zoom:13,center:p,scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]},c=new e.maps.Map(document.getElementById("customSkinMap"),d),u=new e.maps.Marker({position:p,title:"Custom Skin & Settings Map!"});u.setMap(c)}))}},p=n,d=(s("65a5"),s("2877")),c=Object(d["a"])(p,a,i,!1,null,null,null);t["default"]=c.exports},"7a6e":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));class a{constructor(e=null,t={}){if(this.apiKey=e,this.options=t,"undefined"===typeof window)throw new Error("google-maps is supported only in browser environment")}load(){return"undefined"!==typeof this.api?Promise.resolve(this.api):"undefined"!==typeof this.loader?this.loader:(window[a.CALLBACK_NAME]=()=>{if(this.api=window["google"],"undefined"===typeof this.resolve)throw new Error("Should not happen");this.resolve(this.api)},window["gm_authFailure"]=()=>{if("undefined"===typeof this.reject)throw new Error("Should not happen");this.reject(new Error("google-maps: authentication error"))},this.loader=new Promise((e,t)=>{this.resolve=e,this.reject=t;const s=document.createElement("script");s.src=this.createUrl(),s.async=!0,s.onerror=e=>t(e),document.head.appendChild(s)}))}createUrl(){const e=["callback="+a.CALLBACK_NAME];this.apiKey&&e.push("key="+this.apiKey);for(let t in this.options)if(this.options.hasOwnProperty(t)){let s=this.options[t];"version"===t&&(t="v"),"libraries"===t&&(s=s.join(",")),e.push(`${t}=${s}`)}return"https://maps.googleapis.com/maps/api/js?"+e.join("&")}}a.CALLBACK_NAME="_dk_google_maps_loader_cb"}}]);
//# sourceMappingURL=chunk-96a0b186.487785d0.js.map