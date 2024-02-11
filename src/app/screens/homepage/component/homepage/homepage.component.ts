import { Component } from '@angular/core';
import { Resources } from 'src/app/screens/models/resources';
import { Slider } from 'src/app/screens/models/slider';
import { WhatWeDo } from 'src/app/screens/models/what-we-do';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  header:Slider[] = [
    {
      rtl:false,
      h1:'Welcome to DataLex4ai 5',
      paragraph:'We seamlessly blend the precision of manual linguistic annotation with the efficiency of automated services, offering a comprehensive suite of language-centric solutions.',
      route:'/',
      linkText:'Try for free',
      imgSrc:'assets/images/Technologicalrevolution.png',
      imageAlt:'header image',
      btnBig:true
    },
    {
      rtl:false,
      h1:'Welcome to DataLex4ai 5',
      paragraph:'We seamlessly blend the precision of manual linguistic annotation with the efficiency of automated services, offering a comprehensive suite of language-centric solutions.',
      route:'/',
      linkText:'Try for free',
      imgSrc:'assets/images/Technologicalrevolution.png',
      imageAlt:'header image',
      btnBig:true
    },
    {
      rtl:false,
      h1:'Welcome to DataLex4ai 5',
      paragraph:'We seamlessly blend the precision of manual linguistic annotation with the efficiency of automated services, offering a comprehensive suite of language-centric solutions.',
      route:'/',
      linkText:'Try for free',
      imgSrc:'assets/images/Technologicalrevolution.png',
      imageAlt:'header image',
      btnBig:true
    }
  ]
  driver:Slider[] = [
    {
      rtl:true,
      h1:'Our diverse',
      paragraph:'Our diverse range of annotated datasets serves as a valuable resource for machine learning and artificial intelligence initiatives, fostering innovation across various domains.',
      route:'/',
      linkText:'Read More',
      imgSrc:'assets/images/2304.i039.017.F.m004.c9.AI generated art AI powered content creation isometric [Converted] 1.png',
      imageAlt:'diverse image'
    },
    {
      rtl:true,
      h1:'Our diverse',
      paragraph:'Our diverse range of annotated datasets serves as a valuable resource for machine learning and artificial intelligence initiatives, fostering innovation across various domains.',
      route:'/',
      linkText:'Read More',
      imgSrc:'assets/images/2304.i039.017.F.m004.c9.AI generated art AI powered content creation isometric [Converted] 1.png',
      imageAlt:'diverse image'
    },
    {
      rtl:true,
      h1:'Our diverse',
      paragraph:'Our diverse range of annotated datasets serves as a valuable resource for machine learning and artificial intelligence initiatives, fostering innovation across various domains.',
      route:'/',
      linkText:'Read More',
      imgSrc:'assets/images/2304.i039.017.F.m004.c9.AI generated art AI powered content creation isometric [Converted] 1.png',
      imageAlt:'diverse image'
    }
  ]
  nlpTools:Slider[] = [
    {
      rtl:false,
      h1:'Cutting-edge NLP tools',
      paragraph:'cutting-edge natural language processing (NLP) tools empower researchers and developers with advanced capabilities, driving the advancement of artificial intelligence, machine learning, and language model development.',
      route:'/',
      linkText:'Read More',
      imgSrc:'assets/images/OBJECTS.png',
      imageAlt:'NLP tools image'
    },
    {
      rtl:false,
      h1:'Cutting-edge NLP tools',
      paragraph:'cutting-edge natural language processing (NLP) tools empower researchers and developers with advanced capabilities, driving the advancement of artificial intelligence, machine learning, and language model development.',
      route:'/',
      linkText:'Read More',
      imgSrc:'assets/images/OBJECTS.png',
      imageAlt:'NLP tools image'
    },
    {
      rtl:false,
      h1:'Cutting-edge NLP tools',
      paragraph:'cutting-edge natural language processing (NLP) tools empower researchers and developers with advanced capabilities, driving the advancement of artificial intelligence, machine learning, and language model development.',
      route:'/',
      linkText:'Read More',
      imgSrc:'assets/images/OBJECTS.png',
      imageAlt:'NLP tools image'
    },
  ]
  images:string[]=[
    'assets/images/1 (1).png',
    'assets/images/1 (2).png',
    'assets/images/1 (3).png',
    'assets/images/1 (4).png'
  ]
  images2:string[]=[
    'assets/images/33 (1).png',
    'assets/images/33 (2).png',
    'assets/images/33 (3).png',
    'assets/images/33 (4).png',
  ]
  text={h2:'Value Proposition',p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.'}
  whatwedo:WhatWeDo[] = [
    {
      h3:'Lorem Ipsum',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.',
      a:'Read more',
      route:'/'
    },
    {
      h3:'Lorem Ipsum',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.',
      a:'Read more',
      route:'/'
    }
  ]
  resources:Resources[] = [
    {
      img:'assets/images/image 2.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/'
    },
    {
      img:'assets/images/image 2.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/'
    },
    {
      img:'assets/images/image 5.png',
      h3:'long established',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      date:'May 20th 2020',
      a:'Read more',
      route:'/'
    },

  ]
}

