(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{574:function(t,e,n){},575:function(t,e,n){},622:function(t,e,n){"use strict";n(574)},623:function(t,e,n){"use strict";n(575)},669:function(t,e,n){"use strict";n.r(e);n(25),n(63),n(218),n(19);var c=n(43),r=(n(50),n(44),n(41),n(53),n(6)),o=(n(30),{name:"SfStep",inject:["stepsData"],props:{name:{type:String,default:""}},computed:{internalName:function(){return this.stepsData?this.stepsData.name:null},index:function(){return this.stepsData?this.stepsData.index:null},active:function(){return this.internalName===this.name}},created:function(){this.stepsData.updateSteps(this.name)}}),l=n(3),d=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-step"},[t.active?t._t("default",null,{index:t.index}):t._e()],2)}),[],!1,null,null,null).exports;r.default.component("SfStep",d);var f={name:"SfSteps",components:{SfButton:c.a},model:{prop:"active",event:"change"},provide:function(){var t=this,e={};return Object.defineProperty(e,"index",{enumerable:!1,get:function(){return t.active}}),Object.defineProperty(e,"name",{enumerable:!1,get:function(){return t.steps[t.active]}}),Object.defineProperty(e,"updateSteps",{enumerable:!1,value:this.updateSteps}),{stepsData:e}},props:{active:{type:Number,default:0},canGoBack:{type:Boolean,default:!0}},data:function(){return{steps:[]}},computed:{parsedSteps:function(){var t=this;return this.steps?this.steps.map((function(e,n){return{index:n,step:e,done:n<t.active,disabled:!t.canGoBack&&n<t.active,current:n===t.active}})):[]},progress:function(){return{"--_steps-progress-width":"".concat(100/this.steps.length,"%"),"--_steps-progress-active-step":this.active+1}}},methods:{updateSteps:function(t){this.steps.includes(t)||this.steps.push(t)},stepClick:function(t){var e=t.index;t.disabled||this.$emit("change",e)}}},h=(n(622),Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-steps"},[n("div",{staticClass:"sf-steps__header"},[t._l(t.parsedSteps,(function(e){return t._t("steps",(function(){return[n("SfButton",{key:e.index,staticClass:"sf-button--pure",class:{"sf-steps__step":!0,"is-done":e.done,current:e.current,"is-disabled":e.disabled},attrs:{"data-testid":"steps-button"},on:{click:function(n){return t.stepClick(e)}}},[n("span",{staticClass:"sf-steps__title"},[t._v(t._s(e.step))])])]}),{stepClick:t.stepClick},{step:e})})),t._v(" "),n("div",{staticClass:"sf-steps__progress",style:t.progress,attrs:{"data-testid":"steps-progress"}})],2),t._v(" "),n("div",{staticClass:"sf-steps__content"},[t._t("default")],2)])}),[],!1,null,null,null).exports),v={name:"CartPreview"},m=Object(l.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b",[t._v("Please implement vendor-specific CartPreview component in the 'components/Checkout' directory")])}),[],!1,null,null,null).exports,_=n(0),S={shipping:"Shipping",billing:"Billing",payment:"Payment"},k={name:"Checkout",components:{SfButton:c.a,SfSteps:h,CartPreview:m},setup:function(){var t=Object(_.q)(),e=Object(_.r)(),n=Object(_.a)((function(){return t.value.path.split("/").pop()})),c=Object(_.a)((function(){return Object.keys(S).findIndex((function(s){return s===n.value}))})),r=Object(_.a)((function(){return"thank-you"===n.value}));return{handleStepClick:function(t){var n=Object.keys(S)[t];e.push("/checkout/".concat(n))},STEPS:S,currentStepIndex:c,isThankYou:r,currentStep:n}}},C=(n(623),Object(l.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"checkout"}},[n("div",{staticClass:"checkout"},[n("div",{staticClass:"checkout__main"},[t.isThankYou?n("nuxt-child"):n("SfSteps",{class:{checkout__steps:!0},attrs:{active:t.currentStepIndex},on:{change:t.handleStepClick}},t._l(t.STEPS,(function(t,e){return n("SfStep",{key:e,attrs:{name:t}},[n("nuxt-child")],1)})),1)],1),t._v(" "),t.isThankYou?t._e():n("div",{staticClass:"checkout__aside desktop-only"},[n("transition",{attrs:{name:"fade"}},[n("CartPreview",{key:"order-summary"})],1)],1)])])}),[],!1,null,"7c5dbae6",null));e.default=C.exports}}]);