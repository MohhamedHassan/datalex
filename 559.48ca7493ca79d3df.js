"use strict";(self.webpackChunkdatalex=self.webpackChunkdatalex||[]).push([[559],{9559:(d,c,l)=>{l.r(c),l.d(c,{AuthModule:()=>m});var p=l(6814),i=l(8291),t=l(8926),r=l(6584);let s=(()=>{class e{constructor(){this.label="",this.placeholder="",this.type="text"}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-input"]],inputs:{label:"label",placeholder:"placeholder",type:"type"},decls:6,vars:7,consts:[[1,"form-group","mb-4"],[1,"mb-1"],[1,"form-control","label",3,"type","placeholder"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"input",2),t.ALo(5,"translate"),t.qZA()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,3,a.label)),t.xp6(2),t.Q6J("type",a.type)("placeholder",t.lcZ(5,5,a.placeholder)))},dependencies:[r.X$],styles:[".form-group[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{font-size:.75rem;font-weight:400;line-height:15px;color:var(--placeholder)}"]})}return e})();const u=[{path:"",redirectTo:"/auth/signin",pathMatch:"full"},{path:"",component:(()=>{class e{constructor(o){this.translateService=o}changeLang(){let n="en"==(localStorage.getItem("lang")||"en")?"ar":"en";console.log(n),"ar"==n?document.body.classList.add("rt"):document.body.classList.remove("rt"),this.translateService.use(n),localStorage.setItem("lang",n),location.reload()}get lang(){return localStorage.getItem("lang")||"en"}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(r.sK))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],decls:18,vars:1,consts:[[1,"auth"],[1,"row","justify-content-center"],[1,"col-md-6","left","p-0","d-none","d-lg-block",2,"height","100vh","overflow","hidden"],["src","assets/images/g182.png","alt","cover",1,"bg"],[1,"h-100","d-flex","justify-content-center","align-items-center"],["routerLink","/"],["src","assets/images/Group 33062.png","alt","logo",1,"logo"],[1,"col-md-6","p-0","right"],[1,"d-flex","justify-content-center","align-items-center","sign","px-4","py-1","position-relative",2,"min-height","100%"],[1,"d-flex","justify-content-end","mb-3"],[1,"lang",3,"click"],[1,"fa-solid","fa-globe"],[1,"text-center","d-lg-none","mb-4"],["routerLink","/",1,"home"],["src","assets/images/Group 33062.png","alt","logo",1,"logo2"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"div",4)(5,"a",5),t._UZ(6,"img",6),t.qZA()()(),t.TgZ(7,"div",7)(8,"div",8)(9,"div")(10,"div",9)(11,"button",10),t.NdJ("click",function(){return a.changeLang()}),t._UZ(12,"i",11),t._uU(13),t.qZA()(),t.TgZ(14,"div",12)(15,"a",13),t._UZ(16,"img",14),t.qZA()(),t._UZ(17,"router-outlet"),t.qZA()()()()()),2&n&&(t.xp6(13),t.hij(" ","en"==a.lang?"AR":"EN"," "))},dependencies:[i.lC,i.rH],styles:[".auth[_ngcontent-%COMP%]{overflow-x:hidden}.auth[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{min-height:100vh}@media only screen and (min-width: 992px){.auth[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{height:100vh;overflow:auto}}.auth[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#1290D0 0%,#1290D0 10.44%,#183867 100%);position:relative}.auth[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img.bg[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:50%}.auth[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{width:15rem;z-index:1;position:relative}.auth[_ngcontent-%COMP%]   img.logo2[_ngcontent-%COMP%]{width:10rem}.auth[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]{background-color:transparent;border:none}  .sign a:not(.home){color:var(--footer-lower);border-bottom:1px solid var(--footer-lower)}"]})}return e})(),children:[{path:"signin",component:(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-signin"]],decls:14,vars:12,consts:[[1,"text-center","auth","mb-4"],["placeholder","enteremail","label","email"],[1,"auth","mb-3"],[1,"label","text-center","m-0"],["routerLink","/auth/signup"]],template:function(n,a){1&n&&(t.TgZ(0,"h1",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"form"),t._UZ(4,"app-input",1),t.TgZ(5,"button",2),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",3),t._uU(9),t.ALo(10,"translate"),t.TgZ(11,"a",4),t._uU(12),t.ALo(13,"translate"),t.qZA()()()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,4,"welcomeback")),t.xp6(5),t.hij(" ",t.lcZ(7,6,"login")," "),t.xp6(3),t.hij(" ",t.lcZ(10,8,"Donthaveanaccount")," "),t.xp6(3),t.hij(" ",t.lcZ(13,10,"RegisterNow")," "))},dependencies:[i.rH,s,r.X$]})}return e})()},{path:"signup",component:(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-signup"]],decls:16,vars:12,consts:[[1,"text-center","auth","mb-4"],["placeholder","enteremail","label","email"],["placeholder","enterYourPassword","label","password","type","password"],["placeholder","password","label","confirmPassword","type","password"],[1,"auth","mb-3"],[1,"label","text-center","m-0"],["routerLink","/auth/signin"]],template:function(n,a){1&n&&(t.TgZ(0,"h1",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"form"),t._UZ(4,"app-input",1)(5,"app-input",2)(6,"app-input",3),t.TgZ(7,"button",4),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"p",5),t._uU(11),t.ALo(12,"translate"),t.TgZ(13,"a",6),t._uU(14),t.ALo(15,"translate"),t.qZA()()()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,4,"RegistertoGetStarted")),t.xp6(7),t.hij(" ",t.lcZ(9,6,"signup")," "),t.xp6(3),t.hij(" ",t.lcZ(12,8,"haveanaccount")," "),t.xp6(3),t.hij(" ",t.lcZ(15,10,"login")," "))},dependencies:[i.rH,s,r.X$]})}return e})()}]}];let g=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(u),i.Bz]})}return e})();var h=l(6208);let m=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[p.ez,g,h.m]})}return e})()}}]);