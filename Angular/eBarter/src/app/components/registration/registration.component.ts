import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { Address } from 'src/app/models/address';
// import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  angForm: FormGroup;

  newUser: User = new User();
  address: Address = new Address();

  constructor(
    private authService: AuthService,
    // private login: LoginComponent,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      email: ['', Validators.required ],
      street: ['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ],
      zipcode: ['', Validators.required ]
    });
  }

  ngOnInit() {}

  onSubmit() {
    // const response = this.userService.register(this.user);
    console.log('register.component.onSubmit() sending data');
    console.log(this.newUser);
    this.authService.register(this.newUser).subscribe(
      data => {
        this.authService.login(this.newUser.username, this.newUser.password).subscribe(
          date2 => {
            // this.router.navigate([{outlets: {home: 'home', user: null}}])
            localStorage.setItem('newUser', 'true');

            this.router.navigate(['/navbar']);
        },
          err2 => console.log(err2)
        );
        // this.newUser = new User();
        // this.user = data;
        // console.log(data);
      },
      error => {
        console.log('error in register.component.onSubmit()');
      }
    );
  // }this.user.address = this.address;
  // this.login.user = this.user;
  // this.authService.register(this.user).subscribe( data => {
  //   this.user = data;
  //   this.login.login();
  //   // this.router.navigateByUrl('userRegister');
  // },
  // error => console.log(error)

  // );
}
}
