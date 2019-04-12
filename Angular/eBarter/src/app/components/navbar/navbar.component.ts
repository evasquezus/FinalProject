import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  loginnavbar = false;
  mainnavbar = true;


  dropdown = true;
  constructor(private router: Router) { }
  ngOnInit() {
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
    // TODO log user out
    this.router.navigate(['/home'])

  }
}
