import { Component, OnInit } from '@angular/core';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  constructor(public glopalService:GlopalService) {}
  ngOnInit(): void {
    this.glopalService.setPaddingTop()
  }
}
