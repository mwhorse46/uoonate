(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{557:function(t,e,n){},558:function(t,e,n){},559:function(t,e,n){},563:function(t,e,n){},564:function(t,e,n){},565:function(t,e,n){},566:function(t,e,n){},567:function(t,e,n){},600:function(t,e,n){"use strict";var r=n(43),l=n(46),o={name:"SfArrow",inject:{components:{default:{SfButton:r.a,SfIcon:l.a}}}},c=(n(606),n(3)),component=Object(c.a)(o,(function(t,e){var n=e._c;return n(e.injections.components.SfButton,e._g(e._b({tag:"component",class:[e.data.class,e.data.staticClass,"sf-arrow"],style:[e.data.style,e.data.staticStyle],attrs:{type:"button"}},"component",e.data.attrs,!1),e.listeners),[e._t("default",(function(){return[n(e.injections.components.SfIcon,e._b({tag:"component",class:[e.data.class,e.data.staticClass,"sf-arrow__icon"],attrs:{size:"1.5rem",icon:"arrow_left","aria-hidden":"true"}},"component",e.data.attrs,!1))]}))],2)}),[],!0,null,null,null);e.a=component.exports},605:function(t,e,n){"use strict";n(557)},606:function(t,e,n){"use strict";n(558)},607:function(t,e,n){"use strict";n(559)},611:function(t,e,n){"use strict";n(563)},612:function(t,e,n){"use strict";n(564)},613:function(t,e,n){"use strict";n(565)},614:function(t,e,n){"use strict";n(566)},615:function(t,e,n){"use strict";n(567)},671:function(t,e,n){"use strict";n(19),n(15),n(27),n(20),n(28);var r=n(1),l=(n(18),n(9),n(6)),o=(n(127),n(43)),c=n(75),f={name:"SfHeroItem",components:{SfButton:o.a,SfLink:c.a},props:{title:{type:String,default:""},subtitle:{type:String,default:""},buttonText:{type:String,default:""},background:{type:String,default:""},image:{type:[Object,String],default:""},link:{type:String,default:null},imageTag:{type:String,default:""},nuxtImgConfig:{type:Object,default:function(){return{}}}},computed:{style:function(){var t=this,image=this.image,e="string"==typeof image,n=this.background,r=function(e){return"url(".concat(t.$img(e,t.nuxtImgConfig),")")};return"nuxt-img"===this.imageTag||"nuxt-picture"===this.imageTag?{"--hero-item-background-image":e?r(image):{"--hero-item-background-image-mobile":r(image.mobile),"--hero-item-background-image":r(image.desktop)},"--_banner-background-color":n}:{"--hero-item-background-image":e?"url(".concat(image,")"):{"--hero-item-background-image-mobile":image.mobile,"--hero-item-background-image":image.desktop},"background-color":n}},wrapper:function(){return this.link?"SfLink":"SfButton"}}},d=n(3),_=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"glide__slide sf-hero-item",style:t.style,attrs:{"data-testid":"hero-item"}},[n("div",{staticClass:"sf-hero-item__wrapper sf-hero-item__wrapper--desktop"},[t._t("subtitle",(function(){return[n("span",{staticClass:"sf-hero-item__subtitle",class:{"display-none":!t.subtitle}},[t._v(t._s(t.subtitle))])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{staticClass:"sf-hero-item__title",class:{"display-none":!t.title}},[t._v(t._s(t.title))])]}),null,{title:t.title}),t._v(" "),t._t("call-to-action",(function(){return[t.buttonText?n("SfButton",{staticClass:"sf-hero-item__button",attrs:{link:t.link,"data-testid":"hero-cta-button"}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")]):t._e()]}),null,{buttonText:t.buttonText,link:t.link}),t._v(" "),t._t("withImgTag")],2),t._v(" "),n(t.wrapper,{tag:"component",staticClass:"sf-hero-item__wrapper sf-hero-item__wrapper--mobile",attrs:{link:t.link}},[t._t("subtitle",(function(){return[n("span",{staticClass:"sf-hero-item__subtitle",class:{"display-none":!t.subtitle}},[t._v(t._s(t.subtitle))])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{staticClass:"sf-hero-item__title",class:{"display-none":!t.title}},[t._v(t._s(t.title))])]}),null,{title:t.title}),t._v(" "),t._t("withImgTag")],2)],1)}),[],!1,null,null,null).exports,m=n(600),v=(n(50),{name:"SfBullets",inject:{components:{default:{SfButton:o.a}}},props:{total:{type:Number,default:3},current:{type:Number,default:0}},inactiveRight:function(t,e){return t-1-e},inactiveLeft:function(t,e){return t-(t-1-e)-1}}),h=(n(612),Object(d.a)(v,(function(t,e){var n=e._c;return n("ol",e._b({class:[e.data.class,e.data.staticClass,"sf-bullets"],style:[e.data.style,e.data.staticStyle]},"ol",e.data.attrs,!1),[e._l(e.$options.inactiveLeft(e.props.total,e.props.current),(function(t,r){return[e._t("inactive",(function(){return[n("li",{key:r},[n(e.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-bullet",attrs:{type:"button","aria-label":"Go to slide "+(r+1),"data-testid":"bullet-"+(r+1)},on:{click:function(t){e.listeners.click&&e.listeners.click(r)}}})],1)]}),null,{index:r,$options:e.$options})]})),e._v(" "),e._t("active",(function(){return[n("li",[n(e.injections.components.SfButton,e._b({tag:"component",staticClass:"sf-button--pure sf-bullet is-active",attrs:{"aria-label":"Current slide"}},"component",e.data.attrs,!1))],1)]})),e._v(" "),e._l(e.$options.inactiveRight(e.props.total,e.props.current),(function(t,r){return[e._t("inactive",(function(){return[n("li",{key:e.$options.inactiveLeft(e.props.total,e.props.current)+1+r},[n(e.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-bullet",attrs:{"aria-label":"Go to slide "+(e.$options.inactiveLeft(e.props.total,e.props.current)+2+r),"data-testid":"bullet-"+e.$options.inactiveLeft(e.props.total,e.props.current)+(2+r)},on:{click:function(t){e.listeners.click&&e.listeners.click(e.$options.inactiveLeft(e.props.total,e.props.current)+1+r)}}})],1)]}),null,{index:e.$options.inactiveLeft(e.props.total,e.props.current)+1+r,$options:e.$options})]}))],2)}),[],!0,null,null,null).exports),y=n(545);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}l.default.component("SfHeroItem",_);var S={name:"SfHero",components:{SfArrow:m.a,SfBullets:h},props:{sliderOptions:{type:Object,default:function(){return{}}}},data:function(){return{glide:null,defaultOptions:{type:"slider",rewind:!0,autoplay:5e3,perView:1,gap:0}}},computed:{mergedOptions:function(){return C(C({},this.defaultOptions),this.sliderOptions)},numberOfPages:function(){return this.$slots.default?this.$slots.default.filter((function(slot){return slot.tag})).length:0},page:function(){return this.glide?this.glide.index+1:1}},mounted:function(){var t=this;this.numberOfPages>1&&this.$nextTick((function(){if(t.$slots.default){var e=new y.a(t.$refs.glide,t.mergedOptions);e.mount(),t.glide=e}}))},methods:{go:function(t){if(this.glide)switch(t){case"prev":this.glide.go("<");break;case"next":this.glide.go(">");break;default:this.glide.go("=".concat(t))}}}},O=(n(613),Object(d.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-hero"},[n("div",{ref:"glide",staticClass:"glide"},[n("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[n("ul",{staticClass:"glide__slides sf-hero__slides"},[t._t("default")],2)])]),t._v(" "),n("div",{staticClass:"sf-hero__control--left",class:{"display-none":t.numberOfPages<=1}},[t._t("prev",(function(){return[n("SfArrow",{staticClass:"sf-arrow--transparent",attrs:{"aria-label":"previous","data-testid":"hero-prev-button"},on:{click:function(e){return e.stopPropagation(),t.go("prev")}}})]}),null,{go:function(){return t.go("prev")}})],2),t._v(" "),n("div",{staticClass:"sf-hero__control--right",class:{"display-none":t.numberOfPages<=1}},[t._t("next",(function(){return[n("SfArrow",{staticClass:"sf-arrow--right sf-arrow--transparent",attrs:{"aria-label":"next","data-testid":"hero-next-button"},on:{click:function(e){return e.stopPropagation(),t.go("next")}}})]}),null,{go:function(){return t.go("next")}})],2),t._v(" "),n("div",{staticClass:"sf-hero__bullets",class:{"display-none":t.numberOfPages<=1}},[t._t("bullets",(function(){return[n("SfBullets",{attrs:{total:t.numberOfPages,current:t.page-1,"data-testid":"hero-bullets"},on:{click:function(e){return t.go(e)}}})]}),null,{numberOfPages:t.numberOfPages,page:t.page,go:t.go})],2)])}),[],!1,null,null,null));e.a=O.exports},674:function(t,e,n){"use strict";n(19),n(15),n(27),n(20),n(28);var r=n(1),l=(n(18),n(9),n(6)),o={name:"SfCarouselItem"},c=n(3),f=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"sf-carousel-item glide__slide"},[t._t("default")],2)}),[],!1,null,null,null).exports,d=n(600),_=n(545);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}l.default.component("SfCarouselItem",f);var h={name:"SfCarousel",components:{SfArrow:d.a},props:{settings:{type:Object,default:function(){return{}}}},data:function(){return{glide:null,defaultSettings:{type:"carousel",rewind:!0,perView:4,slidePerPage:!0,gap:0,breakpoints:{1023:{perView:2,peek:{before:0,after:50}}}}}},computed:{mergedOptions:function(){var t=v({},this.defaultSettings.breakpoints);return this.settings.breakpoints&&(t=v(v({},t),this.settings.breakpoints)),v(v(v({},this.defaultSettings),this.settings),{},{breakpoints:t})}},mounted:function(){var t=this;this.$nextTick((function(){if(t.$slots.default){var e=new _.a(t.$refs.glide,t.mergedOptions),n=t.$slots.default.filter((function(slot){return slot.tag})).length;n<=e.settings.perView&&(e.settings.perView=n,e.settings.rewind=!1,t.$refs.controls.style.display="none"),e.mount(),e.on("run.before",(function(r){var l=t.mergedOptions,o=l.slidePerPage,c=l.rewind,f=l.type;if(o){var d=e.settings.perView;if(!(!d>1)){var _,m=r.direction;switch(m){case">":case"<":(_=Math.ceil(e.index/d)*d+(">"===m?d:-d))>=n?_="slider"!==f||c?0:e.index:(_<0||_+d>n)&&(_="slider"!==f||c?n-d:e.index),r.direction="=",r.steps=_}}}})),t.glide=e}}))},methods:{go:function(t){if(this.glide)switch(t){case"prev":this.glide.go("<");break;case"next":this.glide.go(">")}}}},y=(n(607),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-carousel"},[n("div",{ref:"controls",staticClass:"sf-carousel__controls"},[t._t("prev",(function(){return[n("SfArrow",{attrs:{"aria-label":"previous","data-testid":"carousel-prev-button"},on:{click:function(e){return t.go("prev")}}})]}),null,{go:function(){return t.go("prev")}}),t._v(" "),t._t("next",(function(){return[n("SfArrow",{staticClass:"sf-arrow--right",attrs:{"aria-label":"next","data-testid":"carousel-next-button"},on:{click:function(e){return t.go("next")}}})]}),null,{go:function(){return t.go("next")}})],2),t._v(" "),n("div",{staticClass:"sf-carousel__wrapper"},[n("div",{ref:"glide",staticClass:"glide"},[n("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[n("ul",{staticClass:"glide__slides sf-carousel__slides"},[t._t("default")],2)])])])])}),[],!1,null,null,null));e.a=y.exports},691:function(t,e,n){"use strict";n(127);var r=n(43),l=n(75),o={name:"SfBanner",components:{SfButton:r.a,SfLink:l.a},props:{title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},buttonText:{type:String,default:""},link:{type:String,default:null},background:{type:String,default:""},image:{type:[String,Object],default:""},imageTag:{type:String,default:null},nuxtImgConfig:{type:Object,default:function(){return{}}}},computed:{style:function(){var t=this,image=this.image,e=this.background,n=function(e){return"url(".concat(t.$img(e,t.nuxtImgConfig),")")};return"nuxt-img"===this.imageTag||"nuxt-picture"===this.imageTag?{"--_banner-background-image":image.mobile?n(image.mobile):n(image),"--_banner-background-desktop-image":image.desktop&&n(image.desktop),"--_banner-background-color":e}:{"--_banner-background-image":image.mobile?"url(".concat(image.mobile,")"):"url(".concat(image,")"),"--_banner-background-desktop-image":image.desktop&&"url(".concat(image.desktop,")"),"--_banner-background-color":e}},wrapper:function(){return this.link?"SfLink":"SfButton"}}},c=(n(605),n(3)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g({staticClass:"sf-banner",style:t.style},t.$listeners),[n(t.wrapper,{tag:"component",staticClass:"sf-banner__wrapper",attrs:{link:t.link}},[t._t("subtitle",(function(){return[n("span",{staticClass:"sf-banner__subtitle",class:{"display-none":!t.subtitle}},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{staticClass:"sf-banner__title",class:{"display-none":!t.title}},[t._v("\n        "+t._s(t.title)+"\n      ")])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("span",{staticClass:"sf-banner__description",class:{"display-none":!t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])]}),null,{description:t.description}),t._v(" "),t._t("call-to-action",null,null,{buttonText:t.buttonText})],2),t._v(" "),n("div",{staticClass:"sf-banner__wrapper-desktop",attrs:{link:t.link}},[t._t("subtitle",(function(){return[n("span",{staticClass:"sf-banner__subtitle",class:{"display-none":!t.subtitle}},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{staticClass:"sf-banner__title",class:{"display-none":!t.title}},[t._v("\n        "+t._s(t.title)+"\n      ")])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("span",{staticClass:"sf-banner__description",class:{"display-none":!t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])]}),null,{description:t.description}),t._v(" "),t._t("call-to-action",(function(){return[t.buttonText?n("SfButton",t._g({staticClass:"sf-banner__call-to-action color-secondary",attrs:{link:t.link,"data-testid":"banner-cta-button"}},t.$listeners),[t._v("\n        "+t._s(t.buttonText)+"\n      ")]):t._e()]}),null,{buttonText:t.buttonText})],2),t._v(" "),t._t("img-tag")],2)}),[],!1,null,null,null);e.a=component.exports},692:function(t,e,n){"use strict";n(50);var r={name:"SfSection",components:{SfHeading:n(155).a},props:{titleHeading:{type:String,default:""},subtitleHeading:{type:String,default:""},levelHeading:{type:Number,default:2}}},l=(n(611),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sf-section"},[t._t("heading",(function(){return[t.titleHeading?n("SfHeading",{attrs:{level:t.levelHeading,title:t.titleHeading,description:t.subtitleHeading}}):t._e()]}),null,{levelHeading:t.levelHeading,titleHeading:t.titleHeading,subtitleHeading:t.subtitleHeading}),t._v(" "),n("div",{staticClass:"sf-section__content"},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},693:function(t,e,n){"use strict";var r={name:"SfCallToAction",components:{SfButton:n(43).a},props:{title:{type:String,default:""},buttonText:{type:String,default:""},link:{type:String,default:null},description:{type:String,default:""},background:{type:String,default:""},image:{type:[String,Object],default:""}},computed:{style:function(){var image=this.image,t=this.background;return{"--_call-to-action-background-image":image.mobile?"url(".concat(image.mobile,")"):"url(".concat(image,")"),"--_call-to-action-background-desktop-image":image.desktop&&"url(".concat(image.desktop,")"),"--_call-to-action-background-color":t}}}},l=(n(614),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sf-call-to-action",style:t.style},[n("div",{staticClass:"sf-call-to-action__text-container"},[t._t("title",(function(){return[n("h2",{staticClass:"sf-call-to-action__title",class:{"display-none":!t.title}},[t._v("\n        "+t._s(t.title)+"\n      ")])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("p",{staticClass:"sf-call-to-action__description",class:{"display-none":!t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])]}),null,{description:t.description})],2),t._v(" "),t._t("button",(function(){return[n("SfButton",{staticClass:"sf-call-to-action__button",class:{"display-none":!t.buttonText},attrs:{link:t.link,"data-testid":"cta-button"},on:{click:function(e){return t.$emit("click")}}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])]}),null,{buttonText:t.buttonText})],2)}),[],!1,null,null,null);e.a=component.exports},694:function(t,e,n){"use strict";n(50);var r={name:"SfBannerGrid",props:{bannerGrid:{type:Number,default:1}}},l=(n(615),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-banner-grid"},[1===t.bannerGrid?[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-A")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--medium"},[t._t("banner-B")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col"},[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-C")],2)]),t._v(" "),n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-D")],2)])])])]:t._e(),t._v(" "),2===t.bannerGrid?[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--small"},[t._t("banner-A")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col"},[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--higher"},[t._t("banner-B")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--higher"},[t._t("banner-C")],2)]),t._v(" "),n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-D")],2)])])])]:t._e()],2)}),[],!1,null,null,null);e.a=component.exports}}]);