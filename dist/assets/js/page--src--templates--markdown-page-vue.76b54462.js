(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2CP8":function(a,e,t){var s={"./availability.png":"C+v+","./limited_supply.png":"oa9m","./peer-to-peer.png":"X1SW","./powered_by_stellar.png":"M2X/","./sustainability.png":"hi2p","./sustainable.png":"ZQVk","./tft_stats.png":"ctVY"};function n(a){var e=r(a);return t(e)}function r(a){if(!t.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}n.keys=function(){return Object.keys(s)},n.resolve=r,a.exports=n,n.id="2CP8"},J21R:function(a,e,t){var s={"./participate_cta.png":"+DTT","./solution_plugearn.png":"MpYB","./teamcollage.png":"wYA1","./teamcollage2.png":"0fF3"};function n(a){var e=r(a);return t(e)}function r(a){if(!t.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}n.keys=function(){return Object.keys(s)},n.resolve=r,a.exports=n,n.id="J21R"},LoVC:function(a,e,t){"use strict";t("qR+9")},UABC:function(a,e,t){},"qR+9":function(a,e,t){},tsPy:function(a,e,t){"use strict";t("UABC")},zwLt:function(a,e,t){"use strict";t.r(e);var s=t("akyF"),n=t("MtIX"),r={props:["slides"],data:function(){return{activeIndex:0}},methods:{setActive:function(a){this.activeIndex=a}}},i=t("KHd+"),o=Object(i.a)(r,(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"my-12"},[s("nav",{staticClass:"inline-block w-1/4 border-r-2 border-gray-200"},a._l(a.slides,(function(e,t){return s("a",{key:t,staticClass:"mt-1 capitalize group flex items-center px-3 py-2 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-400 focus:outline-none transition border-blue-500 hover:bg-gray-100 transition ease-in-out duration-150",class:{"border-r-3 border-blue-500 hover:bg-gray-100":a.activeIndex===t},attrs:{href:"#"+t},on:{click:function(e){return a.setActive(t)}}},[s("span",{staticClass:"truncate"},[a._v(" "+a._s(e.title)+" ")])])})),0),s("div",{staticClass:"content inline-block h-full w-3/4 align-top p-5 transition ease-in-out duration-150"},[s("div",{staticClass:"hidden",staticStyle:{display:"block"},attrs:{id:a.slides[a.activeIndex]}},[a.slides[a.activeIndex].image?s("g-image",{attrs:{src:t("2CP8")("./"+a.slides[a.activeIndex].image),alt:a.slides[a.activeIndex].title}}):a._e(),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:a._s(a.slides[a.activeIndex].content)}})],1)])])}),[],!1,null,null,null).exports,l=t("bMn3"),g=t("IGkE"),d={props:["HIWData","main"]},c=Object(i.a)(d,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"py-12 px-4"},[t("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[t("div",{staticClass:"lg:w-1/2 px-2"},[t("g-image",{staticClass:"g-image g-image--lazy g-image--loading",attrs:{src:a.main.image.src,alt:a.main.title}})],1),t("div",{staticClass:"lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0"},[t("h2",{staticClass:"text-4xl px-4 mb-4 leading-tight font-semibold font-heading"},[a._v("\n        "+a._s(a.main.title)+"\n      ")]),a._l(a.HIWData,(function(e,s){return t("div",{key:s,staticClass:"p-4 mb-4",class:{"rounded shadow-md":s%2!=0}},[t("h3",{staticClass:"text-2xl mb-2 font-semibold font-heading"},[a._v("\n          "+a._s(e.title)+"\n        ")]),t("p",{staticClass:"text-gray-700 leading-relaxed"},[a._v("\n          "+a._s(e.excerpt)+"\n        ")])])}))],2)])])}),[],!1,null,null,null).exports,p={props:["products"]},m=(t("LoVC"),Object(i.a)(p,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"bannerFondo bg-green-800 bg-left-top bg-auto bg-repeat-x",staticStyle:{"background-image":"url(./img/continuartl_4.png)"}}),t("div",{staticClass:"-mt-64"},[a._m(0),t("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-3"},a._l(a.products,(function(e,s){return t("div",{key:s,staticClass:"p-2 sm:p-10 text-center cursor-pointer"},[t("div",{staticClass:"py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white"},[t("div",{staticClass:"space-y-10"},[t("i",{staticClass:"fa fa-spa",staticStyle:{"font-size":"48px"}}),t("div",{staticClass:"px-6 py-4"},[t("div",{staticClass:"space-y-5"},[t("div",{staticClass:"font-bold text-xl mb-2"},[a._v(a._s(e.title))]),t("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700 text-base",domProps:{innerHTML:a._s(e.content)}})])])])])])})),0)])])}),[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"w-full text-center"},[e("p",{staticClass:"text-sm tracking-widest text-white"},[this._v("subtitle")]),e("h1",{staticClass:"font-bold text-5xl text-white"},[this._v("title")])])}],!1,null,"7d1e1022",null).exports),u=t("hcyh"),w=t("fuxi"),h=t("RRjm"),x=t("phRe"),v=t("qaXD"),f={props:["brand"],computed:{image:function(){return this.brand.image.src?this.brand.image.src:t("J21R")("./".concat(this.brand.image))}}},k=Object(i.a)(f,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"bg-white"},[t("div",{staticClass:"max-w-screen-xl mx-auto py-16"},[t("div",{staticClass:"brandpanel rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"},[t("div",{staticClass:"pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"},[t("div",{staticClass:"lg:self-center"},[t("h2",{staticClass:"text-3xl leading-9 font-extrabold text-white sm:text-3xl sm:leading-10"},[t("span",{staticClass:"block"},[a._v(a._s(a.brand.title))]),a.brand.subtitle?t("span",{staticClass:"block"},[a._v(a._s(a.brand.subtitle))]):a._e()]),t("p",{staticClass:"mt-4 text-lg leading-6 text-white"},[a._v("\n            "+a._s(a.brand.excerpt)+"\n          ")]),t("g-link",{staticClass:"mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-gray-900 hover:text-indigo-500 hover:bg-gray-50 transition duration-150 ease-in-out",attrs:{to:a.brand.sourceUrl}},[a._v(a._s(a.brand.btnTxt))])],1)]),t("div",{staticClass:"relative pb-3/5 -mt-6 md:pb-1/2"},[t("g-image",{staticClass:"absolute brandpanel inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20",attrs:{src:a.image,alt:a.brand.title}})],1)])])])}),[],!1,null,null,null).exports,_={props:["split"]},b=Object(i.a)(_,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"relative bg-gray-800"},[t("div",{staticClass:"h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"},[t("g-image",{staticClass:"w-full h-full object-cover",attrs:{src:a.split.image,alt:"Support team"}})],1),t("div",{staticClass:"relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"},[t("div",{staticClass:"md:ml-auto md:w-1/2 md:pl-10"},[t("div",{staticClass:"text-base leading-6 font-semibold uppercase tracking-wider text-gray-300"},[a._v("\n        "+a._s(a.split.subtitle)+"\n      ")]),t("h2",{staticClass:"mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},[a._v("\n        "+a._s(a.split.title)+"\n      ")]),t("p",{staticClass:"mt-3 text-lg leading-7 text-gray-300"},[a._v("\n        "+a._s(a.split.excerpt)+"\n      ")]),t("div",{staticClass:"mt-8"},[t("div",{staticClass:"inline-flex rounded-md shadow"},[t("a",{staticClass:"mt-2 text-gray-900 bg-white hover:text-gray-600 shadow px-6 py-3 inline-flex items-center text-base rounded shadow leading-none font-semibold",attrs:{href:a.split.sourceUrl}},[a._v("\n            "+a._s(a.split.btnTxt)+"\n            "),t("svg",{staticClass:"-mr-1 ml-3 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}}),t("path",{attrs:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}})])])])])])])])}),[],!1,null,null,null).exports,P={components:{NewCard:s.a,Header:n.a,VerticalNav:o,GetInTouch:l.a,SolutionsHeader:g.a,HowItWorks:c,ShowcaseProducts:m,Features:u.a,logoShowcase:w.a,CallToAction:h.a,SignUp:x.a,Comparison:v.a,BrandPanel:k,SplitWithImage:b},metaInfo:function(){return{title:this.$page.markdownPage.title}}},C=(t("tsPy"),null),$=Object(i.a)(P,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[t("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden py-5"},[a.$page.markdownPage.header?t("SolutionsHeader",{attrs:{header:a.$page.markdownPage.header}}):a._e(),a.$page.markdownPage&&a.$page.markdownPage.solution_image2?t("g-image",{attrs:{src:a.$page.markdownPage.solution_image2.src}}):a._e(),a.$page.markdownPage.headerSolution4?t("SolutionsHeader",{attrs:{header:a.$page.markdownPage.headerSolution4}}):a._e(),a.$page.markdownPage.solution_image3?t("g-image",{attrs:{src:a.$page.markdownPage.solution_image3.src}}):a._e(),"contact"!==a.$page.markdownPage.id&&a.$page.markdownPage.header_title&&""!=a.$page.markdownPage.header_title?t("Header",{attrs:{title:a.$page.markdownPage.header_title,image:a.$page.markdownPage.header_image,altImg:a.$page.markdownPage.header_altImg,excerpt:a.$page.markdownPage.header_excerpt,button:a.$page.markdownPage.button,link:a.$page.markdownPage.link}}):a._e(),a.$page.markdownPage.features3&&a.$page.markdownPage.features3.length>0?t("Features",{attrs:{main:a.$page.markdownPage.featuresMain3,features:a.$page.markdownPage.features3}}):a._e(),a.$page.markdownPage.howItWorks&&a.$page.markdownPage.howItWorks.length>0?t("HowItWorks",{attrs:{HIWData:a.$page.markdownPage.howItWorks,main:a.$page.markdownPage.howItWorksMain}}):a._e(),a.$page.markdownPage.headerSolution?t("SolutionsHeader",{attrs:{header:a.$page.markdownPage.headerSolution}}):a._e(),a.$page.markdownPage.contactData&&a.$page.markdownPage.contactData.length>0?t("GetInTouch",{attrs:{contacts:a.$page.markdownPage.contactData}}):a._e(),a.$page.markdownPage.productData&&a.$page.markdownPage.productData.length>0?t("ShowcaseProducts",{attrs:{products:a.$page.markdownPage.productData}}):a._e(),a.$page.markdownPage.solution_image?t("g-image",{attrs:{src:a.$page.markdownPage.solution_image.src}}):a._e(),a.$page.markdownPage.headerSolution2?t("SolutionsHeader",{attrs:{header:a.$page.markdownPage.headerSolution2}}):a._e(),a.$page.markdownPage.features&&a.$page.markdownPage.features.length>0?t("Features",{attrs:{main:a.$page.markdownPage.featuresMain,features:a.$page.markdownPage.features}}):a._e(),a.$page.markdownPage.slide&&a.$page.markdownPage.slides.length>0?t("VerticalNav",{attrs:{slides:a.$page.markdownPage.slides}}):a._e(),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:a._s(a.$page.markdownPage.content)}}),a._l(a.$page.markdownPage.cards,(function(a){return t("NewCard",{key:a.id,attrs:{card:a}})})),a.$page.markdownPage.headerSolution3?t("SolutionsHeader",{attrs:{header:a.$page.markdownPage.headerSolution3}}):a._e(),[t("ClientOnly",[a.$page.markdownPage.comparisonSecs&&a.$page.markdownPage.comparisonSecs.length>0?t("Comparison",{attrs:{main:a.$page.markdownPage.comparisonMain,sections:a.$page.markdownPage.comparisonSecs}}):a._e()],1)],a.$page.markdownPage.features2&&a.$page.markdownPage.features2.length>0?t("Features",{attrs:{main:a.$page.markdownPage.featuresMain2,features:a.$page.markdownPage.features2}}):a._e(),a._l(a.$page.markdownPage.cards2,(function(a){return t("NewCard",{key:a.id,attrs:{card:a}})})),[t("ClientOnly",[a.$page.markdownPage.cta?t("CallToAction",{attrs:{cta:a.$page.markdownPage.cta}}):a._e()],1)],a.$page.markdownPage.solution_image4?t("g-image",{attrs:{src:a.$page.markdownPage.solution_image4.src}}):a._e(),[t("ClientOnly",[a.$page.markdownPage.signup?t("SignUp",{attrs:{signup:a.$page.markdownPage.signup}}):a._e()],1)],a.$page.markdownPage.brandPanel?t("BrandPanel",{attrs:{brand:a.$page.markdownPage.brandPanel}}):a._e()],2)])}),[],!1,null,"445f1082",null);"function"==typeof C&&C($);e.default=$.exports}}]);