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
          route:'',
        },
        {
          name:'Why Us',
          route:'',
        }
      ]
    },
    {
      name:'Services',
      route:''
    },
    {
      name:'Products',
      route:''
    },
    {
      name:'Blog',
      route:''
    },
    {
      name:'Jobs',
      route:''
    },
    {
      name:'Contact Us',
      route:''
    }
  ]
  ngAfterViewInit(): void {
    var navbarHeight:any = this.nav.nativeElement.clientHeight;
    document.body.style.paddingTop = navbarHeight + 'px';
  }
}
