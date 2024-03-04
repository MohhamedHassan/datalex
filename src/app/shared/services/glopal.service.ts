import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navbar } from '../models/navbar';
import { Footer } from '../models/footer';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
interface  main_container{
  logo:{image:string};
  footer:Footer;
  navbar:{navbar_items_container:Navbar[]}
  
}
@Injectable({
  providedIn: 'root'
})
export class GlopalService{
  apiUrl='https://datalex4.ai/'
  navbar!:Navbar[]
  footer!:Footer
  logo!:string
  bodyPaddingTop=''
  pages = new BehaviorSubject<any[]|null>(null)
  loading=true
  constructor(private http:HttpClient,private router:Router) { }
  getNavbarAndFooterData() {
    return this.http.get<main_container>(`${this.apiUrl}page/main-container`).subscribe(
      res => {
        this.navbar=res?.navbar.navbar_items_container;
        this.footer=res.footer
        this.logo=res.logo?.image
        this.setPaddingTop()
      },err =>  {
        this.router.navigate(['/notfound'])
      }
    )
  }
  getPages() {
    return this.http.get<any[]>(`${this.apiUrl}page/list`).subscribe(
      res => {
        this.pages.next(res)
        this.loading=false
      },err =>  {
        this.router.navigate(['/notfound'])
      }
    )
  }

  setPaddingTop() {
    setTimeout(() => {
      let navheight = document.querySelector('nav')?.offsetHeight
      this.bodyPaddingTop=`${navheight}px`
    }, 0);
  }
}
