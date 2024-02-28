import { Component } from '@angular/core';
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
  pageData!:MainSection|undefined
  subscribtion!:Subscription
  moreLikeThis!:MainContainerWithHeader
  constructor(private glopalService:GlopalService,
    private activatedRoute:ActivatedRoute) {}
 ngOnInit(): void {
  this.subscribtion = this.activatedRoute.params.pipe(
    map((param) => param['id']),
    switchMap(param => this.blogDetails(param))
  ).subscribe(
    res=>{
      this.pageData=res
    }
  )
  
 }
 blogDetails(id:number) {
  return this.glopalService.pages.pipe(
    skipWhile(val=>val==null),
    map(res =>   res?.find(item => item.title== "Home")),
    map((res:any) => {
      if(res?.sections?.length) {
        let sections:any[] = [...res?.sections.map( function (item:any) {return{...item}})]
        let blogs:MainContainerWithHeader = sections.find(item=>item.title=='Home Section 4 - Resources')
        let blogDetails = blogs?.sections?.find((item:any) => item?.id==id)
        blogs.sections = blogs?.sections.filter(item=>item.id!=id)
        this.moreLikeThis=blogs
        return blogDetails
      } return undefined
    })
  )
 }
 ngOnDestroy(): void {
   if(this.subscribtion)this.subscribtion.unsubscribe()
 }
}
