import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  disp_login_nav = true;
  disp_main_nav = false;


  dropdown = true;
  constructor() { }
  ngOnInit() {
  }

}
