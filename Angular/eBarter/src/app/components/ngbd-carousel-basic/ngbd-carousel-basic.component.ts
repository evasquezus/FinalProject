import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './ngbd-carousel-basic.component.html',
  styleUrls: ['./ngbd-carousel-basic.component.css']
})
export class NgbdCarouselBasicComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
