import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrls: ['./dummy2.component.css']
})
export class Dummy2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/item']);
  }

}

