(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34a77ca2"],{"0798":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("ade3"),s=(r("0c18"),r("10d2")),o=r("afdd"),n=r("9d26"),a=r("f2e7"),c=r("7560"),l=r("2b0e"),u=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r("58df"),h=r("d9bd");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(d["a"])(s["a"],a["a"],u).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(i["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(o["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(n["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(n["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=f({},s["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},"61e9":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"4"}},[t.error?r("v-alert",{attrs:{type:"error"},domProps:{innerHTML:t._s(t.error)}}):t._e(),r("v-card",[r("v-list-item",{attrs:{"tow-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline mb-1"},[t._v("Register Form")]),r("v-list-item-subtitle",[t._v("register to view users and resources")])],1)],1),r("v-divider"),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),r("v-text-field",{attrs:{rules:t.passwordRules,label:"Password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("v-btn",{attrs:{text:"",type:"submit",loading:t.loading}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)},s=[],o={name:"LoginPage",data:function(){return{valid:!1,form:{email:null,password:null},emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Name is required"}]}},computed:{error:function(){return this.$store.getters["user/getError"]},userIsAuth:function(){return this.$store.getters["user/getUserIsAuth"]},loading:function(){return this.$store.getters["user/getLoading"]}},methods:{register:function(){this.valid?this.$store.dispatch("user/registerUser",this.form):this.$store.dispatch("user/setRegisterError")}},created:function(){this.userIsAuth&&this.$router.push({name:"resources"})}},n=o,a=r("2877"),c=r("6544"),l=r.n(c),u=r("0798"),d=r("8336"),h=r("b0af"),p=r("62ad"),f=r("a523"),v=r("ce7e"),b=r("4bd4"),m=r("da13"),g=r("5d23"),y=r("0fd9b"),O=r("8654"),w=Object(a["a"])(n,i,s,!1,null,null,null);e["default"]=w.exports;l()(w,{VAlert:u["a"],VBtn:d["a"],VCard:h["a"],VCol:p["a"],VContainer:f["a"],VDivider:v["a"],VForm:b["a"],VListItem:m["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VRow:y["a"],VTextField:O["a"]})},"8ce9":function(t,e,r){},afdd:function(t,e,r){"use strict";var i=r("8336");e["a"]=i["a"]},ce7e:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("ade3"),s=(r("8ce9"),r("7560"));function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:n({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:n({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-34a77ca2.7d35b422.js.map