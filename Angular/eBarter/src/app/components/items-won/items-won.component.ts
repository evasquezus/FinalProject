import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';
import { OfferServiceService } from 'src/app/services/offer-service.service';
import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/models/item';
import { Offer } from 'src/app/models/offer';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-won',
  templateUrl: './items-won.component.html',
  styleUrls: ['./items-won.component.css']
})
export class ItemsWonComponent implements OnInit {

  item: Item;
  items: Item[];
  offers: Offer[] = [];
  offer: Offer;
  users: User[];
  isBidder: User;

  constructor(private itemService: ItemService,
              private offerService: OfferServiceService,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    console.log(this.isBidder);
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });

  }


  getCurrentUser() {
    const userName = this.authService.getCredName();
    let response = this.userService.getUserByUserName(userName);
    response.subscribe(
      data => {
        this.isBidder = data;
        localStorage.setItem('bidderName', this.isBidder.username);
        console.log('bidder: ' + this.isBidder.username);

      },
      error=> {
        console.log('error in auth.service.getCurrentUser()');

      });
  }
  navItem(item: Item) {
    console.log('navitem: ' + item.id);
    const id = item.id.toString();
    localStorage.setItem('wonSelectedId', id);
    this.router.navigate(['/item']);
    }
  }

