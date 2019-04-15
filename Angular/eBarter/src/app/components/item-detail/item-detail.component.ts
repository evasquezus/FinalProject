import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { Offer } from 'src/app/models/offer';
import { OfferServiceService } from 'src/app/services/offer-service.service';
import { User } from 'src/app/models/user';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  title = 'ngTest';
  item: Item;
  items: Item[] = [];
  offers: Offer[] = [];
  offer: Offer;
  users: User[];
  // user: User[] = ' ';
  address: Address;
  constructor(private itemService: ItemService, private offerService: OfferServiceService, private userService: UserService) { }

  ngOnInit() {
    this.itemService.getSpecificItem(1).subscribe(
      item => {
        console.log('Item:');
        console.log(item);

        this.item = item;
        this.offerService.getOffersForItems(this.item).subscribe(
          offers => {
            this.offers = offers;
            console.log(offers);
          }
        );
          // this.userService.getUserNameForOffers(this.item).subscribe(
          //   user => {
          //     this.user = user;
          //     console.log(user);
          //   }
          // );
      }
    );


  }
}
