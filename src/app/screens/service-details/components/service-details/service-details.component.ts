import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, skipWhile } from 'rxjs';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  glopalService = inject(GlopalService)
  router = inject(ActivatedRoute)
  constructor(private sanitizer: DomSanitizer) {}
  serviceDetails:any
  safe:any
    services:any
    ngOnInit(): void {
      this.router.params.subscribe((res:any)=> {
        let id = res?.id
        let service$ =  this.glopalService.pages.pipe(
          skipWhile(val=>val==null),
          map(res =>   res?.find(item => item?.title== "Services")),
        )
         service$.subscribe(
          (res:{navbars:{navbar_items_container:any}[]})=>{
            if(res.navbars?.length) {
            
              this.services=res.navbars[0]
              this.services.sections=this.services?.navbar_items_container
              if(this.services?.sections?.length) {
                this.serviceDetails = this.services?.sections.find((i:any)=>i?.id==id)
          this.safe=      this.sanitizer.bypassSecurityTrustHtml(this.lang=='ar' ? this.serviceDetails?.content_ar:this.serviceDetails?.content );
              } 
  
             // delete this.services?.navbar_items_container
            }
            
          }
        )
      })
  
    }
    get lang() {
      return localStorage.getItem('lang')||'en'
    }
}
