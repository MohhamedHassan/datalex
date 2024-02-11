import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  upper=[
    {
      img:'assets/images/f (1).png',
      h2:'Email',
      p:'Our friendly team is here to help.',
      p2:'Mon-Fri from 8am to 5pm.'
    },
    {
      img:'assets/images/f (2).png',
      h2:'Office',
      p:'Come say hello at our office HQ.',
      p2:'100 Smith Street Collingwood VIC 3066 AU'
    },
    {
      img:'assets/images/f (3).png',
      h2:'Phone',
      p:'Mon-Fri from 8am to 5pm.',
      p2:'+1 (555) 000-0000'
    }
  ]
}
