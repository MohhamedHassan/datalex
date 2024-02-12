import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('nav') nav!: ElementRef;
  openNav=false
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
      route:'/notfound'
    },
    {
      name:'Blog',
      route:'/notfound'
    },
    {
      name:'Jobs',
      route:'/notfound'
    },
    {
      name:'Contact Us',
      route:'/notfound'
    }
  ]
  ngAfterViewInit(): void {
    var navbarHeight:any = this.nav.nativeElement.clientHeight;
    document.body.style.paddingTop = navbarHeight + 'px';
  }
}
