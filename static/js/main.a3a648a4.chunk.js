(this.webpackJsonpmarkboverseas=this.webpackJsonpmarkboverseas||[]).push([[0],{10:function(e,a,n){e.exports={burgerButton:"BurgerButton_burgerButton__RPq2l",burgerLineOpen:"BurgerButton_burgerLineOpen__7SJ4V",burgerLineClose:"BurgerButton_burgerLineClose__1lj1- BurgerButton_burgerLineOpen__7SJ4V"}},13:function(e,a,n){e.exports={container:"Header_container__1jjSQ",headerNav:"Header_headerNav__3GUSl",logo:"Header_logo__s31zR",name:"Header_name__3GfSf",headerFixed:"Header_headerFixed__2uvXM Header_container__1jjSQ",showElement:"Header_showElement__3dlY6"}},14:function(e,a,n){e.exports={container:"Contact_container__SM7zK",logo:"Contact_logo__165i_",parag:"Contact_parag__2ioXt"}},16:function(e,a,n){e.exports={parallaxWrapper:"Home_parallaxWrapper__21PBf",container:"Home_container__aTSp4",intro:"Home_intro__1Yf5w",logo:"Home_logo__1wPUp",name:"Home_name__3tvRS",line:"Home_line__3MynN",welcome:"Home_welcome__3HXwW",other:"Home_other__iLXd0",link:"Home_link__1hXLv",none:"Home_none__1pbzu"}},2:function(e,a,n){e.exports={container:"BurgerMenu_container__9UCu3",opaIn:"BurgerMenu_opaIn__22HfJ",containerNone:"BurgerMenu_containerNone__3VIw3 BurgerMenu_container__9UCu3",moveIn:"BurgerMenu_moveIn__3oofS",navFixed:"BurgerMenu_navFixed__2SUzu BurgerMenu_container__9UCu3",burgerWrapper:"BurgerMenu_burgerWrapper__H3pBZ",wrapFixed:"BurgerMenu_wrapFixed__2nR4f",menuList:"BurgerMenu_menuList__3fuOl",menuItem:"BurgerMenu_menuItem__235uQ",menuLink:"BurgerMenu_menuLink__7CFsw",activeLink:"BurgerMenu_activeLink__1GbcS"}},34:function(e,a,n){e.exports={container:"GoogleMaps_container__FhlUq",frame:"GoogleMaps_frame__20JPp"}},35:function(e,a,n){e.exports={container:"Footer_container__3thN1",footer:"Footer_footer__3O0wL"}},46:function(e,a,n){e.exports=n(65)},6:function(e,a,n){e.exports={parallaxWrapper:"ContactUs_parallaxWrapper__196h6",container:"ContactUs_container__14i2R",title:"ContactUs_title__YvD0L",subtitle:"ContactUs_subtitle__1wELs",form:"ContactUs_form__1J246",label:"ContactUs_label__2kGYC",labelValid:"ContactUs_labelValid__Zj4U9 ContactUs_label__2kGYC",input:"ContactUs_input__1mfbh",text:"ContactUs_text__V7Edx",button:"ContactUs_button__3Zolg"}},63:function(e,a,n){},64:function(e,a,n){},65:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(19),c=n(11),o=n(42),m="HANDLE_MODAL_OPEN",i="HANDLE_MODAL_CLOSE",s="HANDLE_BURGER_TOGGLE",u=Object(c.combineReducers)({modalHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,n=a.type,t=a.payload;switch(n){case i:case m:return t;default:return e}},burgerHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,n=a.type;a.payload;switch(n){case s:return!e;default:return e}}}),_=n(43),p=Object(c.combineReducers)({controller:u}),d=[_.a],E=c.applyMiddleware.apply(void 0,d),g=Object(c.createStore)(p,Object(o.composeWithDevTools)(E)),f=n(17),b=n.n(f),v=n(8),N=n(15),h=n(18),L=function(e){return e.controller.burgerHandler},x=function(){return{type:s}},B=n(10),w=n.n(B),C={handlerBurger:x},O=Object(l.b)((function(e){return{isOpen:L(e)}}),C)((function(e){var a=e.isOpen,n=e.handlerBurger;return r.a.createElement("div",{onClick:n,className:w.a.burgerButton},r.a.createElement("div",{className:a?w.a.burgerLineClose:w.a.burgerLineOpen}),r.a.createElement("div",{className:a?w.a.burgerLineClose:w.a.burgerLineOpen}),r.a.createElement("div",{className:a?w.a.burgerLineClose:w.a.burgerLineOpen}),r.a.createElement("div",{className:a?w.a.burgerLineClose:w.a.burgerLineOpen}))})),k=n(2),H=n.n(k),S={handlerBurger:x},M=Object(l.b)((function(e){return{isOpen:L(e)}}),S)((function(e){var a=e.isOpen,n=(e.handlerBurger,window.pageYOffset);return window.addEventListener("scroll",(function(){var e=window.pageYOffset,n=document.querySelector(".".concat(H.a.container));a&&(n.className=e>200?"".concat(H.a.container," ").concat(H.a.navFixed):"".concat(H.a.container))})),r.a.createElement("div",{className:a?n>200?H.a.navFixed:H.a.container:H.a.containerNone},a&&r.a.createElement("nav",{className:a?H.a.burgerWrapper:H.a.burgerWrapperNone},r.a.createElement("ul",{className:H.a.menuList},r.a.createElement("li",{className:H.a.menuItem},r.a.createElement(v.c,{className:H.a.menuLink,activeClassName:H.a.activeLink,to:"/consulting/"},"project management Consulting")),r.a.createElement("li",{className:H.a.menuItem},r.a.createElement(v.c,{className:H.a.menuLink,activeClassName:H.a.activeLink,to:"/trading/"},"general trading")),r.a.createElement("li",{className:H.a.menuItem},r.a.createElement(v.c,{className:H.a.menuLink,activeClassName:H.a.activeLink,to:"/licenses/"},"licenses")))))})),U=n(13),y=n.n(U),j=function(){return window.addEventListener("scroll",(function(){var e=document.querySelector(".".concat(y.a.container));window.pageYOffset>200?e.className="".concat(y.a.container," ").concat(y.a.headerFixed):e.className="".concat(y.a.container)})),r.a.createElement("div",{className:y.a.container},r.a.createElement("div",{className:y.a.headerNav},r.a.createElement(v.c,{to:"/home",className:y.a.name},"markeb overseas fze"),r.a.createElement(O,null)),r.a.createElement("div",{className:y.a.nav},r.a.createElement(M,null)))},F=n(34),R=n.n(F),A=function(){return r.a.createElement(h.Element,{name:"map",className:"element"},r.a.createElement("div",{className:R.a.container},r.a.createElement("iframe",{className:R.a.frame,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40641.85072067571!2d55.97117231298984!3d25.79478631119981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67131f14a49b1%3A0xd3b5ffc06b24ab09!2sRas%20Al%20Khaimah%20Economic%20Zone%20-%20RAKEZ!5e0!3m2!1sru!2sua!4v1581981656427!5m2!1sru!2sua",frameBorder:"0",style:{border:0},allowFullScreen:""})))},W=n(35),I=n.n(W),Y=function(){return r.a.createElement("div",{className:I.a.container},r.a.createElement("div",{className:I.a.footer},r.a.createElement("p",null,"info@markeboverseas.com"),r.a.createElement("p",null,"Copyright (c) 2020 - markeb overseas fze")))},G=n(14),V=n.n(G),Z=function(){return r.a.createElement(h.Element,{name:"contact",className:"element"},r.a.createElement("div",{className:V.a.container},r.a.createElement("div",{className:V.a.logo}),r.a.createElement("p",{className:V.a.parag},"MARKEB OVERSEAS FZE"),r.a.createElement("p",{className:V.a.parag},"B19_725 Emirates Islamic Bank Building"),r.a.createElement("p",{className:V.a.parag},"RAKEZ Business Zone \u2013 FZ, RAK, United Arab Emirates"),r.a.createElement("p",{className:V.a.parag},"Registration N 0000004023920"),r.a.createElement("p",{className:V.a.parag},"Email Olekcey2016@gmail.com"),r.a.createElement("p",{className:V.a.parag},"Tel +971507876809")))},q=n(21),D=n(36),J=n(45),z=n(6),K=n.n(z),P=function(){var e={name:"",email:"",text:""},a=Object(t.useState)(e),n=Object(J.a)(a,2),l=n[0],c=n[1],o=function(e){"positions_id"===e.target.name?c(Object(D.a)({},l,Object(q.a)({},e.target.name,Number(e.target.value)))):c(Object(D.a)({},l,Object(q.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:K.a.parallaxWrapper},r.a.createElement("div",{className:K.a.container},r.a.createElement("h1",{className:K.a.title},"Contact Us"),r.a.createElement("p",{className:K.a.subtitle},"Feel free to drop us a line."),r.a.createElement("form",{className:K.a.form,onSubmit:function(a){return function(a){a.preventDefault(),c(e)}(a)}},r.a.createElement("input",{className:K.a.input,required:!0,value:l.name,name:"name",onChange:function(e){return o(e)},minLength:"2",maxLength:"60",placeholder:"Your name",id:"name",type:"text"}),r.a.createElement("label",{className:K.a.labelValid,htmlFor:"name"},"Enter valid Name"),r.a.createElement("input",{className:K.a.input,required:!0,value:l.email,name:"email",onChange:function(e){return o(e)},minLength:"2",maxLength:"100",placeholder:"Your email",id:"email",type:"email"}),r.a.createElement("label",{className:K.a.labelValid,htmlFor:"email"},"Enter valid Email"),r.a.createElement("textarea",{className:"".concat(K.a.input," ").concat(K.a.text),required:!0,value:l.text,name:"text",onChange:function(e){return o(e)},id:"text",rows:"4",placeholder:"Write Something"}),r.a.createElement("button",{type:"submit",className:K.a.button},"Say Hello"))))},X=n(16),T=n.n(X),Q=function(){return window.addEventListener("scroll",(function(){var e=document.querySelector(".".concat(T.a.link));window.pageYOffset>200?e.className="".concat(T.a.link," ").concat(T.a.none):e.className="".concat(T.a.link)})),r.a.createElement("div",null,r.a.createElement("div",{className:T.a.parallaxWrapper},r.a.createElement(j,null),r.a.createElement(h.Link,{className:T.a.link,to:"contact",spy:!0,smooth:!0,offset:10,duration:500})),r.a.createElement(Z,null),r.a.createElement(A,null),r.a.createElement(P,null),r.a.createElement(Y,null))},$=function(){return r.a.createElement("div",null,r.a.createElement(Q,null))},ee=function(){return r.a.createElement("div",null,"Licenses")},ae=function(){return r.a.createElement("div",null,r.a.createElement(ee,null))};var ne=function(){var e=r.a.createElement("div",null,r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/home/",exact:!0},r.a.createElement($,null)),r.a.createElement(N.b,{path:"/licenses/",exact:!0},r.a.createElement(ae,null)),r.a.createElement(N.a,{to:"/home/"})));return(r.a.createElement(t.Suspense,null,r.a.createElement(v.a,null,e)))};n(63),n(64);b.a.render(r.a.createElement(v.b,{basename:"/markeboverseas"},r.a.createElement(l.a,{store:g},r.a.createElement(N.b,{component:ne}))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a3a648a4.chunk.js.map