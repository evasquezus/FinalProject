import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  loginnavbar = true;
  mainnavbar = false;
  logincombo = {username: '', password: ''};

  dropdown = true;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  if(this.auth.checkLogin()){
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
    this.router.navigate(['/home'])
  }

  navRegister() {
    this.router.navigate(['/register'])
  }

  navLogin(form: NgForm) {
    const username = this.logincombo.username;
    const password = this.logincombo.password;


    console.log('name: ' + username);
    console.log('password ' + password);

    if(!this.auth.checkLogin()) {
      console.log('login failed');
      this.logincombo.username = '';
      this.logincombo.password = '';
    }

    }

  // clearForm() {
  //   this.namebox.textContent = '';
  //   this.passwordbox.textContent = '';
  // }
}
