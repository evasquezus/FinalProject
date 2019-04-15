import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-ngbd-tooltip-basic',
  templateUrl: './ngbd-tooltip-basic.component.html',
  styleUrls: ['./ngbd-tooltip-basic.component.css']
})
export class NgbdTooltipBasicComponent implements OnInit {

  constructor(itemService: ItemService) { }

  ngOnInit() {
  }

  getItemsIveWon() {

  }
  getItemsImSelling() {

  }
  getItemsImBiddingOn() {

  }

}
