"use strict";(self.webpackChunkdatalex=self.webpackChunkdatalex||[]).push([[592],{1316:(I,h,s)=>{s.d(h,{I:()=>d});var t=s(8926);let d=(()=>{class e{constructor(){this.title=""}static#t=this.\u0275fac=function(m){return new(m||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-section-header"]],inputs:{title:"title"},decls:3,vars:1,consts:[[1,"section-header",2,"background-image","url(assets/images/Group.png)"],[1,"text-center","m-0"]],template:function(m,u){1&m&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2),t.qZA()()),2&m&&(t.xp6(2),t.Oqu(u.title))},styles:[".section-header[_ngcontent-%COMP%]{height:25vh;background-color:var(--footer-lower);background-position:center;display:flex;align-items:center;justify-content:center;background-repeat:no-repeat;background-size:cover}.section-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:500;font-size:3.1rem;line-height:3.75rem;color:var(--white)}"]})}return e})()},2980:(I,h,s)=>{s.d(h,{b:()=>v});var t=s(7234),d=s(7398),e=s(8926),x=s(7755),g=s(6814),m=s(26),u=s(1316),T=s(3089);function C(i,r){if(1&i&&(e._UZ(0,"app-section-header",5),e.ALo(1,"lang")),2&i){const o=e.oxw();e.Q6J("title",e.xi3(1,1,o.pageData.header,o.pageData.header_ar))}}function b(i,r){if(1&i&&(e.TgZ(0,"h2",9),e._uU(1),e.ALo(2,"lang"),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Oqu(e.xi3(2,1,o.pageData.header,o.pageData.header_ar))}}function M(i,r){if(1&i&&(e.TgZ(0,"p",10),e._uU(1),e.ALo(2,"lang"),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,o.pageData.content,o.pageData.content_ar)," ")}}function _(i,r){if(1&i&&(e.TgZ(0,"p",10),e._uU(1),e.ALo(2,"lang"),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,o.pageData.content_2,o.pageData.content_2_ar)," ")}}function O(i,r){if(1&i&&(e.TgZ(0,"section",6),e.YNc(1,b,3,4,"h2",7),e.YNc(2,M,3,4,"p",8),e.YNc(3,_,3,4,"p",8),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.pageData?null:o.pageData.header),e.xp6(1),e.Q6J("ngIf",(null==o.pageData?null:o.pageData.content)||(null==o.pageData?null:o.pageData.content_ar)),e.xp6(1),e.Q6J("ngIf",(null==o.pageData?null:o.pageData.content_2)||(null==o.pageData?null:o.pageData.content_2_ar))}}function n(i,r){if(1&i&&(e.TgZ(0,"h2",9),e._uU(1),e.ALo(2,"lang"),e.qZA()),2&i){const o=e.oxw().$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,o.header,o.header_ar))}}function l(i,r){if(1&i&&(e.TgZ(0,"section",6),e.YNc(1,n,3,4,"h2",7),e.TgZ(2,"p",10),e._uU(3),e.ALo(4,"lang"),e.qZA(),e.TgZ(5,"p",10),e._uU(6),e.ALo(7,"lang"),e.qZA()()),2&i){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",o.header),e.xp6(2),e.hij(" ",e.xi3(4,3,o.content,o.content_ar)," "),e.xp6(3),e.hij(" ",e.xi3(7,6,o.content_2,o.content_2_ar)," ")}}function a(i,r){if(1&i&&(e.ynx(0),e.YNc(1,l,8,9,"section",11),e.BQk()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.sections)}}function c(i,r){if(1&i&&e._UZ(0,"app-taps",12),2&i){const o=e.oxw();e.Q6J("data",o.taps)}}let v=(()=>{class i{constructor(o){this.glopalService=o,this.pageType=""}ngOnChanges(){if(this.pageType){let o=this.glopalService.pages.pipe((0,t.n)(p=>null==p),(0,d.U)(p=>p?.find(f=>f.title==this.pageType)));this.subscribtion=o.subscribe(p=>{this.pageData=p.main_section,p?.navbars?.length&&(this.taps=p?.navbars[0]?.navbar_items_container),p?.sections?.length&&(this.sections=p?.sections)})}}ngOnDestroy(){this.subscribtion&&this.subscribtion.unsubscribe()}static#t=this.\u0275fac=function(p){return new(p||i)(e.Y36(x.W))};static#e=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-shared-template"]],inputs:{pageType:"pageType"},features:[e.TTD],decls:5,vars:4,consts:[[3,"title",4,"ngIf"],[1,"py-5","container"],["class","why-us ",4,"ngIf"],[4,"ngIf"],[3,"data",4,"ngIf"],[3,"title"],[1,"why-us"],["class","main-heading small",4,"ngIf"],["class","main-text",4,"ngIf"],[1,"main-heading","small"],[1,"main-text"],["class","why-us",4,"ngFor","ngForOf"],[3,"data"]],template:function(p,f){1&p&&(e.YNc(0,C,2,4,"app-section-header",0),e.TgZ(1,"div",1),e.YNc(2,O,4,3,"section",2),e.YNc(3,a,2,1,"ng-container",3),e.qZA(),e.YNc(4,c,1,1,"app-taps",4)),2&p&&(e.Q6J("ngIf",null==f.pageData?null:f.pageData.header),e.xp6(2),e.Q6J("ngIf",f.pageData),e.xp6(1),e.Q6J("ngIf",null==f.sections?null:f.sections.length),e.xp6(1),e.Q6J("ngIf",null==f.taps?null:f.taps.length))},dependencies:[g.sg,g.O5,m.j,u.I,T.Z]})}return i})()},9666:(I,h,s)=>{s.d(h,{B:()=>M});var t=s(8926),d=s(6814),e=s(8291),x=s(5245),g=s(3089);const m=["owlItem"];function u(_,O){if(1&_&&(t.TgZ(0,"h2",3),t._uU(1),t.ALo(2,"lang"),t.qZA()),2&_){const n=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,n.data.header,n.data.header_ar))}}function T(_,O){if(1&_){const n=t.EpF();t.TgZ(0,"div",7,8)(2,"div")(3,"div")(4,"img",9),t.NdJ("load",function(){t.CHM(n);const a=t.oxw().index,c=t.oxw(2);return t.KtG(c.imageLoadingDone(a))}),t.qZA()(),t.TgZ(5,"div",10)(6,"h3",11),t._uU(7),t.ALo(8,"lang"),t.qZA(),t.TgZ(9,"p",12),t._uU(10),t.ALo(11,"slice"),t.ALo(12,"lang"),t.qZA()()(),t.TgZ(13,"div",10)(14,"div",13)(15,"span",14),t._uU(16,"May 20th 2020"),t.qZA(),t.TgZ(17,"a",15),t._uU(18),t.ALo(19,"lang"),t.qZA()()()()}if(2&_){const n=t.oxw().$implicit;t.xp6(4),t.Q6J("src",null==n||null==n.image?null:n.image.image,t.LSH),t.xp6(3),t.hij(" ",t.xi3(8,5,n.header,n.header_ar),""),t.xp6(3),t.hij(" ",t.Dn7(11,8,t.xi3(12,12,n.content,n.content_ar),0,200)," ... "),t.xp6(7),t.Q6J("routerLink","/blog-details/"+(null==n?null:n.id)),t.xp6(1),t.hij(" ",t.xi3(19,15,null==n||null==n.button?null:n.button.text,null==n||null==n.button?null:n.button.text_ar)," ")}}function C(_,O){1&_&&t.YNc(0,T,20,18,"ng-template",6)}function b(_,O){if(1&_&&(t.TgZ(0,"owl-carousel-o",4),t.YNc(1,C,1,0,null,5),t.qZA()),2&_){const n=t.oxw();t.Q6J("options",n.customOptions),t.xp6(1),t.Q6J("ngForOf",n.data.sections)}}let M=(()=>{class _{constructor(){this.customOptions={skip_validateItems:!0,loop:!1,autoplay:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],responsive:{0:{items:1},740:{items:2},940:{items:3}},margin:30,nav:!1,rtl:"ar"==localStorage.getItem("lang")}}imageLoadingDone(n){this.data.sections[n].load=!0;let l=!0;this.data?.sections?.length&&(this.data?.sections.forEach(a=>{a.load||(l=!1)}),l&&this.setEqualHeight())}setEqualHeight(){let n=0;this.owlItems.forEach(l=>{const a=l.nativeElement.offsetHeight;n=a>n?a:n}),this.owlItems.forEach(l=>{l.nativeElement.style.height=n+"px"})}onResize(n){setTimeout(()=>{this.setEqualHeight()},0)}static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-slider-grid"]],viewQuery:function(l,a){if(1&l&&t.Gf(m,5),2&l){let c;t.iGM(c=t.CRH())&&(a.owlItems=c)}},hostBindings:function(l,a){1&l&&t.NdJ("resize",function(v){return a.onResize(v)},!1,t.Jf7)},inputs:{data:"data"},decls:3,vars:2,consts:[[1,"container","py-5"],["class","main-heading mb-4",4,"ngIf"],[3,"options",4,"ngIf"],[1,"main-heading","mb-4"],[3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[1,"slideritem","shadowcstm","my-2","d-flex","flex-column","justify-content-between"],["owlItem",""],["alt","Resources",1,"img-fluid",3,"src","load"],[1,"p-3"],[1,"sub-heading","sub-heading-small"],[1,"main-text2","mb-0"],[1,"d-flex","align-items-center","justify-content-between"],[1,"date"],[1,"maincolor","date","bold",3,"routerLink"]],template:function(l,a){1&l&&(t.TgZ(0,"section",0),t.YNc(1,u,3,4,"h2",1),t.YNc(2,b,2,2,"owl-carousel-o",2),t.qZA()),2&l&&(t.xp6(1),t.Q6J("ngIf",null==a.data?null:a.data.header),t.xp6(1),t.Q6J("ngIf",null==a.data||null==a.data.sections?null:a.data.sections.length))},dependencies:[d.sg,d.O5,e.rH,x.Fy,x.Mp,d.OU,g.Z],styles:[".owl-dot span{width:1rem!important;height:1rem!important;border:1px solid var(--main)!important;background-color:var(--white)!important}  .owl-dot.active span{border:5px solid var(--main)!important}  .shadowcstm{box-shadow:0 4px 4px #c0bdbd40}"]})}return _})()},26:(I,h,s)=>{s.d(h,{j:()=>O});var t=s(8926),d=s(6814),e=s(3089);function x(n,l){if(1&n){const a=t.EpF();t.TgZ(0,"li",8),t.NdJ("click",function(){const i=t.CHM(a).$implicit,r=t.oxw(3);return r.selectedItem=i,t.KtG(r.selectedSubItem=null!=i&&null!=i.navbar_items&&i.navbar_items.length?i.navbar_items[0]:void 0)}),t._uU(1),t.ALo(2,"lang"),t.qZA()}if(2&n){const a=l.$implicit,c=t.oxw(3);t.ekj("active",(null==c.selectedItem?null:c.selectedItem.id)==a.id),t.xp6(1),t.Oqu(t.xi3(2,3,a.header,a.header_ar))}}function g(n,l){if(1&n&&(t.TgZ(0,"div",4)(1,"div",5)(2,"ul",6),t.YNc(3,x,3,6,"li",7),t.qZA()()()),2&n){const a=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",a.data)}}function m(n,l){if(1&n){const a=t.EpF();t.TgZ(0,"li",8),t.NdJ("click",function(){const i=t.CHM(a).$implicit,r=t.oxw(4);return t.KtG(r.selectedSubItem=i)}),t._uU(1),t.ALo(2,"lang"),t.qZA()}if(2&n){const a=l.$implicit,c=t.oxw(4);t.ekj("active",(null==c.selectedSubItem?null:c.selectedSubItem.id)==a.id),t.xp6(1),t.Oqu(t.xi3(2,3,a.header,a.header_ar))}}function u(n,l){if(1&n&&(t.TgZ(0,"ul",13),t.YNc(1,m,3,6,"li",7),t.qZA()),2&n){const a=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",null==a.selectedItem?null:a.selectedItem.navbar_items)}}function T(n,l){if(1&n&&(t.TgZ(0,"div",18)(1,"div",19),t._UZ(2,"img",20),t.qZA()()),2&n){const a=t.oxw(4);t.xp6(2),t.Q6J("src",a.selectedSubItem.image.image,t.LSH)}}const C=function(n,l){return{"col-md-6":n,"col-md-12":l}};function b(n,l){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15)(2,"div")(3,"p",16),t._uU(4),t.ALo(5,"lang"),t.qZA()()(),t.YNc(6,T,3,1,"div",17),t.qZA()),2&n){const a=t.oxw(3);t.xp6(1),t.Q6J("ngClass",t.WLB(6,C,a.selectedSubItem.image,!a.selectedSubItem.image)),t.xp6(3),t.hij(" ",t.xi3(5,3,a.selectedSubItem.content,a.selectedSubItem.content_ar)," "),t.xp6(2),t.Q6J("ngIf",null==a.selectedSubItem||null==a.selectedSubItem.image?null:a.selectedSubItem.image.image)}}function M(n,l){if(1&n&&(t.TgZ(0,"div",9)(1,"h2",10),t._uU(2),t.ALo(3,"lang"),t.qZA(),t.YNc(4,u,2,1,"ul",11),t.YNc(5,b,7,9,"div",12),t.qZA()),2&n){const a=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,3,a.selectedItem.header,a.selectedItem.header_ar)),t.xp6(2),t.Q6J("ngIf",null==a.selectedItem||null==a.selectedItem.navbar_items?null:a.selectedItem.navbar_items.length),t.xp6(1),t.Q6J("ngIf",a.selectedSubItem)}}function _(n,l){if(1&n&&(t.TgZ(0,"section",1),t.YNc(1,g,4,1,"div",2),t.YNc(2,M,6,6,"div",3),t.qZA()),2&n){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",null==a.data?null:a.data.length),t.xp6(1),t.Q6J("ngIf",a.selectedItem)}}let O=(()=>{class n{ngOnChanges(){this.data?.length&&(this.selectedItem=this.data[0],this.data[0]?.navbar_items?.length&&(this.selectedSubItem=this.data[0]?.navbar_items[0]))}static#t=this.\u0275fac=function(c){return new(c||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-taps"]],inputs:{data:"data"},features:[t.TTD],decls:1,vars:1,consts:[["class","taps pb-5",4,"ngIf"],[1,"taps","pb-5"],["class","tapsContainer mb-4",4,"ngIf"],["class","content container",4,"ngIf"],[1,"tapsContainer","mb-4"],[1,"container"],[1,"py-3"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],[1,"content","container"],[1,"main-heading","mb-4"],["class","second-nav mb-5",4,"ngIf"],["class","row align-items-center",4,"ngIf"],[1,"second-nav","mb-5"],[1,"row","align-items-center"],[1,"mb-4","mb-md-0",3,"ngClass"],[1,"main-text"],["class","col-md-6 mb-4 mb-md-0",4,"ngIf"],[1,"col-md-6","mb-4","mb-md-0"],[1,"text-center"],["alt","taps",1,"img-fluid",3,"src"]],template:function(c,v){1&c&&t.YNc(0,_,3,2,"section",0),2&c&&t.Q6J("ngIf",null==v.data?null:v.data.length)},dependencies:[d.mk,d.sg,d.O5,e.Z],styles:[".taps[_ngcontent-%COMP%]   .second-nav[_ngcontent-%COMP%], .taps[_ngcontent-%COMP%]   .tapsContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow:auto}.taps[_ngcontent-%COMP%]   .tapsContainer[_ngcontent-%COMP%]{background-color:var(--main);color:var(--white)}.taps[_ngcontent-%COMP%]   .tapsContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:2rem;font-size:1rem;font-weight:500;line-height:1.75rem;white-space:nowrap;cursor:pointer;transition:.2s;padding-bottom:5px;border-bottom:5px solid transparent}.taps[_ngcontent-%COMP%]   .tapsContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .taps[_ngcontent-%COMP%]   .tapsContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-bottom:5px solid var(--white)}.taps[_ngcontent-%COMP%]   .second-nav[_ngcontent-%COMP%]{border-bottom:1px solid var(--text)}.taps[_ngcontent-%COMP%]   .second-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:2rem;white-space:nowrap;cursor:pointer;color:var(--black);font-size:1rem;font-weight:400;line-height:1.6rem;padding-bottom:.5rem!important;transition:.2s;border-bottom:4px solid transparent}.taps[_ngcontent-%COMP%]   .second-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .taps[_ngcontent-%COMP%]   .second-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-bottom:4px solid var(--main);color:var(--main)}.taps[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:5px}.taps[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.taps[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888}.taps[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}@media only screen and (max-width: 992px){.taps[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:none!important}}  .rt .taps .tapsContainer ul li{margin-right:0!important;margin-left:2rem!important}  .rt .taps .second-nav li{margin-right:0!important;margin-left:2rem!important}"]})}return n})()},7234:(I,h,s)=>{s.d(h,{n:()=>e});var t=s(9360),d=s(8251);function e(x){return(0,t.e)((g,m)=>{let u=!1,T=0;g.subscribe((0,d.x)(m,C=>(u||(u=!x(C,T++)))&&m.next(C)))})}}}]);