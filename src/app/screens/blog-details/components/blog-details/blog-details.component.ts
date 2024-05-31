import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, skipWhile, switchMap } from 'rxjs';
import { Resources } from 'src/app/screens/models/resources';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';
import { MainSection } from 'src/app/shared/models/main-section';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  glopalService = inject(GlopalService)
  router = inject(ActivatedRoute)
  serviceDetails:any
    services:any
    ngOnInit(): void {
      this.router.params.subscribe((res:any)=> {
        let id = res?.id
        let service$ =  this.glopalService.pages.pipe(
          skipWhile(val=>val==null),
          map(res =>   res?.find(item => item?.title== "Blogs")),
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
