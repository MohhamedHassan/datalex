import { Component, Input } from '@angular/core';
import { WhatWeDo } from 'src/app/screens/models/what-we-do';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent {
  @Input() data!:MainContainerWithHeader
}
