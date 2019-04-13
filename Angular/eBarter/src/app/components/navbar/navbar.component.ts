
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  loginnavbar = true;
  mainnavbar = false;
  logincombo = {username: '', password: ''};
  displayName = null;

  dropdown = true;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  this.setNavbar();
  }

  setNavbar() {
    if(this.auth.checkLogin()){
      this.loginnavbar = false;
      this.mainnavbar = true;
      this.displayName = this.auth.getCredName();
    }
    else {
      this.loginnavbar = true;
      this.mainnavbar = false;
      this.navHome();
    }
  }

  navHome() {
    this.router.navigate(['/home']);
  }

  navList() {
    this.router.navigate(['/listitem']);
  }

  navCompleted() {
    this.router.navigate(['/completed']);
  }

  navProfile() {
    this.router.navigate(['/profile']);
  }

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
    let res = this.auth.login(username, password).subscribe(
      data => {
        console.log('authenticated');
        this.setNavbar();
      },
      err => {
        console.log('authentication failed');
      }
    );
    console.log(res);
    }

  // clearForm() {
  //   this.namebox.textContent = '';
  //   this.passwordbox.textContent = '';
  // }
}
