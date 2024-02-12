import { Component } from '@angular/core';
import { Resources } from 'src/app/screens/models/resources';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  resources:Resources[] = [
    {
      img:'assets/images/image 2.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/blog-details'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/blog-details'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/blog-details'
    },
    {
      img:'assets/images/image 2.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/blog-details'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/blog-details'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/blog-details'
    },

  ]
}
