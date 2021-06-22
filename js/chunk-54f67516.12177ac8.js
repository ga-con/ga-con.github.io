(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54f67516"],{"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,r){var s,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,b=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),b(t,e)}):u.beforeCreate=b?[].concat(b,c):[c]}return{esModule:s,exports:o,options:u}}},function(t,e,a){"use strict";var n=a(2),i=a(4),r=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(r.a)(e.tabId)}},focusPrevTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(r.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(r.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,n){var i=a.route===t;return i&&(e=n),i}));if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),r=a(11),s=a(0),o=n,l=s(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),r=a(13),s=a(0),o=n,l=s(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),r=a(2),s=a(4);a.d(e,"FormWizard",(function(){return n.a})),a.d(e,"TabContent",(function(){return i.a})),a.d(e,"WizardButton",(function(){return r.a})),a.d(e,"WizardStep",(function(){return s.a}));var o={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),r=a(15),s=a(0),o=n,l=s(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex((function(t){return t.tabId===e}))}function r(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=r,e.c=s},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var n=a(6),i=a(17),r=a(0),s=r(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],r={render:n,staticRenderFns:i};e.a=r}])}))},"2f40":function(t,e,a){},"58d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"card card-wizard",attrs:{id:"wizardCard"}},[a("form-wizard",{attrs:{shape:"tab","error-color":"#FB404B",color:"#35495E"},on:{"on-complete":t.wizardComplete}},[a("tab-content",{staticClass:"col-12",attrs:{title:"Personal details","before-change":function(){return t.validateStep("firstStep")},icon:"nc-icon nc-badge"}},[a("first-step",{ref:"firstStep",on:{"on-validated":t.onStepValidated}})],1),a("tab-content",{staticClass:"col-12",attrs:{title:"Additional Info","before-change":function(){return t.validateStep("secondStep")},icon:"nc-icon nc-notes"}},[a("second-step",{ref:"secondStep",on:{"on-validated":t.onStepValidated}})],1),a("tab-content",{staticClass:"col-12",attrs:{title:"Last step",icon:"nc-icon nc-check-2"}},[a("div",[a("h2",{staticClass:"text-center text-space"},[t._v("Yuhuuu! "),a("br"),a("small",[t._v('Click on "'),a("b",[t._v("Finish")]),t._v('" to join our community')])])])]),a("button",{staticClass:"btn btn-default btn-fill btn-wd btn-back",attrs:{slot:"prev"},slot:"prev"},[t._v("Back")]),a("button",{staticClass:"btn btn-default btn-fill btn-wd btn-next",attrs:{slot:"next"},slot:"next"},[t._v("Next")]),a("button",{staticClass:"btn btn-success btn-fill btn-wd",attrs:{slot:"finish"},slot:"finish"},[t._v("Finish")])],1)],1)])])])},i=[],r=a("5530"),s=a("2ee4"),o=(a("da93"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"form"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.validate(e)}}},[a("h5",{staticClass:"text-center"},[t._v("Please tell us more about yourself.")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"firstName",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.passed,i=e.failed;return[a("fg-input",{attrs:{name:"firstName",error:i?"The First Name field is required":null,hasSuccess:n,placeholder:"First Name (required)","addon-left-icon":"nc-icon nc-single-02"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})]}}])})],1),a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"lastName",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.passed,i=e.failed;return[a("fg-input",{attrs:{name:"lastName",error:i?"The Last Name field is required":null,hasSuccess:n,placeholder:"Last Name (required)","addon-left-icon":"nc-icon nc-circle-10"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})]}}])})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.passed,i=e.failed;return[a("fg-input",{attrs:{name:"email",error:i?"The Email field is required":null,hasSuccess:n,placeholder:"Email (required)"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})]}}])})],1)])])])}),l=[],c=a("7bb1"),u=a("4c93");Object(c["c"])("required",u["f"]),Object(c["c"])("email",u["b"]);var d,b={data:function(){return{image:"",firstName:"",lastName:"",email:""}},methods:{validate:function(){var t=this;return this.$refs.form.validate().then((function(e){return t.$emit("on-validated",e),e}))}}},f=b,v=a("2877"),h=Object(v["a"])(f,o,l,!1,null,null,null),p=h.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"form"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.validate(e)}}},[a("h5",{staticClass:"text-center"},[t._v("Please give us more details about your platform.")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("ValidationProvider",{attrs:{name:"website",rules:{required:!0,regex:/(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/g}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.passed,i=e.failed;return[a("fg-input",{attrs:{name:"website",type:"text",error:i?"The Website field is required & URL matching":null,hasSuccess:n,placeholder:"ex: http://www.creative-tim.com",label:"Your website"},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}})]}}])})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"framework",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.passed,i=e.failed;return[a("fg-input",{attrs:{name:"framework",error:i?"The Framework field is required":null,hasSuccess:n,placeholder:"ex: Vue.js",label:"Framework Type"},model:{value:t.framework,callback:function(e){t.framework=e},expression:"framework"}})]}}])})],1),a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"language",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.failed;return[a("fg-input",{attrs:{label:"Language",error:n?"The Language field is required":null}},[a("el-select",{staticClass:"select-default",attrs:{name:"language"},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},t._l(t.languageOptions,(function(t){return a("el-option",{key:t.value,staticClass:"select-default",attrs:{label:t.label,value:t.value}})})),1)],1)]}}])})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"bootstrap version",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.failed;return[a("fg-input",{attrs:{name:"bootstrap version",error:n?"The Bootstrap field is required":null,label:"Bootstrap version"}},[a("el-select",{staticClass:"select-default",model:{value:t.bootstrapVersion,callback:function(e){t.bootstrapVersion=e},expression:"bootstrapVersion"}},[a("el-option",{staticClass:"select-default",attrs:{value:"1.1"}},[t._v("Bootstrap 1.1")]),a("el-option",{staticClass:"select-default",attrs:{value:"2.0"}},[t._v("Bootstrap 2.0")]),a("el-option",{staticClass:"select-default",attrs:{value:"3.0"}},[t._v("Bootstrap 3.0")]),a("el-option",{staticClass:"select-default",attrs:{value:"4.0"}},[t._v("Bootstrap 4.0(alpha)")])],1)],1)]}}])})],1),a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"price",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.failed;return[a("fg-input",{attrs:{name:"price",label:"Price",error:n?"The Bootstrap field is required":null}},[a("el-input-number",{attrs:{placeholder:"ex: 19.00",name:"price"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)]}}])})],1)])])])},g=[],x=a("ade3"),T=(a("6611"),a("450d"),a("e772")),C=a.n(T),_=(a("1f1a"),a("4e4b")),y=a.n(_);a("b0c0");Object(c["c"])("required",u["f"]),Object(c["c"])("email",u["b"]),Object(c["c"])("regex",u["e"]);var S={components:(d={},Object(x["a"])(d,y.a.name,y.a),Object(x["a"])(d,C.a.name,C.a),d),data:function(){return{languageOptions:[{value:"",label:"- language -"},{value:"ms",label:"Bahasa Melayu"},{value:"ca",label:"Català"},{value:"da",label:"Dansk"},{value:"de",label:"Deutsch"},{value:"en",label:"English"},{value:"es",label:"Español"},{value:"el",label:"Eλληνικά"},{value:"fr",label:"Français"},{value:"it",label:"Italiano"},{value:"hu",label:"Magyar"},{value:"nl",label:"Nederlands"},{value:"no",label:"Norsk"},{value:"pl",label:"Polski"},{value:"pt",label:"Português"},{value:"fi",label:"Suomi"},{value:"sv",label:"Svenska"},{value:"tr",label:"Türkçe"},{value:"is",label:"Íslenska"},{value:"cs",label:"Čeština"},{value:"ru",label:"Русский"},{value:"th",label:"ภาษาไทย"},{value:"zh",label:"中文 (简体)"},{value:"zh-TW",label:"中文 (繁體)"},{value:"ja",label:"日本語"},{value:"ko",label:"한국어"}],website:"",framework:"",language:"",bootstrapVersion:"",price:""}},methods:{validate:function(){var t=this;return this.$refs.form.validate().then((function(e){return t.$emit("on-validated",e),e}))}}},k=S,w=Object(v["a"])(k,m,g,!1,null,null,null),I=w.exports,z=a("3d20"),B=a.n(z),O={data:function(){return{wizardModel:{}}},components:{FormWizard:s["FormWizard"],TabContent:s["TabContent"],FirstStep:p,SecondStep:I},methods:{validateStep:function(t){return this.$refs[t].validate()},onStepValidated:function(t,e){this.wizardModel=Object(r["a"])(Object(r["a"])({},this.wizardModel),e)},wizardComplete:function(){B.a.fire({title:"Good job!",text:"You clicked the finish button!",type:"success",confirmButtonClass:"btn btn-success",buttonsStyling:!1})}}},E=O,P=(a("7394"),Object(v["a"])(E,n,i,!1,null,null,null));e["default"]=P.exports},7394:function(t,e,a){"use strict";a("2f40")},da93:function(t,e,a){}}]);
//# sourceMappingURL=chunk-54f67516.12177ac8.js.map