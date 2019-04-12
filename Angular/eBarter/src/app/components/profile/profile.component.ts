import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthenticationService,
    private itemService: ItemService,
    ) { }

    user = new User();
    editUser = null;
    firstName = new this.firstName();
    lastName = new this.lastName();
    password = new this.password();
    email = new this.email();
    street = new this.street();
    states = new this.states();
    zipcode = new this.zipcode();


  ngOnInit() {
    this.reload();
  }
  reload() {
    this.userService.getLoggedIn().subscribe(userData => {
      this.user = userData;
      console.log(this.user);
      this.editUser = null;
    },
    error => console.log(error)
    );
  }
  selectEditUser() {
    this.editUser = this.user;
  }
  submitEditUser() {
    this.user = this.editUser;
    this.userService.update(this.user).subscribe(

    );
    this.editUser = null;
  }
}
