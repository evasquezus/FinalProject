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
    isAdmin: boolean = false;
    userList: User[];
    selectedUser: User;
    displayActive: string;
    activeFormat: string;


  ngOnInit() {
    this.reload();
    console.log('isAdmin: ' + this.isAdmin);

  }

  reload() {
    this.getCurrentUser();
    this.getAllUsers();
    }

    getCurrentUser() {
      const userName = this.auth.getCredName();
      let response = this.userService.getUserByUserName(userName);
      response.subscribe(
        data => {
         this.user = data;
         console.log('role id: ' + this.user.role.id);
         if(this.user.role.id === 1) {
           this.isAdmin = true;
           this.getAllUsers();
         }
         else {
           this.isAdmin = false;
         }
         console.log(data);

        },
        error => {
        }
      );
    }

    getAllUsers() {
      let response = this.userService.getAll();
      response.subscribe(
        data => {
         this.userList = data;
         console.log(this.userList);
         this.selectedUser = this.userList[0];
         if(this.selectedUser.enabled === true) {
          this.displayActive = 'Active';
          this.activeFormat = 'green';
        }
        else {
          this.displayActive = 'Inactive';
          this.activeFormat = 'red';
        }
        },
        error => {
        }
      );
    }

    getSelectedUser(event: any) {
      const userName = event.target.value;
      console.log('get selected: ' + userName);
      let response = this.userService.getUserByUserName(userName);
      response.subscribe(
        data => {
        this.selectedUser = data;
        this.getSelectedUserNoEvent();
        },
        error => {
        }
      );
    }

    getSelectedUserNoEvent() {
      const userName = this.selectedUser.username;
      console.log('get selected: ' + userName);
      let response = this.userService.getUserByUserName(userName);
      response.subscribe(
        data => {
        this.selectedUser = data;
        if(this.selectedUser.enabled === true) {
          this.displayActive = 'Active';
          this.activeFormat = 'green';
        }
        else {
          this.displayActive = 'Inactive';
          this.activeFormat = 'red';
        }

        },
        error => {
        }
      );
    }


    navHome() {
      this.router.navigate(['home'])
    }

    updateUser() {
      // const userName = this.auth.getCredName();
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

    updateSelectedUser() {
      console.log('in update selected');
      // const userName = this.selectedUser.username;
      let response = this.userService.update(this.selectedUser);
      console.log('profile.component.updateSelectedUser() sending data');

      response.subscribe(
        data => {
         this.selectedUser = data;
         console.log(data);
        this.getSelectedUserNoEvent();
        },
        error => {
          console.log('error in profile.component.updateSelectedUser()');

        }
      );
    }

    activateUser() {
      this.selectedUser.enabled = true;
      console.log('activate: ' + this.selectedUser);
      this.updateSelectedUser();
    }

    deactivateUser() {
      this.selectedUser.enabled = false;
      console.log('deactivate: ' + this.selectedUser);
      this.updateSelectedUser();
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
