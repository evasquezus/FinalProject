import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  title = 'ngTest';
  items: Item[] = [];
  constructor() { }

  ngOnInit() {
  }


}
