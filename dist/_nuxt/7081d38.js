(window.webpackJsonp=window.webpackJsonp||[]).push([[17,31],{519:function(t,e,n){},520:function(t,e,n){"use strict";n(519)},524:function(t,e,n){},525:function(t,e,n){},529:function(t,e,n){"use strict";n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return m}));n(25),n(19);var l,c,r=n(6),o={small:(c=1024,"(max-width: ".concat(c-1,"px)")),large:function(t){return"(min-width: ".concat(t,"px)")}(1024)},f=function(){return!(!navigator||!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))},d=function(t,e){e.matches&&(l.size=t,l.isMobileDevice=f(),l.isSmall="small"===t)},_=function(){return l||(l=r.default.observable({isSmall:!1,isMobileDevice:f(),size:"large",mediaQueries:o,isInitialized:!1})),{isMobile:{get:function(){return l&&function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&window.matchMedia){for(var t=function(){var t=n[e],l=window.matchMedia(o[t]);d(t,l);try{l.addEventListener("change",d.bind(null,t))}catch(e){try{l.addListener(d.bind(null,t))}catch(t){console.error(t)}}window.addEventListener("DOMContentLoaded",(function(){d(t,window.matchMedia(o[t]))}))},e=0,n=Object.keys(o);e<n.length;e++)t();l.isInitialized=!0}}(),!!l&&l.isMobileDevice}},mobileObserverIsInitialized:{get:function(){return!!l&&l.isInitialized}}}},m=function(){"undefined"!=typeof window&&"undefined"!=typeof document&&window.matchMedia&&window.matchMedia(o[l.size]).removeListener(d)}},534:function(t,e,n){"use strict";n(524)},537:function(t,e,n){"use strict";n(525)},539:function(t,e,n){},543:function(t,e,n){"use strict";var l=n(506),c=n(509),r=(n(50),{name:"SfSelectOption",props:{value:{type:[String,Number,Object],default:""}}}),o=n(3),f=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("option",{staticClass:"sf-select__option",attrs:{tabindex:"0"},domProps:{value:t.value}},[t._t("default")],2)}),[],!1,null,null,null).exports;n(6).default.component("SfSelectOption",f);var d={name:"SfSelect",directives:{focus:l.a,willChange:c.a},props:{label:{type:String,default:""},required:{type:Boolean,default:!1},valid:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:"This field is not correct."},value:{type:String,default:""},placeholder:{type:String,default:""}},methods:{changeHandler:function(t){this.$emit("input",t.target.value)}}},_=(n(520),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"will-change",rawName:"v-will-change",value:"font-size",expression:"'font-size'"}],staticClass:"sf-select",class:{"is-selected":t.value||t.placeholder,"is-required":t.required,"is-disabled":t.disabled,"is-invalid":!t.valid}},[n("label",{staticClass:"sf-select__label will-change",attrs:{for:t.label}},[t._t("label",(function(){return[t._v("\n      "+t._s(t.label)+"\n    ")]}),{label:t.label})],2),t._v(" "),n("select",t._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-select__dropdown",attrs:{id:t.label,disabled:t.disabled},domProps:{value:t.value},on:{change:t.changeHandler}},"select",t.$attrs,!1),[t.placeholder?n("option",{staticClass:"sf-select__placeholder sf-select__option",attrs:{disabled:"",value:"",label:t.placeholder},domProps:{selected:!!t.placeholder}},[t._t("placeholder",null,null,{placeholder:t.placeholder}),t._v("\n      "+t._s(t.placeholder)+"\n    ")],2):t._e(),t._v(" "),t._t("default")],2),t._v(" "),n("div",{staticClass:"sf-select__error-message"},[n("transition",{attrs:{name:"sf-fade"}},[t._t("errorMessage",(function(){return[n("span",{class:{"display-none":t.valid}},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")])]}),null,{errorMessage:t.errorMessage})],2)],1)])}),[],!1,null,null,null));e.a=_.exports},552:function(t,e,n){"use strict";n(539)},580:function(t,e,n){},603:function(t,e,n){"use strict";var l={name:"SfBreadcrumbs",inject:{components:{default:{SfLink:n(75).a}}},props:{breadcrumbs:{type:Array,default:function(){return[]}}},breadcrumbLast:function(t){return t.length-1}},c=(n(534),n(3)),component=Object(c.a)(l,(function(t,e){var n=e._c;return n("nav",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-breadcrumbs"],style:[e.data.style,e.data.staticStyle],attrs:{"aria-label":"breadcrumb"}},"nav",e.data.attrs,!1),e.listeners),[n("ol",{staticClass:"sf-breadcrumbs__list"},e._l(e.props.breadcrumbs,(function(t,i){return n("li",{key:i,staticClass:"sf-breadcrumbs__list-item",attrs:{"aria-current":e.$options.breadcrumbLast(e.props.breadcrumbs)===i&&"page"}},[e.$options.breadcrumbLast(e.props.breadcrumbs)!==i?[e._t("link",(function(){return[n(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb",attrs:{link:t.link,"data-testid":t.text}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]:[e._t("current",(function(){return[n(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{link:t.link}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]],2)})),0)])}),[],!0,null,null,null);e.a=component.exports},604:function(t,e,n){"use strict";n(41);var l=n(46),c=n(43),r={name:"SfNotification",components:{SfIcon:l.a,SfButton:c.a},props:{visible:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},action:{type:String,default:""},type:{type:String,default:"secondary",validator:function(t){return["secondary","info","success","warning","danger"].includes(t)}}},computed:{icon:function(){switch(this.type){case"success":return"added_to_cart";case"danger":return"info_shield";default:return"info_circle"}},colorClass:function(){switch(this.type){case"secondary":return"color-secondary";case"info":default:return"color-info";case"success":return"color-success";case"warning":return"color-warning";case"danger":return"color-danger"}}},methods:{actionHandler:function(){this.$emit("click:action")},closeHandler:function(){this.$emit("click:close")}}},o=(n(537),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sf-fade"}},[n("div",{staticClass:"sf-notification",class:[{"display-none":!t.visible},t.colorClass]},[t._t("icon",(function(){return[n("SfIcon",{staticClass:"sf-notification__icon",class:{"display-none":!t.icon},attrs:{icon:t.icon,size:"lg",color:"white"}})]}),null,{icon:t.icon}),t._v(" "),n("div",[t._t("title",(function(){return[n("div",{staticClass:"sf-notification__title smartphone-only",class:{"display-none":!t.title}},[t._v("\n          "+t._s(t.title)+"\n        ")])]}),null,{title:t.title}),t._v(" "),t._t("message",(function(){return[n("span",{staticClass:"sf-notification__message",class:{"display-none":!t.message}},[t._v(t._s(t.message))])]}),null,{message:t.message}),t._v(" "),t._t("action",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-notification__action",class:{"display-none":!t.action},on:{click:t.actionHandler}},[t._v("\n          "+t._s(t.action)+"\n        ")])]}),null,{action:t.action,actionHandler:t.actionHandler})],2),t._v(" "),t._t("close",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-notification__close",class:{"display-none":t.persistent},attrs:{"aria-label":"Close notification"},on:{click:t.closeHandler}},[n("SfIcon",{attrs:{icon:"cross",color:"white"}})],1)]}),null,{closeHandler:t.closeHandler})],2)])}),[],!1,null,null,null);e.a=component.exports},629:function(t,e,n){"use strict";n(580)},654:function(t,e,n){"use strict";var l=n(6),c=(n(18),n(9),{name:"SfTableRow",inject:["table"],mounted:function(){this.$slots.default&&this.table.updateColumnsCount(this.$slots.default.filter((function(t){return t.tag})).length)}}),r=n(3),o=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",[n("tr",{staticClass:"sf-table__row"},[t._t("default")],2)])}),[],!1,null,null,null).exports,f={name:"SfTableData"},d=Object(r.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("td",{staticClass:"sf-table__data"},[t._t("default")],2)}),[],!1,null,null,null).exports,_={name:"SfTableHeader"},m=Object(r.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("th",{staticClass:"sf-table__header"},[t._t("default")],2)}),[],!1,null,null,null).exports,v={name:"SfTableHeading",inject:["table"],mounted:function(){this.$slots.default&&this.table.updateColumnsCount(this.$slots.default.filter((function(t){return t.tag})).length)}},h=Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"sf-table__heading"},[t._t("default")],2)])}),[],!1,null,null,null).exports;l.default.component("SfTableRow",o),l.default.component("SfTableData",d),l.default.component("SfTableHeader",m),l.default.component("SfTableHeading",h);var y={name:"SfTable",provide:function(){var table={};return Object.defineProperty(table,"updateColumnsCount",{value:this.updateColumnsCount}),{table:table}},methods:{updateColumnsCount:function(t){this.$el.style.setProperty("--_table-column-width",Math.ceil(t/2))}}},C=(n(552),Object(r.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("table",{staticClass:"sf-table"},[t._t("default")],2)}),[],!1,null,null,null));e.a=C.exports},672:function(t,e,n){"use strict";n(19),n(15),n(18),n(27),n(28);var l=n(1),c=(n(9),n(20),n(6)),r={name:"SfContentPage",props:{title:{type:String,default:""},icon:{type:[String,Array],default:""}},inject:["provided"],computed:{isActive:function(){return this.provided.active.toLowerCase()===this.title.toLowerCase()}},mounted:function(){var t={title:this.title,icon:this.icon};this.$parent.items.push(t)}},o=n(3),f=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-content-page",class:{"display-none":!t.isActive}},[t._t("default")],2)}),[],!1,null,null,null).exports,d={name:"SfContentCategory",props:{title:{type:String,default:""}},data:function(){return{items:[]}},mounted:function(){var t={title:this.title,items:this.items};this.$parent.items.push(t)},methods:{}},_=Object(o.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-content-category"},[t._t("default")],2)}),[],!1,null,null,null).exports,m=n(502),v=n(316),h=n(46),y=n(156),C=n(529);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default.component("SfContentPage",f),c.default.component("SfContentCategory",_);var O={name:"SfContentPages",components:{SfList:m.a,SfMenuItem:v.a,SfIcon:h.a,SfBar:y.a},props:{title:{type:String,default:""},active:{type:String,default:""}},data:function(){return{items:[]}},computed:w(w({},Object(C.a)()),{},{categories:function(){var t=[],e={items:[]},n=function(){if(e.items.length>0){var n=w({},e);t.push(n),e.items=[]}};return this.items.forEach((function(l){if(l.items){n();var c=w({},l);t.push(c)}else e.items.push(l)})),n(),t},isActive:function(){return this.active.length>0}}),watch:{isMobile:function(t){t?this.$emit("click:change",""):this.$emit("click:change",this.categories[0].items[0].title)}},beforeDestroy:function(){Object(C.b)()},provide:function(){var t=this,e={};return Object.defineProperty(e,"active",{get:function(){return t.active}}),{provided:e}},methods:{updatePage:function(title){this.$emit("click:change",title)},isPageActive:function(t){return t.title.toLowerCase()===this.active.toLowerCase()}}},j=(n(629),Object(o.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-content-pages"},[n("SfBar",{staticClass:"smartphone-only",attrs:{back:t.isActive,title:t.active?t.active:t.title},on:{"click:back":function(e){return t.updatePage()}}}),t._v(" "),n("section",{staticClass:"sf-content-pages__section",class:{"is-active":t.isActive}},[n("div",{staticClass:"sf-content-pages__sidebar"},[n("h1",{staticClass:"sf-content-pages__title desktop-only"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.categories,(function(e,l){return n("div",{key:e.title+"-"+l},[n("h2",{staticClass:"sf-content-pages__category-title",class:{"display-none":!e.title}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("SfList",{staticClass:"sf-content-pages__list"},t._l(e.items,(function(e,l){return n("SfListItem",{key:e.title+"-"+l,staticClass:"sf-content-pages__list-item"},[t._t("menu-item",(function(){return[n("SfMenuItem",{staticClass:"sf-content-pages__menu",class:{"is-active":t.isPageActive(e)},attrs:{label:e.title},on:{click:function(n){return t.updatePage(e.title)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("SfIcon",{staticClass:"sf-menu-item__icon",class:{"display-none":!e.icon},attrs:{icon:e.icon,color:"#686d7d",size:"xxs"}})]},proxy:!0}],null,!0)})]}),null,{updatePage:t.updatePage,page:e,active:t.active})],2)})),1)],1)}))],2),t._v(" "),n("div",{staticClass:"sf-content-pages__content"},[t._t("default")],2)])],1)}),[],!1,null,null,null));e.a=j.exports}}]);