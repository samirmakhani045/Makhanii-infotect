import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  constructor() {}
  loaderItems = [
    {
      id: 1,
      imgSrc: 'assets/images/work/K-1.png',
      stack: 'Angular2+ | Angular Material',
      link: 'https://app.kinnect.us/',
    },
    {
      id: 2,
      imgSrc: 'assets/images/work/s-1.png',
      stack: 'Angular2+ | Angular Material',
      link: 'https://blockchain.sensestek.com/',
    },
    {
      id: 3,
      imgSrc: 'assets/images/work/whydonate.png',
      stack: 'Angular-nrwl | Angular Material',
      link: 'https://whydonate.nl/',
    },
    {
      id: 4,
      imgSrc: 'assets/images/work/c-1.png',
      stack: 'AngularJS | HTML | CSS | JavaScript',
      link: 'https://cloud.equiitext.com/',
    },
    {
      id: 5,
      imgSrc: 'assets/images/work/t-1.png',
      stack: 'Angular-nrwl | Angular Material',
      link: 'https://www.givethechange.nl/',
    },
    {
      id: 6,
      imgSrc: 'assets/images/work/I-1.webp',
      stack: 'iOS Native',
      link: 'https://apps.apple.com/app/apple-store/id1086207508',
    },
    {
      id: 7,
      imgSrc: 'assets/images/work/i-2.webp',
      stack: 'iOS Native',
      link: 'https://apps.apple.com/app/apple-store/id1459045126',
    },
    {
      id: 8,
      imgSrc: 'assets/images/work/i-3.webp',
      stack: 'iOS Native',
      link: 'https://apps.apple.com/us/app/rakuten-link/id1498877539',
    },
  ];

  ngOnInit(): void {}
}
