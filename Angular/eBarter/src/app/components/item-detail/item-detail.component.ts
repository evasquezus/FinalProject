import { AuthService } from 'src/app/services/auth.service';
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
  address: Address;
  bidder: User;


  constructor(private itemService: ItemService,
    private offerService: OfferServiceService,
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.itemService.getSpecificItem(2).subscribe(
      item => {
        console.log('Item:');
        console.log(item);
        this.item = item;
      }
    );
    this.itemService.getSpecificItem(1).subscribe(item => {
      this.item = item;
      localStorage.setItem('itemId', item.id.toString());
      localStorage.setItem('itemName', item.name);
      localStorage.setItem('sellerName', item.user.username);

    });
  }

  submitOffer(desc: string, imgUrl: string) {
    this.offer = null;
    console.log('submit offer: ' + this.offer);
  }


  getCurrentUser() {
    const userName = this.authService.getCredName();
    let response = this.userService.getUserByUserName(userName);
    response.subscribe(
      data => {
        this.bidder = data;
        localStorage.setItem('bidderName', this.bidder.username);
        console.log('bidder: ' + this.bidder);

      },
      error => {
        console.log('error in auth.service.getCurrentUser()');

      });
  }
}
