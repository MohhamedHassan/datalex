import { Component, Input, OnInit } from '@angular/core';
import { GlopalService } from '../../services/glopal.service';

@Component({
  selector: 'app-social-meedia',
  templateUrl: './social-meedia.component.html',
  styleUrls: ['./social-meedia.component.scss']
})
export class SocialMeediaComponent  {
  constructor(public glopalService:GlopalService) {}

  @Input() color:string='black'
  get lang() {
    return localStorage.getItem('lang')||'en'
  }
}
