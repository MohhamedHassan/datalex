import { Component, Input } from '@angular/core';
import { ImagesSectionLabel } from 'src/app/screens/models/images';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
  @Input() text!:ImagesSectionLabel
 @Input() images!:string[]
}
