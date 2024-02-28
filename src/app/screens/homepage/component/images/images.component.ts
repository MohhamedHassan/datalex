import { Component, Input } from '@angular/core';
import { ImagesSectionLabel } from 'src/app/screens/models/images';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';
import { MainSection } from 'src/app/shared/models/main-section';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
  @Input() images!:MainContainerWithHeader
}
