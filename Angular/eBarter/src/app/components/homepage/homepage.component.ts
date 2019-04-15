import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';
import { ItemNoAuthService } from 'src/app/services/item-no-auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: Item[];
  itemservices: any;
  itemsNoAuth: Item[];
  constructor(private itemService: ItemService, private itemNoAuthService: ItemNoAuthService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
    this.itemNoAuthService.getItems().subscribe(itemsNoAuth => {
      this.itemsNoAuth = itemsNoAuth;
    })
  }

  removeItem(item: Item) {
    if (confirm('Are You Sure?')) {
      this.itemService.removeItem(item.id).subscribe(() => {
        this.items.forEach((cur, index) => {
          if (item.id === cur.id) {
            this.items.splice(index, 1);
          }
        });
      });
    }
  }
}
