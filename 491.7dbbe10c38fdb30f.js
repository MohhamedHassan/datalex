"use strict";(self.webpackChunkdatalex=self.webpackChunkdatalex||[]).push([[491],{8491:(M,m,o)=>{o.r(m),o.d(m,{LayoutModule:()=>E});var l=o(6814),s=o(8291),n=o(8926),_=o(7755),u=o(6584),d=o(3089);const h=function(){return{exact:!0}};function r(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"a",21),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(3);return i.openNav=!1,n.KtG(i.selcetedSubMenu=-1)}),n._uU(1),n.ALo(2,"lang"),n.qZA()}if(2&e){const t=n.oxw().$implicit;n.Q6J("routerLinkActiveOptions",n.DdM(6,h))("routerLink",null==t?null:t.link),n.xp6(1),n.hij(" ",n.xi3(2,3,t.header,t.header_ar)," ")}}function v(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"a",11),n.NdJ("click",function(){n.CHM(t);const i=n.oxw().index,C=n.oxw(2);return n.KtG(C.selcetedSubMenu=C.selcetedSubMenu==i?-1:i)}),n._uU(1),n.ALo(2,"lang"),n._UZ(3,"span",12)(4,"i",13),n.qZA()}if(2&e){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",n.xi3(2,1,t.header,t.header_ar)," ")}}function g(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"a",23),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(4);return i.openNav=!1,n.KtG(i.selcetedSubMenu=-1)}),n._uU(1),n.ALo(2,"lang"),n.qZA()}if(2&e){const t=c.$implicit;n.Q6J("routerLink",t.link)("routerLinkActiveOptions",n.DdM(6,h)),n.xp6(1),n.hij(" ",n.xi3(2,3,t.header,t.header_ar),"")}}function p(e,c){if(1&e&&(n.TgZ(0,"div",14),n.YNc(1,g,3,7,"a",22),n.qZA()),2&e){const t=n.oxw(),a=t.index,i=t.$implicit,C=n.oxw(2);n.ekj("d-none",C.selcetedSubMenu!=a),n.xp6(1),n.Q6J("ngForOf",null==i?null:i.navbar_items)}}function f(e,c){if(1&e&&(n.TgZ(0,"li"),n.YNc(1,r,3,7,"a",18),n.YNc(2,v,5,4,"a",19),n.YNc(3,p,2,3,"div",20),n.qZA()),2&e){const t=c.$implicit;n.xp6(1),n.Q6J("ngIf",!(null!=t.navbar_items&&t.navbar_items.length)),n.xp6(1),n.Q6J("ngIf",null==t.navbar_items?null:t.navbar_items.length),n.xp6(1),n.Q6J("ngIf",null==t.navbar_items?null:t.navbar_items.length)}}const O=function(e,c){return{"align-items-start":e,"align-items-center":c}};function P(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"a",7),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return i.openNav=!1,n.KtG(i.selcetedSubMenu=-1)}),n._UZ(5,"img",8),n.qZA()(),n.TgZ(6,"ul",9),n.YNc(7,f,4,3,"li",10),n.TgZ(8,"li")(9,"a",11),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.selcetedSubMenu=i.selcetedSubMenu==i.glopalService.navbar.length?-1:i.glopalService.navbar.length)}),n._uU(10),n.ALo(11,"uppercase"),n._UZ(12,"span",12)(13,"i",13),n.qZA(),n.TgZ(14,"div",14)(15,"a",15),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return i.openNav=!1,i.selcetedSubMenu=-1,n.KtG(i.changeLang("en"))}),n._uU(16,"EN"),n.qZA(),n.TgZ(17,"a",15),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return i.openNav=!1,i.selcetedSubMenu=-1,n.KtG(i.changeLang("ar"))}),n._uU(18,"AR"),n.qZA()()()()(),n.TgZ(19,"button",16),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.openNav=!i.openNav)}),n._UZ(20,"i",17),n.qZA()()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngClass",n.WLB(10,O,t.openNav,!t.openNav)),n.xp6(4),n.Q6J("src",t.glopalService.logo,n.LSH),n.xp6(1),n.ekj("d-none",!t.openNav),n.xp6(1),n.Q6J("ngForOf",t.glopalService.navbar),n.xp6(3),n.hij(" ",n.lcZ(11,8,t.lang)," "),n.xp6(4),n.ekj("d-none",t.selcetedSubMenu!=t.glopalService.navbar.length)}}function x(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"div",24),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.selcetedSubMenu=-1)}),n.qZA()}}let b=(()=>{class e{constructor(t,a){this.translateService=t,this.glopalService=a,this.openNav=!1,this.selcetedSubMenu=-1}closeSubMenu(t){"A"!=t.target.nodeName&&"I"!=t.target.nodeName&&(this.selcetedSubMenu=-1)}changeLang(t){"ar"==t?document.body.classList.add("rt"):document.body.classList.remove("rt"),this.translateService.use(t),localStorage.setItem("lang",t),location.reload()}get lang(){return localStorage.getItem("lang")||"en"}static#n=this.\u0275fac=function(a){return new(a||e)(n.Y36(u.sK),n.Y36(_.W))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-navbar"]],decls:3,vars:2,consts:[[1,"section-bg","py-3","py-lg-2","fixed-top",3,"click"],["class","container",4,"ngIf"],["class","cover d-none d-lg-block",3,"click",4,"ngIf"],[1,"container"],[1,"d-flex","justify-content-between","d-lg-block",3,"ngClass"],[1,"flex-column","flex-lg-row","d-flex","justify-content-lg-between","align-items-lg-center"],[1,"logo"],["routerLink","/",3,"click"],["alt","DataLex4ai",3,"src"],[1,"main","flex-lg-row","d-lg-flex"],[4,"ngFor","ngForOf"],[1,"withlinks",3,"click"],[1,"mx-1"],[1,"fa-solid","fa-chevron-down"],[1,"sub-menu"],[1,"p-3",3,"click"],[1,"bars","d-lg-none",3,"click"],[1,"fa-solid","fa-bars"],["routerLinkActive","active",3,"routerLinkActiveOptions","routerLink","click",4,"ngIf"],["class","withlinks",3,"click",4,"ngIf"],["class","sub-menu",3,"d-none",4,"ngIf"],["routerLinkActive","active",3,"routerLinkActiveOptions","routerLink","click"],["routerLinkActive","active","class","p-3",3,"routerLink","routerLinkActiveOptions","click",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"p-3",3,"routerLink","routerLinkActiveOptions","click"],[1,"cover","d-none","d-lg-block",3,"click"]],template:function(a,i){1&a&&(n.TgZ(0,"nav",0),n.NdJ("click",function(H){return i.closeSubMenu(H)}),n.YNc(1,P,21,13,"div",1),n.YNc(2,x,1,0,"div",2),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngIf",null==i.glopalService||null==i.glopalService.navbar?null:i.glopalService.navbar.length),n.xp6(1),n.Q6J("ngIf",-1!=i.selcetedSubMenu))},dependencies:[l.mk,l.sg,l.O5,s.rH,s.Od,l.gd,d.Z],styles:["nav[_ngcontent-%COMP%]{border-bottom:1px solid #edecec}nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:6.25rem}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--main)!important}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:1rem;color:var(--black);text-decoration:none;display:inline-block;padding:1.25rem;transition:.5s;cursor:pointer;position:relative;z-index:11111}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.5s;font-size:13px}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:var(--main)}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:var(--main)}@media only screen and (min-width: 992px) and (max-width: 1200px){nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:.8rem}}@media only screen and (max-width: 991px){nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding:1rem 0!important}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:static!important}}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;left:1.25rem;top:3.1rem;width:200px;border-radius:.5rem;box-shadow:0 12px 16px -4px #1018281a;overflow:hidden;background-color:var(--white);z-index:11111}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;border-bottom:1px solid var(--border);color:var(--link);font-size:.9rem;font-weight:400;line-height:1.25rem;padding:.6rem 1rem;transition:.5s;cursor:pointer}nav[_ngcontent-%COMP%]   ul.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main)}nav[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{border:1px solid var(--main);border-radius:4.25rem;color:var(--main);padding:.6rem 2rem;width:-moz-fit-content;width:fit-content;transition:.5s}nav[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]:hover{background-color:var(--main);color:var(--white)}nav[_ngcontent-%COMP%]   button.bars[_ngcontent-%COMP%]{color:var(--main);background-color:transparent;border:2px solid var(--main);border-radius:5px}@media only screen and (max-width: 991px){nav[_ngcontent-%COMP%]{overflow:auto;max-height:100vh}nav[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{margin-top:.9rem!important}nav[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{margin-top:.5rem}nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:none!important}}.cover[_ngcontent-%COMP%]{position:fixed;background-color:transparent;inset:0;z-index:1111}"]})}return e})();var Z=o(7914);function S(e,c){if(1&e&&n._UZ(0,"img",16),2&e){const t=n.oxw().$implicit;n.Q6J("src",null==t||null==t.image?null:t.image.image,n.LSH)}}function T(e,c){if(1&e&&(n.TgZ(0,"h2"),n._uU(1),n.ALo(2,"lang"),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",n.xi3(2,1,t.header,t.header_ar),"")}}const N=function(e,c){return{"mb-2":e,"mb-0":c}};function k(e,c){if(1&e&&(n.TgZ(0,"p",17),n._uU(1),n.ALo(2,"lang"),n.qZA()),2&e){const t=n.oxw().$implicit;n.Q6J("ngClass",n.WLB(5,N,null==t?null:t.content_2,!(null!=t&&t.content_2))),n.xp6(1),n.hij(" ",n.xi3(2,2,t.content,t.content_ar),"")}}function y(e,c){if(1&e&&(n.TgZ(0,"p",18),n._uU(1),n.ALo(2,"lang"),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",n.xi3(2,1,t.content_2,t.content_2_ar),"")}}function A(e,c){if(1&e&&(n.TgZ(0,"div",4)(1,"div",12),n.YNc(2,S,1,1,"img",13),n.YNc(3,T,3,4,"h2",9),n.YNc(4,k,3,8,"p",14),n.YNc(5,y,3,4,"p",15),n.qZA()()),2&e){const t=c.$implicit;n.xp6(2),n.Q6J("ngIf",null==t||null==t.image?null:t.image.image),n.xp6(1),n.Q6J("ngIf",(null==t?null:t.header)||(null==t?null:t.header_ar)),n.xp6(1),n.Q6J("ngIf",(null==t?null:t.content)||(null==t?null:t.content_ar)),n.xp6(1),n.Q6J("ngIf",(null==t?null:t.content_2)||(null==t?null:t.content_2_ar))}}function L(e,c){if(1&e&&(n.TgZ(0,"div",10)(1,"div",2)(2,"div",3),n.YNc(3,A,6,4,"div",11),n.qZA()()()),2&e){const t=n.oxw();n.xp6(3),n.Q6J("ngForOf",null==t.glopalService||null==t.glopalService.footer?null:t.glopalService.footer.sections)}}function w(e,c){if(1&e&&(n.TgZ(0,"li")(1,"a",22),n._uU(2),n.ALo(3,"lang"),n.qZA()()),2&e){const t=c.$implicit;n.xp6(1),n.Q6J("routerLink",null==t?null:t.link),n.xp6(1),n.hij(" ",n.xi3(3,2,t.header,t.header_ar)," ")}}function J(e,c){if(1&e&&(n.TgZ(0,"ul",20),n.YNc(1,w,4,5,"li",21),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.glopalService.footer.navbars[0].navbar_items_container[0].navbar_items)}}function F(e,c){if(1&e&&(n.TgZ(0,"div",4)(1,"div")(2,"h2"),n._uU(3),n.ALo(4,"lang"),n.qZA(),n.YNc(5,J,2,1,"ul",19),n.qZA()()),2&e){const t=n.oxw();n.xp6(3),n.hij("",n.xi3(4,2,t.glopalService.footer.navbars[0].header,t.glopalService.footer.navbars[0].header_ar)," "),n.xp6(2),n.Q6J("ngIf",null==t.glopalService.footer.navbars[0]||null==t.glopalService.footer.navbars[0].navbar_items_container?null:t.glopalService.footer.navbars[0].navbar_items_container.length)}}function I(e,c){if(1&e&&(n.ynx(0),n._UZ(1,"hr",23),n.TgZ(2,"p",24),n._UZ(3,"i",25),n._uU(4),n.ALo(5,"lang"),n.qZA(),n.BQk()),2&e){const t=n.oxw();n.xp6(4),n.hij(" ",n.xi3(5,1,t.glopalService.footer.copyright,t.glopalService.footer.copyright_ar)," ")}}let U=(()=>{class e{constructor(t){this.glopalService=t}get lang(){return localStorage.getItem("lang")||"en"}static#n=this.\u0275fac=function(a){return new(a||e)(n.Y36(_.W))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-footer"]],decls:19,vars:4,consts:[["class","upper py-5",4,"ngIf"],[1,"lower","pt-5","pb-2"],[1,"container"],[1,"row"],[1,"col-md-4","mb-4","mb-md-0"],["alt","DataLex4ai",1,"d-block","mb-3",3,"src"],[1,"p2"],["color","white"],["class","col-md-4 mb-4 mb-md-0",4,"ngIf"],[4,"ngIf"],[1,"upper","py-5"],["class","col-md-4 mb-4 mb-md-0",4,"ngFor","ngForOf"],[1,"text-center"],["alt","footer","class","mb-3",3,"src",4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","p2 mb-0",4,"ngIf"],["alt","footer",1,"mb-3",3,"src"],[3,"ngClass"],[1,"p2","mb-0"],["class","links",4,"ngIf"],[1,"links"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"bg-white"],[1,"text-center","m-0"],[1,"fa-regular","fa-copyright"]],template:function(a,i){1&a&&(n.TgZ(0,"footer"),n.YNc(1,L,4,1,"div",0),n.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div"),n._UZ(7,"img",5),n.TgZ(8,"p",6),n._uU(9,"Welcome to DataLex4ai where we seamlessly blend the precision of manual linguistic annotation with the efficiency of automated services."),n.qZA(),n._UZ(10,"app-social-meedia",7),n.qZA()(),n.YNc(11,F,6,5,"div",8),n.TgZ(12,"div",4)(13,"div")(14,"h2"),n._uU(15,"news letter"),n.qZA(),n.TgZ(16,"p",6),n._uU(17,"Subscribe our newsletter to get our latest update & news"),n.qZA()()()(),n.YNc(18,I,6,4,"ng-container",9),n.qZA()()()),2&a&&(n.xp6(1),n.Q6J("ngIf",null==i.glopalService||null==i.glopalService.footer||null==i.glopalService.footer.sections?null:i.glopalService.footer.sections.length),n.xp6(6),n.Q6J("src",i.glopalService.logo,n.LSH),n.xp6(4),n.Q6J("ngIf",null==i.glopalService.footer||null==i.glopalService.footer.navbars?null:i.glopalService.footer.navbars.length),n.xp6(7),n.Q6J("ngIf",null==i.glopalService.footer?null:i.glopalService.footer.copyright))},dependencies:[l.mk,l.sg,l.O5,s.rH,Z.G,d.Z],styles:["footer[_ngcontent-%COMP%]{color:var(--white)}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff!important}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;line-height:1.5rem;color:var(--footer-text)!important}footer[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%]{color:var(--white)}footer[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]{background-color:var(--footer-upper)}footer[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:300;line-height:1.99rem}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]{background-color:var(--footer-lower)}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:9.75rem}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:400;line-height:2.4rem;text-transform:uppercase}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:1rem}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;font-weight:300;line-height:1.5rem;transition:.5s}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main)!important}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{position:relative}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder, footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.5rem;color:var(--gray)}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:var(--white);width:100%;border-radius:1.25rem;border:none;padding:.8rem}footer[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:var(--main);border-radius:1.25rem;padding:.3rem;width:2.5rem;position:absolute;top:5px;right:3px;cursor:pointer}  .rt footer form img{right:auto!important;left:3px!important}"]})}return e})();function Q(e,c){1&e&&(n.TgZ(0,"div",2),n._UZ(1,"span",3),n.qZA())}const Y=[{path:"",component:(()=>{class e{constructor(t){this.glopalService=t}ngOnInit(){this.glopalService.setPaddingTop()}static#n=this.\u0275fac=function(a){return new(a||e)(n.Y36(_.W))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-layout"]],decls:7,vars:3,consts:[[1,"d-flex","flex-column","justify-content-between",2,"min-height","100vh"],["class","whileLoading",4,"ngIf"],[1,"whileLoading"],[1,"loader"]],template:function(a,i){1&a&&(n.TgZ(0,"div",0)(1,"div"),n._UZ(2,"app-navbar"),n.TgZ(3,"div"),n._UZ(4,"router-outlet"),n.YNc(5,Q,2,0,"div",1),n.qZA()(),n._UZ(6,"app-footer"),n.qZA()),2&a&&(n.xp6(3),n.Udp("padding-top",i.glopalService.bodyPaddingTop),n.xp6(2),n.Q6J("ngIf",i.glopalService.loading))},dependencies:[l.O5,s.lC,b,U],styles:[".whileLoading[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#fff;height:100vh;width:100%;display:flex;justify-content:center;align-items:center;z-index:1111}.whileLoading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #FFF;border-bottom-color:var(--main);border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return e})(),children:[{path:"",pathMatch:"full",loadChildren:()=>Promise.all([o.e(592),o.e(278)]).then(o.bind(o,1278)).then(e=>e.HomepageModule)},{path:"blog-details/:id",loadChildren:()=>Promise.all([o.e(592),o.e(69)]).then(o.bind(o,7069)).then(e=>e.BlogDetailsModule)},{path:"about-us",loadChildren:()=>Promise.all([o.e(592),o.e(566)]).then(o.bind(o,4566)).then(e=>e.AboutUsModule)},{path:"why-us",loadChildren:()=>Promise.all([o.e(592),o.e(901)]).then(o.bind(o,8901)).then(e=>e.WhyUsModule)},{path:"services",loadChildren:()=>Promise.all([o.e(592),o.e(219)]).then(o.bind(o,3219)).then(e=>e.ServicesModule)},{path:"products",loadChildren:()=>Promise.all([o.e(592),o.e(274)]).then(o.bind(o,5274)).then(e=>e.ProductsModule)},{path:"blogs",loadChildren:()=>Promise.all([o.e(592),o.e(501)]).then(o.bind(o,501)).then(e=>e.BlogsModule)},{path:"jobs",loadChildren:()=>Promise.all([o.e(592),o.e(686)]).then(o.bind(o,4686)).then(e=>e.JobsModule)},{path:"contact-us",loadChildren:()=>Promise.all([o.e(592),o.e(839)]).then(o.bind(o,3839)).then(e=>e.ContactUsModule)}]}];let j=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[s.Bz.forChild(Y),s.Bz]})}return e})();var z=o(6208);let E=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[l.ez,j,z.m]})}return e})()},7914:(M,m,o)=>{o.d(m,{G:()=>h});var l=o(8926),s=o(7755),n=o(6814);function _(r,v){if(1&r&&(l.TgZ(0,"a",4),l._UZ(1,"i"),l.qZA()),2&r){const g=l.oxw().$implicit,p=l.oxw(2);l.Tol(p.color),l.Q6J("href",g.url,l.LSH),l.xp6(1),l.Tol((null==g?null:g.icon)||"fa-solid fa-share")}}function u(r,v){if(1&r&&(l.TgZ(0,"li"),l.YNc(1,_,2,5,"a",3),l.qZA()),2&r){const g=v.$implicit;l.xp6(1),l.Q6J("ngIf",g.enabled)}}function d(r,v){if(1&r&&(l.TgZ(0,"ul",1),l.YNc(1,u,2,1,"li",2),l.qZA()),2&r){const g=l.oxw();l.xp6(1),l.Q6J("ngForOf",g.glopalService.footer.social_apps)}}let h=(()=>{class r{constructor(g){this.glopalService=g,this.color="black"}get lang(){return localStorage.getItem("lang")||"en"}static#n=this.\u0275fac=function(p){return new(p||r)(l.Y36(s.W))};static#t=this.\u0275cmp=l.Xpm({type:r,selectors:[["app-social-meedia"]],inputs:{color:"color"},decls:1,vars:1,consts:[["class","socialmedia",4,"ngIf"],[1,"socialmedia"],[4,"ngFor","ngForOf"],["target","_blank",3,"class","href",4,"ngIf"],["target","_blank",3,"href"]],template:function(p,f){1&p&&l.YNc(0,d,2,1,"ul",0),2&p&&l.Q6J("ngIf",null==f.glopalService.footer||null==f.glopalService.footer.social_apps?null:f.glopalService.footer.social_apps.length)},dependencies:[n.sg,n.O5],styles:['ul.socialmedia[_ngcontent-%COMP%]{display:flex}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-right:1.3rem;margin-right:1.3rem;position:relative;display:inline-block;transition:.5s}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;top:2px;right:0;width:1px;height:1rem;background-color:var(--white)}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main)!important}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.white[_ngcontent-%COMP%]{color:var(--white)}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.white[_ngcontent-%COMP%]:after{background-color:var(--white)}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.black[_ngcontent-%COMP%]{color:var(--black)}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.black[_ngcontent-%COMP%]:after{background-color:var(--black)}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   a[_ngcontent-%COMP%]{padding-right:0;margin-right:0}ul.socialmedia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   a[_ngcontent-%COMP%]:after{height:0}  .rt ul.socialmedia li a{padding-right:0!important;margin-right:0!important;padding-left:1.3rem;margin-left:1.3rem}  .rt ul.socialmedia li a:after{right:auto!important;left:0!important}  .rt ul.socialmedia li:last-of-type a{padding-left:0!important;margin-left:0!important}']})}return r})()},3089:(M,m,o)=>{o.d(m,{Z:()=>s});var l=o(8926);let s=(()=>{class n{transform(u="",d=""){return"ar"==this.lang?d:u}get lang(){return localStorage.getItem("lang")||"en"}static#n=this.\u0275fac=function(d){return new(d||n)};static#t=this.\u0275pipe=l.Yjl({name:"lang",type:n,pure:!0})}return n})()}}]);