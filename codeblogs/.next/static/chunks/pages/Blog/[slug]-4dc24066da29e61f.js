(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{2899:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Blog/[slug]",function(){return r(9685)}])},9685:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return o},default:function(){return u}});var a=r(5893),n=(r(1163),r(5675),r(6785)),s=new n.Schema({title:String,slug:{type:String,unique:!0},author:String,body:String,img:String,comments:[{body:String,date:Date}],date:{type:Date,default:Date.now},category:{type:String,required:!0}},{timestamps:!0});n.models={};n.model("Blogs",s);var i=r(6785),l=new i.Schema({name:{type:String,required:!0},image:String,about:String,role:String},{timestamps:!0});i.models={};i.model("Author",l),r(6785);var c=r(7762),d=r(8086).Parser,o=!0,u=function(e){var t=e.blog,r=e.post,n=(new d).parse(r),s=c.renderToStaticMarkup(n);return(0,a.jsx)("section",{className:"container px-5 mx-auto flex flex-col ",children:(0,a.jsxs)("div",{className:"lg:w-4/6 mx-auto bg-white border-2 rounded-md",children:[(0,a.jsx)("div",{className:"rounded-md overflow-hidden",children:(0,a.jsx)("img",{alt:"content",className:" object-center max-h-128 border-b-2",src:t.attributes.image.data&&t.attributes.image.data.attributes.name,width:"1200",height:"1500"})}),(0,a.jsxs)("div",{className:"flex flex-col mt-8",children:[(0,a.jsx)("h3",{children:t&&t.attributes.title}),(0,a.jsx)("div",{className:"container py-4 rounded-md mb-2 w-full",dangerouslySetInnerHTML:{__html:s}}),(0,a.jsxs)("div",{className:" text-center lg:flex border-t-2 h-auto p-6 ",children:[(0,a.jsx)("div",{className:"lg:self-center items-center",children:(0,a.jsx)("div",{className:"w-20 h-20 rounded-full inline-flex lg:self-center items-center m-4 justify-center align-middle bg-gray-800 text-gray-600",children:(0,a.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-10 h-10",viewBox:"0 0 24 24",children:[(0,a.jsx)("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),(0,a.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})}),(0,a.jsxs)("div",{className:"flex flex-col self-center mx-4 px-2",children:[(0,a.jsx)("h4",{className:"self-start",children:t.attributes.author.data.attributes.name}),(0,a.jsx)("p",{className:"text-left",children:t.attributes.author.data.attributes.about})]})]})]})]})})}}},function(e){e.O(0,[774,961,86,378,888,179],(function(){return t=2899,e(e.s=t);var t}));var t=e.O();_N_E=t}]);