import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit,OnInit {
  isAuthPage=new BehaviorSubject(false)
  constructor(private router:Router,public translateService:TranslateService) {}
  @ViewChild('nav') nav!: ElementRef;
  openNav=false
  selcetedSubMenu=-1
  navbarLinks:{
    name:string;
    route:string;
    subLinks?:{ name:string;
      route:string;}[]
  }[] = [
    {
      name:'About Datlex 4ai',
      route:'/home',
      subLinks:[
        {
          name:'Datlex 4ai',
          route:'/about-us',
        },
        {
          name:'Why Us',
          route:'/why-us',
        }
      ]
    },
    {
      name:'Services',
      route:'/services',
      subLinks:[
        {
          name:'Data Collection',
          route:'/services',
        },
        {
          name:'Annotation',
          route:'/services',
        },
        {
          name:'Document Processing',
          route:'/services',
        },
        {
          name:'Writing Guidelines',
          route:'/services',
        },
        {
          name:'Conducting Research',
          route:'/services',
        }
      ]
    },
    {
      name:'Products',
      route:'/products'
    },
    {
      name:'Blog',
      route:'/blogs'
    },
    {
      name:'Jobs',
      route:'/jobs'
    },
    {
      name:'Contact Us',
      route:'/notfound'
    }
  ]
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAuthPage.next(this.router.url.includes('auth')) 
      }
    });
  }
  ngAfterViewInit(): void {
    this.isAuthPage.subscribe(res=> {
      console.log(res)
      if(!res) {
        var navbarHeight:any = this.nav.nativeElement.clientHeight;
        document.body.style.paddingTop = navbarHeight + 'px';
      }else {
        document.body.style.paddingTop = '0px';
      }
    })
  }
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
