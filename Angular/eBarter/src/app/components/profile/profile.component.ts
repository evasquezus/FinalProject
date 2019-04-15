import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router
    ) { }

    user = new User();
    editUser: User;


  ngOnInit() {
    this.reload();
  }

  reload() {
    this.getCurrentUser();
    }

    getCurrentUser() {
      const userName = this.auth.getCredName();
      let response = this.userService.getUserByUserName(userName);
      response.subscribe(
        data => {
         this.user = data;
         console.log(data);

        },
        error => {
        }
      );
    }

    navHome() {
      this.router.navigate(['home'])
    }

    updateUser() {
      const userName = this.auth.getCredName();
      let response = this.userService.update(this.user);
      console.log('profile.component.updateUser() sending data');

      response.subscribe(
        data => {
         this.user = data;
         console.log(data);

        },
        error => {
          console.log('error in profile.component.updateUser()');

        }
      );
    }

  // reload() {
  //   this.userService.getLoggedIn().subscribe(userData => {
  //     this.user = userData;
  //     console.log(this.user);
  //     this.editUser = null;
  //   },
  //   error => console.log(error)
  //   );
  // }

  // ROB COMMENT ON MASTER BRANCH

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
