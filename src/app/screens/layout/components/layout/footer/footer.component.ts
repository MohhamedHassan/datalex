import { Component } from '@angular/core';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public glopalService:GlopalService){}

  get lang() {
    return localStorage.getItem('lang')||'en'
  }
}
