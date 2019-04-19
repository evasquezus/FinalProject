import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

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
  bidderName: string;
  showResult: boolean = false;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private itemDetailComp: ItemDetailComponent,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.bidderName = localStorage.getItem('bidderName');
    console.log('modal bidderName: ' + this.bidderName);
    this.sellerName = localStorage.getItem('sellerName');
    console.log('modal sellerName: ' + this.sellerName);
    this.itemName = localStorage.getItem('itemName');
    console.log('modal itemName: ' + this.itemName);
    localStorage.removeItem('bidderName');
    localStorage.removeItem('sellerName');
    localStorage.removeItem('itemName')

  }

  submitOffer(form: NgForm) {
    const desc = form.value.description;
    const imgUrl = form.value.imgUrl;
    console.log('modal form: ' + desc + ' ' + imgUrl);
    this.itemDetailComp.submitOffer(desc, imgUrl);
    // this.router.navigate(['/dummy2']);
    this.showResult = true;
  }

}
