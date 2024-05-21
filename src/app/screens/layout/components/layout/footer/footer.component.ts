import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  toastr=inject(ToastrService)
  email=new FormControl('',[Validators.email,Validators.pattern(/\.com$/)])
  constructor(public glopalService:GlopalService){}

  get lang() {
    return localStorage.getItem('lang')||'en'
  }
  newsLetter() {
    if(this.email.valid) {
      this.glopalService.loading=true
      this.glopalService.newsLetter({email:this.email.value}).subscribe(res=>{
        this.glopalService.loading=false
        this.email.reset()
        this.toastr.success(this.lang=='ar'?'تم الارسال بنجاح':'Send Successfully')
      },err=>this.glopalService.loading=false)
    }
  }
}
