(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{535:function(e,t,r){},536:function(e,t,r){},549:function(e,t,r){"use strict";r(535)},550:function(e,t,r){"use strict";r(536)},598:function(e,t,r){"use strict";r.r(t);r(19),r(15),r(18),r(9),r(27),r(20),r(28);var n=r(2),l=r(1),o=(r(37),r(25),r(104),r(0)),c=r(122),d=r(169),m=r(162),f=r(43),v=r(337),_=r(155),y=r(22),w=r(17),h=r(65),P={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},O=r(3),j=Object(O.a)(P,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"tab"},[e._t("default")],2)}),[],!1,null,null,null).exports,C={props:{mode:{type:String,default:"light"}},data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(0)},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(e,t){e.isActive=t===i}))}}},S=(r(549),Object(O.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tabs"},[r("ul",{staticClass:"tabs__header"},e._l(e.tabs,(function(t,n){return r("li",{key:t.title,class:{tab__selected:n==e.selectedIndex},on:{click:function(t){return e.selectTab(n)}}},[e._v("\n      "+e._s(t.title)+"\n    ")])})),0),e._v(" "),e._t("default")],2)}),[],!1,null,null,null).exports);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(c.c)("email",N(N({},d.b),{},{message:"Invalid email"})),Object(c.c)("required",N(N({},d.g),{},{message:"This field is required"})),Object(c.c)("min",N(N({},d.d),{},{message:"The field should have at least {length} characters"})),Object(c.c)("password",{validate:function(e){return String(e).length>=8&&String(e).match(/[A-Za-z]/gi)&&String(e).match(/[0-9]/gi)},message:"Password must have at least 8 characters including one letter and a number"}),Object(c.c)("confirmed",N(N({},d.a),{},{message:"Passwords don't match"}));var x={name:"PersonalDetails",components:{SfInput:m.a,SfButton:f.a,SfProperty:v.a,SfHeading:_.a,ValidationProvider:c.b,ValidationObserver:c.a,Tab:j,Tabs:S},props:{account:{type:Object,default:function(){return{}}},title:{type:String,default:"My Profile"}},setup:function(){var e=Object(y.o)(),t=e.user,r=e.load,l=e.changePassword,c=e.updateUser,d=Object(o.l)(null),m=Object(o.l)(null),f=Object(o.a)((function(){return y.u.getFirstName(t.value)})),v=Object(o.a)((function(){return y.u.getLastName(t.value)})),_=Object(o.a)((function(){return y.u.getEmailAddress(t.value)})),P=Object(o.a)((function(){return y.u.getPhone(t.value)})),O=Object(o.a)((function(){return y.u.getdisplayName(t.value)})),j=Object(h.b)().send,C=Object(o.l)(!1),form=Object(o.l)({firstName:f.value,lastName:v.value,email:_.value,phone:P.value,displayName:O.value,newPassword:""}),S=function(e,t){return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=8;break}return n.next=4,e({current:"",new:form.value.newPassword}).then((function(){r(),j({key:"password_changed",message:"Password changed successfully.",type:"success",title:"Success!",icon:"check"})}));case 4:form.value.newPassword="",form.value.repeatPassword="",n.next=10;break;case 8:return n.next=10,e({user:form.value}).then((function(){r(),j({key:"profile_success",message:"Profile updated successfully.",type:"success",title:"Success!",icon:"check"})}));case 10:C.value=!1,n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),j({key:"profile_failed",message:n.t0.message,type:"danger",title:"Failed!"}),n.abrupt("return",!1);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))},k=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(l,!0)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(c,!1)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.j)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.value){e.next=6;break}return e.next=3,r();case 3:form.value.email=t.value.email,form.value.firstName=t.value.firstName,form.value.lastName=t.value.lastName;case 6:case"end":return e.stop()}}),e)})))),{user:t,error:m,success:d,form:form,updatePassword:k,updateProfile:N,firstName:f,lastName:v,phone:P,displayName:O,email:_,isEdited:C}},head:function(){return{title:"My Profile",meta:[{hid:"My Profile",name:"My Profile",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis nisi nec sem dapibus vestibulum. Aliquam consectetur venenatis sem. In hac habitasse platea dictumst. Nam semper, quam vitae scelerisque iaculis, quam est ullamcorper ante, eget egestas nunc massa a odio. Fusce eget ligula tempus, luctus ex sit amet, ullamcorper ipsum. Ut id nunc malesuada, ultrices ipsum vel, eleifend metus. Donec vel luctus odio."}]}}},E=x,I=(r(550),Object(O.a)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-profile"},[r("div",{staticClass:"my-profile__title"},[r("SfHeading",{attrs:{level:1,title:e.title}}),e._v(" "),e.isEdited?e._e():[r("SfButton",{staticClass:"edit_action",on:{click:function(t){e.isEdited=!0}}},[e._v("\n        Edit Your Profile\n      ")])]],2),e._v(" "),e.isEdited?r("div",{staticClass:"my-profile__content container-small"},[r("tabs",[r("tab",{attrs:{title:"Personal Data"}},[r("ValidationObserver",{attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),n(e.updateProfile)}}},[r("div",{staticClass:"row"},[r("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div",rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_firstName",name:"firstName",label:"First Name",valid:!n[0],"error-message":n[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div",rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_lastName",name:"lastName",label:"Last Name",valid:!n[0],"error-message":n[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),r("ValidationProvider",{attrs:{tag:"div",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_email",type:"email",name:"email",label:"Your e-mail",valid:!n[0],"error-message":n[0],disabled:!0},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}],null,!0)}),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update",type:"submit"}},[e._v("Update Profile")])],1),e._v(" "),r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},on:{click:function(t){e.isEdited=!1}}},[e._v("Cancel")])],1)])],1)]}}],null,!1,1169470083)})],1),e._v(" "),r("tab",{attrs:{title:"Password Change"}},[r("ValidationObserver",{attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),n(e.updatePassword)}}},[r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{attrs:{tag:"div",rules:"required|min:5",vid:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_newPassword",type:"password",name:"newPassword",label:"New Password",valid:!n[0],"error-message":n[0]},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{tag:"div",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_repeatPassword",type:"password",name:"repeatPassword",label:"Repeat Password",valid:!n[0],"error-message":n[0]},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update-password",type:"submit"}},[e._v("Change password")])],1),e._v(" "),r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},nativeOn:{click:function(t){e.isEdited=!1}}},[e._v("Cancel")])],1)])])]}}],null,!1,1191137801)})],1)],1)],1):r("div",{staticClass:"user_profile_detail my-profile__content"},[e.displayName?r("SfProperty",{staticClass:"my-profile-cname",attrs:{name:"Name",value:e.displayName}}):e._e(),e._v(" "),e.email?r("SfProperty",{staticClass:"my-profile-cemail",attrs:{name:"Email",value:e.email}}):e._e(),e._v(" "),e.phone?r("SfProperty",{staticClass:"my-profile-cmobile",attrs:{name:"Mobile",value:e.phone}}):e._e()],1)])}),[],!1,null,null,null));t.default=I.exports}}]);