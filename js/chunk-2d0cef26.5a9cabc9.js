(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cef26"],{"622f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("card",{staticClass:"stacked-form",attrs:{title:"Stacked Form"}},[e("form",{attrs:{method:"#",action:"#"},on:{submit:function(t){t.preventDefault()}}},[e("template",{slot:"header"},[e("h4",{staticClass:"card-title"},[t._v(" Stacked Form ")])]),e("div",[e("fg-input",{attrs:{label:"Email address",type:"email",placeholder:"Enter email"}}),e("fg-input",{attrs:{label:"Password",type:"password",placeholder:"Password"}}),e("div",{staticClass:"form-group"},[e("checkbox",[t._v("Subscribe to newsletter")])],1),e("button",{staticClass:"btn btn-fill btn-info",attrs:{type:"submit"}},[t._v("Submit")])],1)],2)])],1),e("div",{staticClass:"col-md-6"},[e("card",{staticClass:"horizontal-form",attrs:{title:"Horizontal Form"}},[e("template",{slot:"header"},[e("h4",{staticClass:"card-title"},[t._v(" Horizontal Form ")])]),e("form",{attrs:{action:"#",method:"#"},on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"col-12"},[e("fg-input",{staticClass:"row",attrs:{label:"email",type:"email",labelClasses:"col-md-3 col-12",inputClasses:"col-md-9 col-12",placeholder:"Email"}}),e("fg-input",{staticClass:"row",attrs:{label:"password",type:"password",labelClasses:"col-md-3 col-12",inputClasses:"col-md-9 col-12",placeholder:"Password"}}),e("fg-input",{staticClass:"row",attrs:{label:" ",labelClasses:"col-md-3 col-12",inputClasses:"col-md-9 col-12"}},[e("checkbox",[t._v("Remember me")])],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 offset-md-3 col-12"},[e("button",{staticClass:"btn btn-fill btn-info",attrs:{type:"submit"}},[t._v(" Sign in ")])])])],2)],1),t._v(" "),e("div",{staticClass:"col-md-12"},[e("card",[e("template",{slot:"header"},[e("h4",{staticClass:"card-title"},[t._v("Form Elements")])]),e("div",[e("form",{staticClass:"form-horizontal",attrs:{method:"get",action:"/"}},[e("fg-input",{attrs:{label:"With help",type:"text",placeholder:"Enter email"}},[e("small",{staticClass:"form-text text-muted",attrs:{slot:"helpBlock"},slot:"helpBlock"},[t._v("A block of help text that breaks onto a new line.")])]),e("fg-input",{attrs:{label:"Password",type:"password"}}),e("fg-input",{attrs:{label:"Placeholder",placeholder:"Placeholder",type:"text"}}),e("fg-input",{attrs:{label:"Disabled",placeholder:"Disabled input here",disabled:"",type:"text"}}),e("fg-input",{attrs:{label:"Static control"}},[e("p",{staticClass:"form-control-static"},[t._v("hello@creative-tim.com")])]),e("fg-input",{attrs:{label:"Checkboxes and radios"}},[e("checkbox",{model:{value:t.checkboxes.first,callback:function(s){t.$set(t.checkboxes,"first",s)},expression:"checkboxes.first"}},[t._v("First checkbox")]),e("checkbox",{model:{value:t.checkboxes.second,callback:function(s){t.$set(t.checkboxes,"second",s)},expression:"checkboxes.second"}},[t._v("Second checkbox")]),e("radio",{attrs:{label:"1"},model:{value:t.radios.radio1,callback:function(s){t.$set(t.radios,"radio1",s)},expression:"radios.radio1"}},[t._v("First Radio")]),e("radio",{attrs:{label:"2"},model:{value:t.radios.radio1,callback:function(s){t.$set(t.radios,"radio1",s)},expression:"radios.radio1"}},[t._v("Second Radio")])],1),e("fg-input",{attrs:{label:"Inline checkboxes"}},[e("div",[e("checkbox",{attrs:{inline:!0},model:{value:t.checkboxes.a,callback:function(s){t.$set(t.checkboxes,"a",s)},expression:"checkboxes.a"}},[t._v("a")]),e("checkbox",{attrs:{inline:!0},model:{value:t.checkboxes.b,callback:function(s){t.$set(t.checkboxes,"b",s)},expression:"checkboxes.b"}},[t._v("b")]),e("checkbox",{attrs:{inline:!0},model:{value:t.checkboxes.c,callback:function(s){t.$set(t.checkboxes,"c",s)},expression:"checkboxes.c"}},[t._v("c")])],1)]),e("fg-input",{staticClass:"has-success",attrs:{label:"Input with success",type:"text",value:"Success"}}),e("fg-input",{staticClass:"has-error",attrs:{label:"Input with error",type:"text",value:"Error"}}),e("fg-input",{staticClass:"column-sizing",attrs:{label:"Column sizing"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("fg-input",{attrs:{placeholder:".col-md-3"}})],1),e("div",{staticClass:"col-md-4"},[e("fg-input",{attrs:{placeholder:".col-md-4"}})],1),e("div",{staticClass:"col-md-5"},[e("fg-input",{attrs:{placeholder:".col-md-5"}})],1)])]),e("fg-input",{attrs:{label:"Input groups"}},[e("div",{staticClass:"row"},[e("fg-input",{staticClass:"col-sm-3",attrs:{placeholder:"Username",type:"text"}},[e("span",{attrs:{slot:"addonRight"},slot:"addonRight"})]),e("fg-input",{staticClass:"col-sm-3",attrs:{type:"text"}},[e("span",{attrs:{slot:"addonLeft"},slot:"addonLeft"},[t._v(".00")])]),e("fg-input",{staticClass:"col-sm-6",attrs:{type:"text"}},[e("span",{attrs:{slot:"addonLeft"},slot:"addonLeft"},[t._v("$")]),e("span",{attrs:{slot:"addonRight"},slot:"addonRight"},[t._v(".00")])])],1)]),e("fg-input",{attrs:{label:"Textarea"}},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"Here can be your nice text",rows:"3"}})])],1)])],2)],1)])},l=[],o=e("2af9"),c={components:{Checkbox:o["f"],Radio:o["k"]},data:function(){return{radios:{radio1:"1",radio2:"2",radio3:"2"},checkboxes:{first:!1,second:!1,a:!1,b:!1,c:!1,unchecked:!1,checked:!0,disabledUnchecked:!1,disabledChecked:!0}}}},i=c,r=e("2877"),n=Object(r["a"])(i,a,l,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0cef26.5a9cabc9.js.map