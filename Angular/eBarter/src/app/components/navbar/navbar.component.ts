import { ShareService } from './../../services/share.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { HomepageComponent } from '../homepage/homepage.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  loginnavbar = true;
  mainnavbar = false;
  logincombo = { username: '', password: '' };
  displayName = null;
  currentUser: User;

  dropdown = true;
  constructor(private us: UserService,
              private router: Router,
              private auth: AuthService,
              private userService: UserService,
              private share: ShareService) { }

  ngOnInit() {
    this.setNavbar();
  }

  setNavbar() {
    if (this.auth.checkLogin()) {
      this.displayName = this.auth.getCredName();
      this.loginnavbar = false;
      this.mainnavbar = true;

    }
    else {
      this.loginnavbar = true;
      this.mainnavbar = false;
      this.navHome();
    }
  }

  navHome() {
    if(!this.share.showWarning) {
    this.router.navigate(['/home']);
    }
  }

  navList() {
    if(!this.share.showWarning) {
    this.router.navigate(['/listitem']);
    }
  }

  navProfile() {
    if(!this.share.showWarning) {
    this.router.navigate(['/profile']);
    }
  }

  // click methods for item sorting
  // --------------------------------------------------
  navBidding() {
    this.router.navigate(['/biddingOn']);
  }

  navSelling() {

  }

  navWon() {
    this.router.navigate(['/itemsWon']);
  }

  navCompleted() {
    this.router.navigate(['/completed']);
  }
  // ----------------------------------------------------
  navLogout() {
    this.auth.logout();
    this.setNavbar();
    this.navHome();
  }

  navRegister() {
    this.router.navigate(['/register'])
  }

  navLogin(form: NgForm) {
    const username = this.logincombo.username;
    const password = this.logincombo.password;
    console.log('navbar.navLogin(): ' + username + ' ' + password);

    let res = this.auth.login(username, password).subscribe(
      data => {
        console.log('login response: ' + data);

        console.log('authenticated');
        this.setNavbar();
        if (this.share.showWarning) {
        this.share.showWarning = false;
        this.router.navigate(['/dummy']);
        this.checkEnabled();
      }
      },
      err => {
        console.log('authentication failed');
      }
    );
    console.log(res);
  }

    // getCurrentUser() {
    //   let response = this.userService.getUserByUserName(this.displayName);
    //   response.subscribe(
    //     data => {
    //     this.currentUser = data;
    //     if (this.currentUser.enabled
    //     },
    //     error => {
    //     }
    //   );
    // }

    // DELETE THIS CRAP BELOW

  checkEnabled() {
    let response = this.us.getUserByUserName('testuser');
    response.subscribe(
      data => {
        const user = data;
        if(!user.enabled) {
          this.share.showSuspended = true;
          this.router.navigate(['/dummy']);
        }
        else {
          this.share.showSuspended = false;
          this.router.navigate(['/dummy']);
        }
      }
    );

  }

}
