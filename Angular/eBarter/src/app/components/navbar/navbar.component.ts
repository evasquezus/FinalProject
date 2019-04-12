import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  loginnavbar = true;
  mainnavbar = false;


  dropdown = true;
  constructor() { }
  ngOnInit() {
  }

}
