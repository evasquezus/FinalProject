import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  item = new Item();
  items: Item[];
  user = new User();
  bidder: User;

  constructor(
    private userService: UserService,
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
    this.getCurrentUser();
  }


  // addItem(name: string, description: string, endDate: Date, user_id: number) {
  addItem(item: Item) {
    console.log(item.name, item.description, item.user);
    // this.user.id
    // TODO: when new Item model class pulled, uncomment:
    // this.item.user = this.getCurrentUser();
    this.item.user = this.bidder;
    this.item.itemStatus = 1;
    if (!item.name && !item.description && !item.user) {
      alert('Please fill in the form completly');
    } else {
      // this.itemService.saveItem({ na;me, description, endDate, user_id} as Item).subscribe
      this.itemService.saveItem(item).subscribe
        (item => {
          console.log(item);
          // location.reload();
        }
        );
    }
  }
  // getCurrentUser() {
  //   const userName = this.auth.getCredName();
  //   let response =  this.userService.getUserByUserName(userName);
  //   // let response = this.userService.getUserByUserName(userName);
  //   response.subscribe(
  //     data => {
  //      this.user = data;
  //      console.log('role id: ' + this.user.role.id);
  //      console.log(data);
  //     //  return this.userService.getUserByUserName(userName);
  //     },
  //     error => {
  //     }
  //   );

  // }

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

