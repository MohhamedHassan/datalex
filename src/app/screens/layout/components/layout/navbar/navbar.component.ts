import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, skipWhile } from 'rxjs';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  services:any
  ngOnInit(): void {
    let service$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Services")),
    )
   service$.subscribe(
      (res:{navbars:{navbar_items_container:any}[]})=>{
        if(res?.navbars?.length) {
        // console.log(res)
          this.services=res.navbars[0]?.navbar_items_container
       this.services=   this.services.map((item:any) => {
            return {
              ...item,
              link:`/service-details/${item?.id}`
            }
          })
         // this.services.sections=this.services?.navbar_items_container
         // console.log(this.services);
         //navbar_items
         let ser = this.glopalService.navbar.findIndex((i:any)=>i.title=='Services')
         if(ser!=-1) {
          this.glopalService.navbar[ser].navbar_items=this.services
         }
          // console.log(ser)
         // delete this.services?.navbar_items_container
        }
        
      }
    )
    // 
    let products$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Products")),
    )
    let products:any
    products$.subscribe(
      (res:{navbars:{navbar_items_container:any}[]})=>{
        if(res?.navbars?.length) {
        // console.log(res)
          products=res.navbars[0]?.navbar_items_container
          products=   products.map((item:any) => {
            return {
              ...item,
              link:`/product-details/${item?.id}`
            }
          })
         // this.services.sections=this.services?.navbar_items_container
         // console.log(this.services);
         //navbar_items
         let ser = this.glopalService.navbar.findIndex((i:any)=>i.title=='Products')
         if(ser!=-1) {
          this.glopalService.navbar[ser].navbar_items=products
         }
          // console.log(ser)
         // delete this.services?.navbar_items_container
        }
        
      }
    )

    // 
    let blogs$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Blogs")),
    )
    let blogs:any
    blogs$.subscribe(
      (res:{navbars:{navbar_items_container:any}[]})=>{
        console.log(res)
        if(res?.navbars?.length) {

          blogs=res.navbars[0]?.navbar_items_container
          console.log(blogs)
          blogs=   blogs.map((item:any) => {
            return {
              ...item,
              link:`/blog-details/${item?.id}`
            }
          })
         // this.services.sections=this.services?.navbar_items_container
         // console.log(this.services);
         //navbar_items
         let ser = this.glopalService.navbar.findIndex((i:any)=>i.title=='Blog')
         console.log(this.glopalService.navbar)
         if(ser!=-1) {
          console.log(blogs)
          this.glopalService.navbar[ser].navbar_items=blogs
         }
          // console.log(ser)
         // delete this.services?.navbar_items_container
        }
        
      }
    )
  }
  constructor(
    public translateService:TranslateService,
    public glopalService:GlopalService
    ) {}
  openNav=false
  selcetedSubMenu=-1


  closeSubMenu(event:any) {
    if(event.target.nodeName!='A' && event.target.nodeName!='I') {
      this.selcetedSubMenu=-1
    }
  }
  changeLang(lang:string) {
    if(lang=='ar') {
      document.body.classList.add('rt')
    } else {
      document.body.classList.remove('rt')
    }
    this.translateService.use(lang);
    localStorage.setItem('lang',lang)
    location.reload()
  }
  get lang() {
    return localStorage.getItem('lang')||'en'
  }
}
