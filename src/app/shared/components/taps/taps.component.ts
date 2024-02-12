import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent {
  @Input() lowerContent:boolean=true
}
