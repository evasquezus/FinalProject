import { HomepageComponent } from './../homepage/homepage.component';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { Offer } from 'src/app/models/offer';
import { OfferServiceService } from 'src/app/services/offer-service.service';
import { User } from 'src/app/models/user';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/services/user.service';
import { OfferService } from 'src/app/services/offer.service';

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
  message: string;



  constructor(private itemService: ItemService,
              private offerService: OfferService,
              private offerOfferService: OfferServiceService,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
    const id = parseInt(localStorage.getItem('selectedId'));
    localStorage.removeItem('selectedId');
    this.itemService.getSpecificItem(id).subscribe(
      item => {
        this.item = item;
        console.log(this.item);
        console.log("*********************************");
        this.offerService.getSpecificItemOffers(this.item).subscribe(
          offers => {
            this.offers = offers;
            console.log(offers);
            console.log(this.offers);
          }
        );

        localStorage.setItem('itemId', item.id.toString());
        localStorage.setItem('itemName', item.name);
        localStorage.setItem('sellerName', item.user.username);
              }
    );
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
    // this.offerService.getOffersForItems(this.item).subscribe(
    //   offers => {
    //     this.offers = offers;
    //     console.log(offers);
    //   }
    // )
    this.userService.getAll().subscribe(
      users => {
        this.users = users;
        console.log(users);
      }
    );

  }

  submitOffer(desc: string, imgUrl: string) {
    console.log('imgUrl: ' + imgUrl);

    this.offer = {
      id: 0, description: desc, item: this.item, offerStatus: 1, user: this.bidder, imgUrl: imgUrl};
    console.log('submit offer: ' + this.offer);
    let response = this.offerOfferService.postNewOffer(this.offer);
    response.subscribe(
      data => {
        this.message = 'Your offer was submitted!';
      },
      error => {
        this.message = 'Error submitting your offer';
      });
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
