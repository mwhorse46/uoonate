(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{588:function(t,e,l){},644:function(t,e,l){"use strict";l(588)},687:function(t,e,l){"use strict";l.r(e);var r=l(2),n=(l(37),l(25),l(85),l(19),l(9),l(20),l(155)),o=l(43),c=l(335),d=l(46),f=l(502),_=l(657),v=l(675),m=l(695),y=l(696),S=l(316),h=l(676),C=l(655),k=l(603),w=l(544),x=l(337),B=l(697),P=l(543),I=l(17),A=l(22),O={name:"Category",components:{SfHeading:n.a,SfButton:o.a,SfSidebar:c.a,SfIcon:d.a,SfList:f.a,SfFilter:_.a,SfProductCard:v.a,SfProductCardHorizontal:m.a,SfPagination:y.a,SfMenuItem:S.a,SfAccordion:h.a,SfComponentSelect:C.a,SfBreadcrumbs:k.a,SfColor:w.a,SfProperty:x.a,SfRadio:B.a,SfSelect:P.a},setup:function(){var t=Object(A.j)("blogs"),e=t.search,l=t.content,n=(t.error,Object(A.j)("blog")),o=n.search;n.content;return Object(I.j)(Object(r.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({contentType:"blog"});case 2:if(!l){t.next=5;break}return t.next=5,o({contentType:"blog",handle:null==l||null===(r=l.value)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.handle});case 5:case"end":return t.stop()}}),t)})))),{clearAllFilters:function(){var t=this;Object.keys(this.filters).forEach((function(e){t.filters[e].forEach((function(t){t.selected=!1}))}))},toggleWishlist:function(t){this.products[t].isInWishlist=!this.products[t].isInWishlist},blogs:l,totalPosts:0,currentPage:1,sortBy:"Latest",isFilterSidebarOpen:!1,isGridView:!0,category:"Blogs",displayOnPage:"5",sortByOptions:[{value:"Latest",label:"Latest"},{value:"Price-up",label:"Price from low to high"},{value:"Price-down",label:"Price from high to low"}],sidebarAccordion:[{header:"Blogs",items:[{label:"All",count:"280"},{label:"Skirts",count:"23"},{label:"Sweaters",count:"54"},{label:"Dresses",count:"34"},{label:"T-shirts",count:"56"},{label:"Pants",count:"7"},{label:"Underwear",count:"12"}]}],showOnPage:["20","40","60"],products:[{title:"Cream Beach Bag",id:1,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productA.jpg",price:{regular:"$50.00"},rating:{max:5,score:5},reviewsCount:8,isInWishlist:!0},{title:"Cream Beach Bag",id:2,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productB.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:8,isInWishlist:!1},{title:"Cream Beach Bag",id:3,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productC.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:8,isInWishlist:!1},{title:"Cream Beach Bag",id:4,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productA.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:8,isInWishlist:!1},{title:"Cream Beach Bag",id:5,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productB.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:8,isInWishlist:!1},{title:"Cream Beach Bag",id:6,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productC.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:8,isInWishlist:!1},{title:"Cream Beach Bag",id:7,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productA.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:6,isInWishlist:!1},{title:"Cream Beach Bag",id:8,description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",image:"assets/storybook/Home/productB.jpg",price:{regular:"$50.00"},rating:{max:5,score:4},reviewsCount:8,isInWishlist:!1}],filters:{collection:[{label:"Summer fly",value:"summer-fly",count:"10",selected:!1},{label:"Best 2018",value:"best-2018",count:"23",selected:!1},{label:"Your choice",value:"your-choice",count:"54",selected:!1}],color:[{label:"Red",value:"red",color:"#990611",selected:!1},{label:"Black",value:"black",color:"#000000",selected:!1},{label:"Yellow",value:"yellow",color:"#DCA742",selected:!1},{label:"Blue",value:"blue",color:"#004F97",selected:!1},{label:"Navy",value:"navy",color:"#656466",selected:!1}],size:[{label:"Size 2 (XXS)",value:"xxs",count:"10",selected:!1},{label:"Size 4-6 (XS)",value:"xs",count:"23",selected:!1},{label:"Size 8-10 (S)",value:"s",count:"54",selected:!1},{label:"Size 12-14 (M)",value:"m",count:"109",selected:!1},{label:"Size 16-18 (L)",value:"l",count:"23",selected:!1},{label:"Size 20-22(XL)",value:"xl",count:"12",selected:!1},{label:"Size 24-26 (XXL)",value:"xxl",count:"2",selected:!1}],price:[{label:"Under $200",value:"under-200",count:"23",selected:!1},{label:"Under $300",value:"under-300",count:"54",selected:!1}],material:[{label:"Cotton",value:"coton",count:"33",selected:!1},{label:"Silk",value:"silk",count:"73",selected:!1}]},breadcrumbs:[{text:"Home",link:"/"},{text:"Blogs",link:"/blogs"}]}}},F=(l(644),l(3)),component=Object(F.a)(O,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"blogs"}},[l("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),l("div",{staticClass:"navbar section"},[l("div",{staticClass:"navbar__aside desktop-only"},[l("SfHeading",{staticClass:"navbar__title",attrs:{level:1,title:"Blogs"}})],1),t._v(" "),l("div",{staticClass:"navbar__main"},[l("div",{staticClass:"navbar__sort desktop-only"},[l("span",{staticClass:"navbar__label"},[t._v("Sort by:")]),t._v(" "),l("SfComponentSelect",{staticClass:"navbar__select",model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}},t._l(t.sortByOptions,(function(option){return l("SfComponentSelectOption",{key:option.value,staticClass:"sort-by__option",attrs:{value:option.value}},[t._v(t._s(option.label))])})),1)],1),t._v(" "),l("div",{staticClass:"navbar__counter"},[l("span",{staticClass:"navbar__label desktop-only"},[t._v("Posts found: ")]),t._v(" "),l("span",{staticClass:"desktop-only"},[t._v(t._s(t.totalPosts))]),t._v(" "),l("span",{staticClass:"navbar__label smartphone-only"},[t._v(t._s(t.totalPosts)+" Items")])]),t._v(" "),l("div",{staticClass:"navbar__view"},[l("span",{staticClass:"navbar__view-label desktop-only"},[t._v("View")]),t._v(" "),l("SfButton",{staticClass:"sf-button--pure navbar__view-button",attrs:{"aria-label":"Change to grid view","aria-pressed":t.isGridView},on:{click:function(e){t.isGridView=!0}}},[l("SfIcon",{staticClass:"navbar__view-icon",attrs:{color:"#43464E",icon:"tiles",size:"12px"}})],1),t._v(" "),l("SfButton",{staticClass:"sf-button--pure navbar__view-button",attrs:{"aria-label":"Change to list view","aria-pressed":!t.isGridView},on:{click:function(e){t.isGridView=!1}}},[l("SfIcon",{staticClass:"navbar__view-icon",attrs:{color:"#43464E",icon:"list",size:"12px"}})],1)],1)])]),t._v(" "),l("div",{staticClass:"main section"},[l("div",{staticClass:"sidebar desktop-only"},[l("SfAccordion",{attrs:{open:t.sidebarAccordion[0].header,"show-chevron":!0}},[l("SfAccordionItem",{attrs:{header:"Categories"},scopedSlots:t._u([{key:"default",fn:function(){return[l("SfList",{staticClass:"list"},t._l(t.blogs,(function(t,e){return l("SfListItem",{key:e,staticClass:"list__item"},[l("SfMenuItem",{attrs:{label:t.title}})],1)})),1)]},proxy:!0}])})],1)],1),t._v(" "),l("div",{staticClass:"products"},[t.isGridView?l("transition-group",{staticClass:"products__grid",attrs:{appear:"",name:"products__slide",tag:"div"}},t._l(t.articles,(function(e,i){return l("SfProductCard",{key:e.id,staticClass:"products__product-card",style:{"--index":i},attrs:{title:e.title,image:e.image,"image-width":t.$device.isDesktopOrTablet?212:154,"image-height":t.$device.isDesktopOrTablet?320:232,"regular-price":e.price.regular,"special-price":e.price.special,"max-rating":e.rating.max,"score-rating":e.rating.score,"is-in-wishlist":e.isInWishlist,"show-add-to-cart-button":!0,"image-tag":"nuxt-img","nuxt-img-config":{format:"webp",fit:"cover"}},on:{"click:wishlist":function(e){return t.toggleWishlist(i)}},scopedSlots:t._u([{key:"image",fn:function(e){return[l("SfButton",t._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{link:e.link,"aria-label":"Go To Product","data-testid":"product-link"}},t.$listeners),[Array.isArray(e.image)?t._l(e.image.slice(0,2),(function(picture,t){return l("nuxt-img",{key:t,staticClass:"sf-product-card__picture",attrs:{alt:e.title,height:e.imageHeight,src:picture,width:e.imageWidth}})})):l("nuxt-img",{staticClass:"sf-product-card__image lol",attrs:{alt:e.title,height:e.imageHeight,src:e.image,width:e.imageWidth}})],2)]}}],null,!0)})})),1):l("transition-group",{staticClass:"products__list",attrs:{appear:"",name:"products__slide",tag:"div"}},t._l(t.products,(function(e,i){return l("SfProductCardHorizontal",{key:e.id,staticClass:"products__product-card-horizontal",style:{"--index":i},attrs:{title:e.title,description:e.description,image:e.image,"regular-price":e.price.regular,"special-price":e.price.special,"max-rating":e.rating.max,"reviews-count":e.reviewsCount,"score-rating":e.rating.score,"is-in-wishlist":e.isInWishlist,"image-width":t.$device.isDesktopOrTablet?212:154,"image-height":t.$device.isDesktopOrTablet?320:232,"image-tag":"nuxt-img","nuxt-img-config":{format:"webp",fit:"cover"}},on:{"click:wishlist":function(e){return t.toggleWishlist(i)}},scopedSlots:t._u([{key:"image",fn:function(e){return[l("SfButton",t._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{link:e.link,"aria-label":"Go To Product","data-testid":"product-link"}},t.$listeners),[Array.isArray(e.image)?t._l(e.image.slice(0,2),(function(picture,t){return l("nuxt-img",{key:t,staticClass:"sf-product-card__picture",attrs:{alt:e.title,height:e.imageHeight,src:picture,width:e.imageWidth}})})):l("nuxt-img",{staticClass:"sf-product-card__image lol",attrs:{alt:e.title,height:e.imageHeight,src:e.image,width:e.imageWidth}})],2)]}},{key:"configuration",fn:function(){return[l("SfProperty",{staticClass:"desktop-only",staticStyle:{margin:"0 0 1rem 0"},attrs:{name:"Size",value:"XS"}}),t._v(" "),l("SfProperty",{staticClass:"desktop-only",attrs:{name:"Color",value:"white"}})]},proxy:!0},{key:"actions",fn:function(){return[l("SfButton",{staticClass:"sf-button--text desktop-only",staticStyle:{margin:"0 0 1rem auto",display:"block"},on:{click:function(e){return t.$emit("click:add-to-wishlist")}}},[t._v("\n              Save for later\n            ")]),t._v(" "),l("SfButton",{staticClass:"sf-button--text desktop-only",staticStyle:{margin:"0 0 0 auto",display:"block"},on:{click:function(e){return t.$emit("click:add-to-compare")}}},[t._v("\n              Add to compare\n            ")])]},proxy:!0}],null,!0)})})),1),t._v(" "),l("SfPagination",{staticClass:"products__pagination",attrs:{current:t.currentPage,total:4,visible:5},on:{click:function(e){t.currentPage=e}}}),t._v(" "),l("div",{staticClass:"products__show-on-page desktop-only"},[l("span",{staticClass:"products__show-on-page__label"},[t._v("Show on page:")]),t._v(" "),l("SfSelect",{staticClass:"products__items-per-page"},t._l(t.showOnPage,(function(option){return l("SfSelectOption",{key:option,staticClass:"products__items-per-page__option",attrs:{value:option}},[t._v("\n            "+t._s(option)+"\n          ")])})),1)],1)],1)]),t._v(" "),l("SfSidebar",{staticClass:"sidebar-filters",attrs:{visible:t.isFilterSidebarOpen,title:"Filters"},on:{close:function(e){t.isFilterSidebarOpen=!1}},scopedSlots:t._u([{key:"content-bottom",fn:function(){return[l("div",{staticClass:"filters__buttons"},[l("SfButton",{staticClass:"sf-button--full-width",on:{click:function(e){t.isFilterSidebarOpen=!1}}},[t._v("Done")]),t._v(" "),l("SfButton",{staticClass:"sf-button--full-width filters__button-clear",on:{click:t.clearAllFilters}},[t._v("Clear all")])],1)]},proxy:!0}])},[l("div",{staticClass:"filters desktop-only"},[l("SfHeading",{staticClass:"filters__title sf-heading--left",attrs:{level:4,title:"Collection"}}),t._v(" "),t._l(t.filters.collection,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,count:filter.count,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),t._v(" "),l("SfHeading",{staticClass:"filters__title sf-heading--left",attrs:{level:4,title:"Color"}}),t._v(" "),l("div",{staticClass:"filters__colors"},t._l(t.filters.color,(function(filter){return l("SfColor",{key:filter.value,staticClass:"filters__color",attrs:{color:filter.color,selected:filter.selected},on:{click:function(t){filter.selected=!filter.selected}}})})),1),t._v(" "),l("SfHeading",{staticClass:"filters__title sf-heading--left",attrs:{level:4,title:"Size"}}),t._v(" "),t._l(t.filters.size,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,count:filter.count,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),t._v(" "),l("SfHeading",{staticClass:"filters__title sf-heading--left",attrs:{level:4,title:"Price"}}),t._v(" "),t._l(t.filters.price,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,count:filter.count,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),t._v(" "),l("SfHeading",{staticClass:"filters__title sf-heading--left",attrs:{level:4,title:"Material"}}),t._v(" "),t._l(t.filters.material,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{value:filter.value,label:filter.label,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})}))],2),t._v(" "),l("SfAccordion",{staticClass:"filters smartphone-only"},[l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Show on page"},scopedSlots:t._u([{key:"additional-info",fn:function(){return[l("span",{staticClass:"filters__chosen"},[t._v(" "+t._s(t.displayOnPage)+" items ")])]},proxy:!0}])},[t._v(" "),t._l(t.showOnPage,(function(e){return l("SfRadio",{key:e,staticClass:"filters__item",attrs:{value:e,label:e},model:{value:t.displayOnPage,callback:function(e){t.displayOnPage=e},expression:"displayOnPage"}})}))],2),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Sort by"},scopedSlots:t._u([{key:"additional-info",fn:function(){return[l("span",{staticClass:"filters__chosen"},[t._v("\n            "+t._s(t.sortBy)+"\n          ")])]},proxy:!0}])},[t._v(" "),t._l(t.sortByOptions,(function(e){return l("SfRadio",{key:e.value,staticClass:"filters__item",attrs:{value:e.value,label:e.label},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}})}))],2),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Category"},scopedSlots:t._u([{key:"additional-info",fn:function(){return[l("span",{staticClass:"filters__chosen"},[t._v("\n            "+t._s(t.category)+"\n          ")])]},proxy:!0}])},[t._v(" "),t._l(t.sidebarAccordion,(function(e){return l("SfRadio",{key:e.header,staticClass:"filters__item",attrs:{value:e.header,label:e.header},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})}))],2),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Collection"}},t._l(t.filters.collection,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,count:filter.count,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),1),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Color"}},t._l(t.filters.color,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,color:filter.color,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),1),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Size"}},t._l(t.filters.size,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,count:filter.count,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),1),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Price"}},t._l(t.filters.price,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{label:filter.label,count:filter.count,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),1),t._v(" "),l("SfAccordionItem",{staticClass:"filters__accordion-item",attrs:{header:"Material"}},t._l(t.filters.material,(function(filter){return l("SfFilter",{key:filter.value,staticClass:"filters__item",attrs:{value:filter.value,label:filter.label,selected:filter.selected},on:{change:function(t){filter.selected=!filter.selected}}})})),1)],1)],1)],1)}),[],!1,null,"886ac6dc",null);e.default=component.exports}}]);