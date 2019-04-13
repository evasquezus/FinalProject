import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  title = 'ngTest';
  item: Item;
  items: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getSpecificItem(1).subscribe(item => {
      this.item = item;
    });
  }
}
