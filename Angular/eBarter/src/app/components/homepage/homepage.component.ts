import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: Item[];
  bookservice: any;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
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
