"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{4423:function(e,n,s){s.d(n,{Z:function(){return b}});var a=s(5893),r=s(7294),c=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){var s=function(s){n.current.contains(s.target)||e()};return document.addEventListener("mousedown",s),function(){document.removeEventListener("mousedown",s)}})),n},t=function(e){var n=e.content,s=e.close,t=c((function(){s(!1)}));return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-fade popup-box-inline mfp-ready"}),(0,a.jsx)("div",{className:"mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-inline-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:t,children:(0,a.jsxs)("div",{id:"popup-2",className:"popup-box mfp-fade",children:[(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n.outerHTML}}),(0,a.jsx)("button",{onClick:function(){return s()},title:"Close (Esc)",type:"button",className:"mfp-close",children:"\xd7"})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},l=function(){var e=(0,r.useState)(!1),n=e[0],s=e[1],c=(0,r.useState)(null),l=c[0],i=c[1];return(0,r.useEffect)((function(){setTimeout((function(){for(var e=function(e){var a=n[e];a.addEventListener("click",(function(){s(!0);var e=a.closest(".box-item").getElementsByClassName("mfp-hide")[0].getElementsByClassName("content")[0];i(e)}))},n=document.querySelectorAll(".has-popup-media"),a=0;a<n.length;a++)e(a)}),500)}),[]),(0,a.jsx)(r.Fragment,{children:n&&(0,a.jsx)(t,{content:l,close:function(){i(null),s(!1)}})})},i=function(e){var n=e.close,s=e.imgs,c=s.length>0?s:["images/works/work6.jpg","images/works/work1.jpg","images/works/work5.jpg"],t=(0,r.useState)(0),l=t[0],i=t[1];return(0,a.jsxs)("div",{className:"postion-realtive",children:[(0,a.jsx)("div",{className:"mfp-bg mfp-fade mfp-ready",onClick:function(){return n()}}),(0,a.jsx)("div",{tabIndex:-1,style:{overflow:"hidden auto"},className:"mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",children:(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-image-holder",children:[(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,a.jsx)("div",{className:"mfp-content imgGallery_popup",children:(0,a.jsx)("div",{className:"mfp-iframe-scaler",children:(0,a.jsx)("div",{className:"img-container",children:(0,a.jsx)("img",{style:{width:"100%"},className:"mfp-img",src:c[l]})})})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]}),(0,a.jsx)("button",{title:"Previous (Left arrow key)",type:"button",className:"mfp-arrow mfp-arrow-left mfp-prevent-close",onClick:function(){return i((l+c.length-1)%c.length)}}),(0,a.jsx)("button",{title:"Next (Right arrow key)",type:"button",className:"mfp-arrow mfp-arrow-right mfp-prevent-close",onClick:function(){i((l+1)%c.length)}})]})})]})},o=function(){var e=(0,r.useState)([]),n=e[0],s=e[1],c=(0,r.useState)(!1),t=c[0],l=c[1],o=(0,r.useState)([]);o[0],o[1];return(0,r.useEffect)((function(){setTimeout((function(){for(var e=function(e){var a=n[e];a.addEventListener("click",(function(){l(!0);for(var e=[],n=a.closest(".image").getElementsByClassName("mfp-hide")[0].getElementsByTagName("a"),r=0;r<n.length;r++){var c=n[r].getAttribute("href");e.push(c)}s(e)}))},n=document.querySelectorAll(".has-popup-gallery"),a=0;a<n.length;a++)e(a)}),1e3),console.log(n)}),[t]),(0,a.jsx)(r.Fragment,{children:t&&(0,a.jsx)(i,{imgs:n,close:function(){l(!1),s([])}})})},d=function(e){var n=e.close,s=e.src,t=c((function(){n(!1)}));return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:function(){return n(!1)}}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:" popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,a.jsx)("div",{className:"mfp-content",ref:t,children:(0,a.jsx)("div",{className:"mfp-iframe-scaler",children:(0,a.jsx)("img",{className:"mfp-img",src:s})})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},m=function(){var e=(0,r.useState)(!1),n=e[0],s=e[1],c=(0,r.useState)(null),t=c[0],l=c[1];return(0,r.useEffect)((function(){setTimeout((function(){document.querySelectorAll("a").forEach((function(e){e.href.includes("/images")&&null===e.getAttribute("download")&&e.addEventListener("click",(function(n){n.preventDefault(),l(e.href),s(!0)}))}))}),1500)}),[]),(0,a.jsx)(r.Fragment,{children:n&&(0,a.jsx)(d,{close:function(){return s(!1)},src:t})})},u=function(e){var n=e.close,s=e.videoID,t=c((function(){n(!1)}));return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:function(){return n(!1)}}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container popup-container mfp-s-ready mfp-iframe-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:t,children:(0,a.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,a.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:function(){return n()},children:"\xd7"}),(0,a.jsx)("iframe",{src:s,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},f=function(){var e=(0,r.useState)(!1),n=e[0],s=e[1],c=(0,r.useState)(null),t=c[0],l=c[1];return(0,r.useEffect)((function(){setTimeout((function(){document.querySelectorAll("a").forEach((function(e){(e.href.includes("www.youtube.com")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",(function(n){n.preventDefault(),l(e.href),s(!0)}))}))}),1500)}),[]),(0,a.jsx)(r.Fragment,{children:n&&(0,a.jsx)(u,{close:function(){return s(!1)},videoID:t})})},p=s(0),h=function(){return(0,a.jsxs)("footer",{className:"footer",children:[(0,a.jsxs)("div",{className:"soc-box",children:[(0,a.jsx)("div",{className:"follow-label",children:"Follow Me"}),(0,a.jsxs)("div",{className:"soc",children:[(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.github.com/renoirlucena",children:(0,a.jsx)("span",{className:"icon fab fa-github"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/renoirlucena",children:(0,a.jsx)("span",{className:"icon fab fa-instagram"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://linkedin.com/in/renoirlucena",children:(0,a.jsx)("span",{className:"icon fab fa-linkedin"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://wa.me/5511973753155",children:(0,a.jsx)("span",{className:"icon fab fa-whatsapp"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"tel:13475719001",children:(0,a.jsx)("span",{className:"icon fab fa-skype"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:hi@renoirlucena.dev",children:(0,a.jsx)("span",{className:"icon fa fa-envelope"})})]})]}),(0,a.jsx)("div",{className:"clear"})]})},x=s(1664),j=s.n(x),v=function(){return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"logo hover-masks-logo",children:(0,a.jsxs)("a",{href:"#",children:[(0,a.jsxs)("span",{className:"mask-lnk",children:["Renoir ",(0,a.jsx)("strong",{children:"Lucena"})]}),(0,a.jsxs)("span",{className:"mask-lnk mask-lnk-hover",children:["Download ",(0,a.jsx)("strong",{children:"CV"})]})]})}),(0,a.jsx)("div",{className:"top-menu hover-masks",children:(0,a.jsx)("div",{className:"top-menu-nav",children:(0,a.jsx)("div",{className:"menu-topmenu-container",children:(0,a.jsxs)("ul",{className:"menu",children:[(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(j(),{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Home"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Home"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(j(),{href:"/resume",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Resume"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Resume"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(j(),{href:"/works",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Portfolio"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Portfolio"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(j(),{href:"/contacts",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Contact"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Contact"})]})})})]})})})})]})},N=function(){return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(k,{}),(0,a.jsx)(g,{})]})},g=function(){return(0,a.jsx)("header",{className:"header desktopHeader",children:(0,a.jsx)("div",{className:"head-top",children:(0,a.jsx)(v,{})})})},k=function(){var e=(0,r.useState)(!1),n=e[0],s=e[1];return(0,a.jsx)("header",{className:"header mobileHeader ".concat(n?"active":""),children:(0,a.jsxs)("div",{className:"head-top",children:[(0,a.jsx)("a",{href:"#",className:"menu-btn",onClick:function(){return s(!n)},children:(0,a.jsx)("span",{})}),(0,a.jsx)(v,{})]})})},y=function(){var e=(0,r.useState)(!0),n=e[0],s=e[1];return(0,r.useEffect)((function(){setTimeout((function(){document.querySelector(".lines").classList.add("ready")}),3e3),setTimeout((function(){s(!1),document.querySelector(".lines").classList.add("finish")}),1e3)}),[]),(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("div",{className:"preloader",style:{display:n?"block":"none"},children:(0,a.jsx)("div",{className:"centrize full-width",children:(0,a.jsx)("div",{className:"vertical-center",children:(0,a.jsxs)("div",{className:"spinner",children:[(0,a.jsx)("div",{className:"double-bounce1"}),(0,a.jsx)("div",{className:"double-bounce2"})]})})})})})},b=function(e){var n=e.children,s=e.noHeader;return(0,r.useEffect)((function(){(0,p.oc)()}),[]),(0,r.useEffect)((function(){window.addEventListener("scroll",p.h4)}),[]),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(m,{}),(0,a.jsx)(o,{}),(0,a.jsx)(l,{}),(0,a.jsx)(y,{}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"cursor-follower"}),!s&&(0,a.jsx)(N,{}),(0,a.jsx)("div",{className:"wrapper",children:n}),(0,a.jsx)(h,{}),(0,a.jsx)("div",{className:"lines",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"})]})})]})]})}},0:function(e,n,s){s.d(n,{Tk:function(){return r},av:function(){return l},bR:function(){return t},h4:function(){return c},oc:function(){return a}});var a=function(){document.addEventListener("mousemove",(function(e){var n=e.pageX,s=e.pageY,a=document.querySelector(".cursor-follower");a.style.transform="translate3d(".concat(n,"px,").concat(s,"px,0px)"),document.querySelectorAll("a").forEach((function(e){e.addEventListener("mouseenter",(function(){a.classList.add("cursor-hover")})),e.addEventListener("mouseleave",(function(){a.classList.remove("cursor-hover")}))}))}))},r=function(){new(s(4102))(document.getElementsByClassName("wp-post-image"))},c=function(){var e=window.scrollY;document.querySelectorAll(".header").forEach((function(n){n&&(e>100?(n.classList.add("fixed"),document.querySelector("body").classList.remove("background-enabled")):(n.classList.remove("fixed"),document.querySelector("body").classList.add("background-enabled")))}))},t=function(){document.querySelectorAll(".skills .progress").forEach((function(e){e.insertAdjacentHTML("beforeend",'<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');var n=e.getElementsByClassName("percentage")[0];n.insertAdjacentHTML("beforeend",'<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');var s=e.clientWidth;n.getElementsByClassName("da")[0].style.width="".concat(s,"px")}))},l=function(){window.addEventListener("resize",(function(){document.querySelectorAll(".skills-list.dotted .progress").forEach((function(e){var n=e.clientWidth;e.getElementsByClassName("da")[0].style.width="".concat(n+1,"px")}))}))}}}]);