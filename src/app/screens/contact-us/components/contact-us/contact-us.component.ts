import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, skipWhile } from 'rxjs';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  implements OnInit{
  reasons:any
  fb=inject(FormBuilder)
  toastr=inject(ToastrService)
  glopalService=inject(GlopalService)
  form!:FormGroup
 ngOnInit(): void {
  let reasons$ =  this.glopalService.pages.pipe(
    skipWhile(val=>val==null),
    map(res =>   res?.find(item => item?.title== "Contact us")),
  )
  let reasons:any
  reasons$.subscribe(
    (res:{navbars:{navbar_items_container:any}[]})=>{
      console.log(res)
      if(res?.navbars?.length) {

        this.reasons=res.navbars

       
        console.log(res)
      }
      
    }
  )
   this.form=this.fb.group({
    first_name:['',Validators.required],
  last_name:['',Validators.required],
  business_email:['',[Validators.required,Validators.email,Validators.pattern(/\.com$/)]],
  company_name:['',Validators.required],
  job_title:['',Validators.required],
  phone_number:['',Validators.required],
  reason:['',Validators.required],
  project_description:[''],
   })
 }
 get lang() {
  return localStorage.getItem('lang')||'en'
}
 submit() {
  if(this.form.valid) {
    this.glopalService.loading=true;
    this.glopalService.contactUs(this.form.value).subscribe(
      res=>{
        this.glopalService.loading=false
        this.form.reset()

          this.toastr.success(this.lang=='ar'?'تم الارسال بنجاح':'Send Successfully')
        
      },err=>this.glopalService.loading=false
    )
  }
 }
}
