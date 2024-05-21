import { Component, inject } from '@angular/core';
import { Subscription, map, skipWhile } from 'rxjs';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';
import { MainSection } from 'src/app/shared/models/main-section';
import { Taps } from 'src/app/shared/models/taps';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs:any
  glopalService=inject(GlopalService)
  ngOnInit(): void {
    let service$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Blogs")),
    )
     service$.subscribe(
      (res:{navbars:{navbar_items_container:any}[]})=>{
        if(res.navbars?.length) {
        
          this.blogs=res.navbars[0]
          this.blogs.sections=this.blogs?.navbar_items_container
         // delete this.services?.navbar_items_container
        }
        
      }
    )
  }
}
