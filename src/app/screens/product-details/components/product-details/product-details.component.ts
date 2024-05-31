import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, skipWhile } from 'rxjs';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  glopalService = inject(GlopalService)
  router = inject(ActivatedRoute)
  serviceDetails:any
    services:any
    ngOnInit(): void {
      this.router.params.subscribe((res:any)=> {
        let id = res?.id
        let service$ =  this.glopalService.pages.pipe(
          skipWhile(val=>val==null),
          map(res =>   res?.find(item => item?.title== "Products")),
        )
         service$.subscribe(
          (res:{navbars:{navbar_items_container:any}[]})=>{
            if(res?.navbars?.length) {
            
              this.services=res.navbars[0]
              this.services.sections=this.services?.navbar_items_container
              if(this.services?.sections?.length) {
                this.serviceDetails = this.services?.sections.find((i:any)=>i?.id==id)
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
