import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  loginnavbar = false;
  mainnavbar = true;


  dropdown = true;
  constructor() { }
  ngOnInit() {
  }

}
