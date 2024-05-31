import { Component, inject } from '@angular/core';
import { map, skipWhile } from 'rxjs';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  services:any
  glopalService=inject(GlopalService)
  ngOnInit(): void {
    let service$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Products")),
    )
     service$.subscribe(
      (res:{navbars:{navbar_items_container:any}[]})=>{
        if(res?.navbars?.length) {
        
          this.services=res.navbars[0]
          this.services.sections=this.services?.navbar_items_container
         // delete this.services?.navbar_items_container
        }
        
      }
    )
  }
}
