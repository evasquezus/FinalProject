import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngbd-modal-config',
  templateUrl: './ngbd-modal-config.component.html',
  styleUrls: ['./ngbd-modal-config.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NgbdModalConfigComponent implements OnInit {

  itemId: string
  itemName: string;
  sellerName: string;
  bidder = new User();

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private itemDetailComp: ItemDetailComponent,
              private userService: UserService,
              private authService: AuthService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.getCurrentUser();
    this.sellerName = localStorage.getItem('seller');
    this.itemName = localStorage.getItem('itemName');
  }

  getCurrentUser() {
    const userName = this.authService.getCredName();
    let response = this.userService.getUserByUserName(userName);
    response.subscribe(
      data => {
        this.bidder = data;
        console.log('bidder: ' + this.bidder);

      },
      error=> {
        console.log('error in auth.service.getCurrentUser()');

      });
  }

  submitOffer(form: NgForm) {

  }

}
