import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-rating-basic',
  templateUrl: './ngbd-rating-basic.component.html',
  styleUrls: ['./ngbd-rating-basic.component.css']
})
export class NgbdRatingBasicComponent implements OnInit {
  currentRate = 5;
  constructor() { }

  ngOnInit() {
  }

}
