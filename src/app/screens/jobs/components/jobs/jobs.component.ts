import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, skipWhile } from 'rxjs';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  selectedJobId=-1
  file:any
  show=0
  services:any
  glopalService=inject(GlopalService)
  fb=inject(FormBuilder)
  toastr=inject(ToastrService)
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.pattern(/\.com$/)]],
      phone:['',Validators.required],
      comment:['',Validators.required],
     })
    let service$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Jobs")),
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
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file=file
  }
  submit() {
    if(this.form.valid&&this.file) {
      this.glopalService.loading=true;
      let frmData = new FormData()
      for(let i in this.form.value) {
        frmData.append(i,this.form.value[i])
      }
      frmData.append('file',this.file)
      this.glopalService.applyJob(frmData).subscribe(
        res=>{
          this.glopalService.loading=false
          this.form.reset()
            this.selectedJobId=-1
            this.toastr.success(this.lang=='ar'?'تم الارسال بنجاح':'Send Successfully')
          
        },err=>{
          this.glopalService.loading=false
          this.selectedJobId=-1
          this.toastr.error(this.lang=='ar'?'حدث خطأ ما':'Something went wrong')
        }
      )
    }
   }
   get lang() {
    return localStorage.getItem('lang')||'en'
  }
  reset() {
    this.file=null
    this.form.reset()
  }
}
