import { Component, OnInit } from '@angular/core';
import * as Firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{

  constructor(private authService: AuthService) {}
  
  logOut(){
    this.authService.logOut();
  }
}
