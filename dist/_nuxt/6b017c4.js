(window.webpackJsonp=window.webpackJsonp||[]).push([[14,29],{535:function(e,t,r){},536:function(e,t,r){},538:function(e,t,r){},549:function(e,t,r){"use strict";r(535)},550:function(e,t,r){"use strict";r(536)},551:function(e,t,r){"use strict";r(538)},581:function(e,t,r){},598:function(e,t,r){"use strict";r.r(t);r(19),r(15),r(18),r(9),r(27),r(20),r(28);var n=r(2),c=r(1),o=(r(37),r(25),r(104),r(0)),l=r(122),d=r(169),f=r(162),m=r(43),v=r(337),_=r(155),y=r(22),h=r(17),w=r(65),k={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},O=r(3),P=Object(O.a)(k,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"tab"},[e._t("default")],2)}),[],!1,null,null,null).exports,C={props:{mode:{type:String,default:"light"}},data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(0)},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(e,t){e.isActive=t===i}))}}},S=(r(549),Object(O.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tabs"},[r("ul",{staticClass:"tabs__header"},e._l(e.tabs,(function(t,n){return r("li",{key:t.title,class:{tab__selected:n==e.selectedIndex},on:{click:function(t){return e.selectTab(n)}}},[e._v("\n      "+e._s(t.title)+"\n    ")])})),0),e._v(" "),e._t("default")],2)}),[],!1,null,null,null).exports);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(l.c)("email",x(x({},d.b),{},{message:"Invalid email"})),Object(l.c)("required",x(x({},d.g),{},{message:"This field is required"})),Object(l.c)("min",x(x({},d.d),{},{message:"The field should have at least {length} characters"})),Object(l.c)("password",{validate:function(e){return String(e).length>=8&&String(e).match(/[A-Za-z]/gi)&&String(e).match(/[0-9]/gi)},message:"Password must have at least 8 characters including one letter and a number"}),Object(l.c)("confirmed",x(x({},d.a),{},{message:"Passwords don't match"}));var A={name:"PersonalDetails",components:{SfInput:f.a,SfButton:m.a,SfProperty:v.a,SfHeading:_.a,ValidationProvider:l.b,ValidationObserver:l.a,Tab:P,Tabs:S},props:{account:{type:Object,default:function(){return{}}},title:{type:String,default:"My Profile"}},setup:function(){var e=Object(y.o)(),t=e.user,r=e.load,c=e.changePassword,l=e.updateUser,d=Object(o.l)(null),f=Object(o.l)(null),m=Object(o.a)((function(){return y.u.getFirstName(t.value)})),v=Object(o.a)((function(){return y.u.getLastName(t.value)})),_=Object(o.a)((function(){return y.u.getEmailAddress(t.value)})),k=Object(o.a)((function(){return y.u.getPhone(t.value)})),O=Object(o.a)((function(){return y.u.getdisplayName(t.value)})),P=Object(w.b)().send,C=Object(o.l)(!1),form=Object(o.l)({firstName:m.value,lastName:v.value,email:_.value,phone:k.value,displayName:O.value,newPassword:""}),S=function(e,t){return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=8;break}return n.next=4,e({current:"",new:form.value.newPassword}).then((function(){r(),P({key:"password_changed",message:"Password changed successfully.",type:"success",title:"Success!",icon:"check"})}));case 4:form.value.newPassword="",form.value.repeatPassword="",n.next=10;break;case 8:return n.next=10,e({user:form.value}).then((function(){r(),P({key:"profile_success",message:"Profile updated successfully.",type:"success",title:"Success!",icon:"check"})}));case 10:C.value=!1,n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),P({key:"profile_failed",message:n.t0.message,type:"danger",title:"Failed!"}),n.abrupt("return",!1);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))},j=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(c,!0)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(l,!1)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.j)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.value){e.next=6;break}return e.next=3,r();case 3:form.value.email=t.value.email,form.value.firstName=t.value.firstName,form.value.lastName=t.value.lastName;case 6:case"end":return e.stop()}}),e)})))),{user:t,error:f,success:d,form:form,updatePassword:j,updateProfile:x,firstName:m,lastName:v,phone:k,displayName:O,email:_,isEdited:C}},head:function(){return{title:"My Profile",meta:[{hid:"My Profile",name:"My Profile",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis nisi nec sem dapibus vestibulum. Aliquam consectetur venenatis sem. In hac habitasse platea dictumst. Nam semper, quam vitae scelerisque iaculis, quam est ullamcorper ante, eget egestas nunc massa a odio. Fusce eget ligula tempus, luctus ex sit amet, ullamcorper ipsum. Ut id nunc malesuada, ultrices ipsum vel, eleifend metus. Donec vel luctus odio."}]}}},N=A,R=(r(550),Object(O.a)(N,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-profile"},[r("div",{staticClass:"my-profile__title"},[r("SfHeading",{attrs:{level:1,title:e.title}}),e._v(" "),e.isEdited?e._e():[r("SfButton",{staticClass:"edit_action",on:{click:function(t){e.isEdited=!0}}},[e._v("\n        Edit Your Profile\n      ")])]],2),e._v(" "),e.isEdited?r("div",{staticClass:"my-profile__content container-small"},[r("tabs",[r("tab",{attrs:{title:"Personal Data"}},[r("ValidationObserver",{attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),n(e.updateProfile)}}},[r("div",{staticClass:"row"},[r("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div",rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_firstName",name:"firstName",label:"First Name",valid:!n[0],"error-message":n[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div",rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_lastName",name:"lastName",label:"Last Name",valid:!n[0],"error-message":n[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),r("ValidationProvider",{attrs:{tag:"div",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_email",type:"email",name:"email",label:"Your e-mail",valid:!n[0],"error-message":n[0],disabled:!0},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}],null,!0)}),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update",type:"submit"}},[e._v("Update Profile")])],1),e._v(" "),r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},on:{click:function(t){e.isEdited=!1}}},[e._v("Cancel")])],1)])],1)]}}],null,!1,1169470083)})],1),e._v(" "),r("tab",{attrs:{title:"Password Change"}},[r("ValidationObserver",{attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),n(e.updatePassword)}}},[r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{attrs:{tag:"div",rules:"required|min:5",vid:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_newPassword",type:"password",name:"newPassword",label:"New Password",valid:!n[0],"error-message":n[0]},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{tag:"div",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_repeatPassword",type:"password",name:"repeatPassword",label:"Repeat Password",valid:!n[0],"error-message":n[0]},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update-password",type:"submit"}},[e._v("Change password")])],1),e._v(" "),r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},nativeOn:{click:function(t){e.isEdited=!1}}},[e._v("Cancel")])],1)])])]}}],null,!1,1191137801)})],1)],1)],1):r("div",{staticClass:"user_profile_detail my-profile__content"},[e.displayName?r("SfProperty",{staticClass:"my-profile-cname",attrs:{name:"Name",value:e.displayName}}):e._e(),e._v(" "),e.email?r("SfProperty",{staticClass:"my-profile-cemail",attrs:{name:"Email",value:e.email}}):e._e(),e._v(" "),e.phone?r("SfProperty",{staticClass:"my-profile-cmobile",attrs:{name:"Mobile",value:e.phone}}):e._e()],1)])}),[],!1,null,null,null));t.default=R.exports},599:function(e,t,r){"use strict";r.r(t);var n=r(2),c=(r(37),r(43)),o=r(46),l=r(155),d=r(517),f=r(604),m=r(554),v=r(555),_=r(22),y=r(0),h=r(17),w=r(216),k={name:"AdressBook",components:{SfButton:c.a,SfIcon:o.a,SfHeading:l.a,SfLoader:d.a,SfNotification:f.a,UserBillingAddress:v.a,BillingAddressForm:m.a},props:{title:{type:String,default:"Address Book"}},setup:function(){var e=Object(_.p)(),t=e.billing,r=e.load,c=e.addAddress,o=e.deleteAddress,l=e.updateAddress,d=e.loading,f=Object(y.a)((function(){return _.t.getAddresses(t.value)})),m=Object(y.l)(!1),v=Object(y.l)(void 0),k=Object(y.a)((function(){return!v.value})),O=Object(w.a)().send,P=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({address:address}).then((function(){t.value?(r(),O({key:"address_removed",message:"Address has been removed successfully",type:"success",title:"Address removed!",icon:"check"})):O({key:"address_removed",message:"Something went wrong, please retry",type:"danger",title:"Remove address failed!"})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(n){var form,o,d,f,_,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form=n.form,o=n.onComplete,d=n.onError,e.prev=1,f=k.value?c:l,_="Addressbook updated successfully",k.value&&(_="Address added successfully"),e.next=7,f({address:form.value}).then((function(){t.value?(r(),O({key:"address_success",message:_,type:"success",title:"Success!",icon:"check"})):O({key:"address_failed",message:"Somethig went wrong, please retry",type:"danger",title:"Failed!"})}));case 7:return data=e.sent,m.value=!1,v.value=void 0,e.next=12,o(data);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.j)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;v.value=address,m.value=!0},updateAddress:l,removeAddress:P,saveAddress:C,userBillingGetters:_.t,addresses:f,edittingAddress:m,activeAddress:v,isNewAddress:k,loading:d}},data:function(){return{visible:!1,addressToRemove:{}}},methods:{ConfirmRemove:function(address){this.visible=!0,this.addressToRemove=address},handleRemove:function(address){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoadervisible=!0,t.next=3,e.removeAddress(address).then((function(){e.visible=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},O=k,P=(r(551),r(3)),component=Object(P.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my_account_content_wrap"},[r("div",{staticClass:"my_accoutn_title_wrap"},[r("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}})],1),e._v(" "),e.edittingAddress?r("div",{staticClass:"tab-orphan"},[r("div",{attrs:{"data-cy":"billing-details-tab_change"}},[r("BillingAddressForm",{attrs:{address:e.activeAddress,"is-new":e.isNewAddress},on:{submit:e.saveAddress}})],1)]):r("div",{staticClass:"tab-orphan"},[r("transition",{attrs:{name:"sf-collapse-top",mode:"out-in"}},[r("div",{staticClass:"notifications"},[e.loading?e._e():r("SfNotification",{attrs:{visible:e.visible,title:"Are you sure?",message:"Are you sure you would like to remove this address from your account?",type:"secondary"},scopedSlots:e._u([{key:"action",fn:function(){return[r("div",{staticClass:"button-wrap"},[r("SfButton",{on:{click:function(t){return e.handleRemove(e.addressToRemove)}}},[e._v("Yes")]),e._v(" "),r("SfButton",{on:{click:function(t){e.visible=!1}}},[e._v("Cancel")])],1)]},proxy:!0},{key:"close",fn:function(){return[r("div")]},proxy:!0}],null,!1,1994956572)})],1)]),e._v(" "),e.loading?r("SfLoader",{staticClass:"address-loader",class:{loading:e.loading},attrs:{loading:e.loading}},[r("div")]):e._e(),e._v(" "),e.loading?e._e():r("div",{attrs:{"data-cy":"billing-details-tab_details"}},[r("div",{staticClass:"billing-list"},[e._l(e.addresses,(function(address){return r("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[r("div",{staticClass:"billing__wrap"},[r("div",{staticClass:"billing__content"},[r("div",{staticClass:"billing__address"},[r("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),r("div",{staticClass:"billing__actions"},[r("SfButton",{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{click:function(t){e.changeAddress(address),e.scrollToTop()}}},[e._v("\n                Edit\n              ")]),e._v(" "),r("SfButton",{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{click:function(t){return e.ConfirmRemove(address)}}},[e._v("\n                Delete\n              ")])],1)])])})),e._v(" "),r("div",{staticClass:"billing add-address-btn"},[r("div",{staticClass:"billing__wrap",on:{click:function(t){e.changeAddress(),e.scrollToTop()}}},[r("SfButton",{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[r("SfIcon",{attrs:{icon:"plus"}}),e._v("\n              Add Address\n            ")],1)],1)])],2)])],1)])}),[],!1,null,"5fa24fe5",null);t.default=component.exports},630:function(e,t,r){"use strict";r(581)},684:function(e,t,r){"use strict";r.r(t);var n=r(2),c=(r(37),r(25),r(85),r(69),r(45),r(603)),o=r(672),l=r(316),d=r(0),f=r(22),m=r(598),v=r(599),_=r(656),y=r(17),h=r(216),w={name:"MyAccount",components:{SfBreadcrumbs:c.a,SfContentPages:o.a,SfMenuItem:l.a,MyProfile:m.default,AdressBook:v.default,OrderHistory:_.default},middleware:"authenticated",setup:function(e,t){var r=t.root,c=r.$router,o=r.$route,l=Object(f.o)(),m=l.logout,v=l.load,_=l.user,w=Object(f.j)("UpdateNewsletterPreference"),k=w.loading,O=w.content,P=w.search,C=Object(h.a)().send,S=Object(d.l)("");S=Object(d.a)((function(){return f.u.getToken(_.value)}));var j=Object(d.a)((function(){return f.u.AcceptsMarketingStatus(_.value)})),x=Object(d.a)((function(){return f.u.getEmailAddress(_.value)})),A=Object(d.a)((function(){return f.u.getCleanID(_.value)}));if(""!==S.value){var N=Object(d.a)((function(){var e=o.params.pageName;return e?(e.charAt(0).toUpperCase()+e.slice(1)).replace("-"," "):"my-profile"})),R=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(title){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Log out"!==title){e.next=6;break}return e.next=3,m();case 3:return c.push("/"),C({key:"logout_success",message:"You are successfully logged out",type:"success",icon:"check",title:"Loguut success"}),e.abrupt("return",!1);case 6:c.push("/my-account/".concat((title||"").toLowerCase().replace(" ","-")));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.j)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:case"end":return e.stop()}}),e)})))),Object(d.f)((function(){R(N.value)})),{loadUser:v,changeActivePage:R,activePage:N,acceptsMarketing:j,UpdateNewsletterPreference:P,email:x,id:A,NewsletterStatus:O,sendNotification:C,newsLetterLoading:k}}c.push("/")},data:function(){return{breadcrumbs:[{text:"Home",link:"/"},{text:"My Account",link:"/my-account"},{text:this.activePage,link:"#"}],currentPage:this.activePage}},methods:{updateNewsletterPreference:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.UpdateNewsletterPreference({ContentType:"updatePreferences",Email:t.email,isSubscribed:e,customerId:t.id}).then((function(){t.sendNotification({key:"preferences_updated",message:t.NewsletterStatus,type:"success",icon:"check",title:"Subscribed status"})}));case 2:return r.next=4,t.loadUser();case 4:case"end":return r.stop()}}),r)})))()}}},k=w,O=(r(630),r(3)),component=Object(O.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"my-account"}},[r("SfBreadcrumbs",{staticClass:"breadcrumbs",attrs:{breadcrumbs:e.breadcrumbs},scopedSlots:e._u([{key:"link",fn:function(t){var n=t.breadcrumb;return[r("nuxt-link",{staticClass:"sf-link disable-active-link sf-breadcrumbs__breadcrumb",attrs:{"data-testid":n.text,to:n.link?e.localePath(n.link):""}},[e._v("\n        "+e._s(n.text)+"\n      ")])]}}])}),e._v(" "),r("SfContentPages",{staticClass:"my-account",attrs:{"data-cy":"account_content-pages",active:e.currentPage,title:"Menu"},on:{"click:change":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"menu-item",fn:function(t){var n=t.page;return[r("SfMenuItem",{staticClass:"sf-content-pages__menu",class:{"is-active":n.title===e.activePage},attrs:{label:"Billing details"===n.title?"Address Book":"Order history"===n.title?"My Orders":n.title,icon:""},on:{click:function(t){return e.changeActivePage(n.title)}}})]}}])},[e._v(" "),r("SfContentPage",{attrs:{"data-cy":"Account-my-profile",title:"My profile"}},[r("MyProfile")],1),e._v(" "),r("SfContentPage",{attrs:{"data-cy":"Account-address-book",title:"Billing details"}},[r("AdressBook")],1),e._v(" "),r("SfContentPage",{attrs:{"data-cy":"Account-my-orders",title:"Order history"}},[r("OrderHistory")],1),e._v(" "),r("SfContentPage",{attrs:{"data-cy":"account-page_log-out",title:"Log out"}})],1)],1)}),[],!1,null,"45fa6200",null);t.default=component.exports}}]);