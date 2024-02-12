import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-meedia',
  templateUrl: './social-meedia.component.html',
  styleUrls: ['./social-meedia.component.scss']
})
export class SocialMeediaComponent {
  links=[
    {
      icon:'fa-brands fa-facebook-f',
      href:'',
    },
    {
      icon:'fa-brands fa-instagram',
      href:'',
    },
    {
      icon:'fa-brands fa-twitter',
      href:'',
    },
    {
      icon:'fa-brands fa-youtube',
      href:'',
    }
  ]
  @Input() color:string='black'
}
