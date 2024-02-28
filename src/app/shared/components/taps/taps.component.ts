import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Taps } from '../../models/taps';
import { MainSection } from '../../models/main-section';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent implements OnChanges {
  @Input() data!:Taps[]
  selectedItem:Taps|undefined
  selectedSubItem:MainSection|undefined
  ngOnChanges(): void {
    if(this.data?.length) {
      console.log('')
      this.selectedItem=this.data[0]
      console.log(this.selectedItem)
      if(this.data[0].navbar_items?.length) this.selectedSubItem=this.data[0].navbar_items[0]
      console.log(this.selectedSubItem)
    }
  }
}
