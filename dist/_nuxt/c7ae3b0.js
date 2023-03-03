(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{519:function(e,t,n){},520:function(e,t,n){"use strict";n(519)},525:function(e,t,n){},537:function(e,t,n){"use strict";n(525)},538:function(e,t,n){},543:function(e,t,n){"use strict";var r=n(506),l=n(509),o=(n(50),{name:"SfSelectOption",props:{value:{type:[String,Number,Object],default:""}}}),c=n(3),d=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("option",{staticClass:"sf-select__option",attrs:{tabindex:"0"},domProps:{value:e.value}},[e._t("default")],2)}),[],!1,null,null,null).exports;n(6).default.component("SfSelectOption",d);var f={name:"SfSelect",directives:{focus:r.a,willChange:l.a},props:{label:{type:String,default:""},required:{type:Boolean,default:!1},valid:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:"This field is not correct."},value:{type:String,default:""},placeholder:{type:String,default:""}},methods:{changeHandler:function(e){this.$emit("input",e.target.value)}}},v=(n(520),Object(c.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"will-change",rawName:"v-will-change",value:"font-size",expression:"'font-size'"}],staticClass:"sf-select",class:{"is-selected":e.value||e.placeholder,"is-required":e.required,"is-disabled":e.disabled,"is-invalid":!e.valid}},[n("label",{staticClass:"sf-select__label will-change",attrs:{for:e.label}},[e._t("label",(function(){return[e._v("\n      "+e._s(e.label)+"\n    ")]}),{label:e.label})],2),e._v(" "),n("select",e._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-select__dropdown",attrs:{id:e.label,disabled:e.disabled},domProps:{value:e.value},on:{change:e.changeHandler}},"select",e.$attrs,!1),[e.placeholder?n("option",{staticClass:"sf-select__placeholder sf-select__option",attrs:{disabled:"",value:"",label:e.placeholder},domProps:{selected:!!e.placeholder}},[e._t("placeholder",null,null,{placeholder:e.placeholder}),e._v("\n      "+e._s(e.placeholder)+"\n    ")],2):e._e(),e._v(" "),e._t("default")],2),e._v(" "),n("div",{staticClass:"sf-select__error-message"},[n("transition",{attrs:{name:"sf-fade"}},[e._t("errorMessage",(function(){return[n("span",{class:{"display-none":e.valid}},[e._v("\n          "+e._s(e.errorMessage)+"\n        ")])]}),null,{errorMessage:e.errorMessage})],2)],1)])}),[],!1,null,null,null));t.a=v.exports},551:function(e,t,n){"use strict";n(538)},599:function(e,t,n){"use strict";n.r(t);var r=n(2),l=(n(37),n(43)),o=n(46),c=n(155),d=n(517),f=n(604),v=n(554),_=n(555),m=n(22),h=n(0),y=n(17),w=n(216),S={name:"AdressBook",components:{SfButton:l.a,SfIcon:o.a,SfHeading:c.a,SfLoader:d.a,SfNotification:f.a,UserBillingAddress:_.a,BillingAddressForm:v.a},props:{title:{type:String,default:"Address Book"}},setup:function(){var e=Object(m.p)(),t=e.billing,n=e.load,l=e.addAddress,o=e.deleteAddress,c=e.updateAddress,d=e.loading,f=Object(h.a)((function(){return m.t.getAddresses(t.value)})),v=Object(h.l)(!1),_=Object(h.l)(void 0),S=Object(h.a)((function(){return!_.value})),C=Object(w.a)().send,A=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({address:address}).then((function(){t.value?(n(),C({key:"address_removed",message:"Address has been removed successfully",type:"success",title:"Address removed!",icon:"check"})):C({key:"address_removed",message:"Something went wrong, please retry",type:"danger",title:"Remove address failed!"})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r){var form,o,d,f,m,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form=r.form,o=r.onComplete,d=r.onError,e.prev=1,f=S.value?l:c,m="Addressbook updated successfully",S.value&&(m="Address added successfully"),e.next=7,f({address:form.value}).then((function(){t.value?(n(),C({key:"address_success",message:m,type:"success",title:"Success!",icon:"check"})):C({key:"address_failed",message:"Somethig went wrong, please retry",type:"danger",title:"Failed!"})}));case 7:return data=e.sent,v.value=!1,_.value=void 0,e.next=12,o(data);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.j)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:case"end":return e.stop()}}),e)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;_.value=address,v.value=!0},updateAddress:c,removeAddress:A,saveAddress:k,userBillingGetters:m.t,addresses:f,edittingAddress:v,activeAddress:_,isNewAddress:S,loading:d}},data:function(){return{visible:!1,addressToRemove:{}}},methods:{ConfirmRemove:function(address){this.visible=!0,this.addressToRemove=address},handleRemove:function(address){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoadervisible=!0,t.next=3,e.removeAddress(address).then((function(){e.visible=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},C=S,A=(n(551),n(3)),component=Object(A.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my_account_content_wrap"},[n("div",{staticClass:"my_accoutn_title_wrap"},[n("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}})],1),e._v(" "),e.edittingAddress?n("div",{staticClass:"tab-orphan"},[n("div",{attrs:{"data-cy":"billing-details-tab_change"}},[n("BillingAddressForm",{attrs:{address:e.activeAddress,"is-new":e.isNewAddress},on:{submit:e.saveAddress}})],1)]):n("div",{staticClass:"tab-orphan"},[n("transition",{attrs:{name:"sf-collapse-top",mode:"out-in"}},[n("div",{staticClass:"notifications"},[e.loading?e._e():n("SfNotification",{attrs:{visible:e.visible,title:"Are you sure?",message:"Are you sure you would like to remove this address from your account?",type:"secondary"},scopedSlots:e._u([{key:"action",fn:function(){return[n("div",{staticClass:"button-wrap"},[n("SfButton",{on:{click:function(t){return e.handleRemove(e.addressToRemove)}}},[e._v("Yes")]),e._v(" "),n("SfButton",{on:{click:function(t){e.visible=!1}}},[e._v("Cancel")])],1)]},proxy:!0},{key:"close",fn:function(){return[n("div")]},proxy:!0}],null,!1,1994956572)})],1)]),e._v(" "),e.loading?n("SfLoader",{staticClass:"address-loader",class:{loading:e.loading},attrs:{loading:e.loading}},[n("div")]):e._e(),e._v(" "),e.loading?e._e():n("div",{attrs:{"data-cy":"billing-details-tab_details"}},[n("div",{staticClass:"billing-list"},[e._l(e.addresses,(function(address){return n("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[n("div",{staticClass:"billing__wrap"},[n("div",{staticClass:"billing__content"},[n("div",{staticClass:"billing__address"},[n("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),n("div",{staticClass:"billing__actions"},[n("SfButton",{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{click:function(t){e.changeAddress(address),e.scrollToTop()}}},[e._v("\n                Edit\n              ")]),e._v(" "),n("SfButton",{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{click:function(t){return e.ConfirmRemove(address)}}},[e._v("\n                Delete\n              ")])],1)])])})),e._v(" "),n("div",{staticClass:"billing add-address-btn"},[n("div",{staticClass:"billing__wrap",on:{click:function(t){e.changeAddress(),e.scrollToTop()}}},[n("SfButton",{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[n("SfIcon",{attrs:{icon:"plus"}}),e._v("\n              Add Address\n            ")],1)],1)])],2)])],1)])}),[],!1,null,"5fa24fe5",null);t.default=component.exports},604:function(e,t,n){"use strict";n(41);var r=n(46),l=n(43),o={name:"SfNotification",components:{SfIcon:r.a,SfButton:l.a},props:{visible:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},action:{type:String,default:""},type:{type:String,default:"secondary",validator:function(e){return["secondary","info","success","warning","danger"].includes(e)}}},computed:{icon:function(){switch(this.type){case"success":return"added_to_cart";case"danger":return"info_shield";default:return"info_circle"}},colorClass:function(){switch(this.type){case"secondary":return"color-secondary";case"info":default:return"color-info";case"success":return"color-success";case"warning":return"color-warning";case"danger":return"color-danger"}}},methods:{actionHandler:function(){this.$emit("click:action")},closeHandler:function(){this.$emit("click:close")}}},c=(n(537),n(3)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"sf-fade"}},[n("div",{staticClass:"sf-notification",class:[{"display-none":!e.visible},e.colorClass]},[e._t("icon",(function(){return[n("SfIcon",{staticClass:"sf-notification__icon",class:{"display-none":!e.icon},attrs:{icon:e.icon,size:"lg",color:"white"}})]}),null,{icon:e.icon}),e._v(" "),n("div",[e._t("title",(function(){return[n("div",{staticClass:"sf-notification__title smartphone-only",class:{"display-none":!e.title}},[e._v("\n          "+e._s(e.title)+"\n        ")])]}),null,{title:e.title}),e._v(" "),e._t("message",(function(){return[n("span",{staticClass:"sf-notification__message",class:{"display-none":!e.message}},[e._v(e._s(e.message))])]}),null,{message:e.message}),e._v(" "),e._t("action",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-notification__action",class:{"display-none":!e.action},on:{click:e.actionHandler}},[e._v("\n          "+e._s(e.action)+"\n        ")])]}),null,{action:e.action,actionHandler:e.actionHandler})],2),e._v(" "),e._t("close",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-notification__close",class:{"display-none":e.persistent},attrs:{"aria-label":"Close notification"},on:{click:e.closeHandler}},[n("SfIcon",{attrs:{icon:"cross",color:"white"}})],1)]}),null,{closeHandler:e.closeHandler})],2)])}),[],!1,null,null,null);t.a=component.exports}}]);