import { Component } from '@angular/core';
import { Subscription, map, skipWhile } from 'rxjs';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';
import { MainSection } from 'src/app/shared/models/main-section';
import { Taps } from 'src/app/shared/models/taps';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

}
