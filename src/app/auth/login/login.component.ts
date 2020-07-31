import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {APP_NAVIGATOR} from '../../constant/app-navigator.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  login(e) {
    const user/*: IUser */= this.formGroup.value;
    this.userService.login(user) && this.router.navigate([APP_NAVIGATOR.BOOKS]);
  }
}
