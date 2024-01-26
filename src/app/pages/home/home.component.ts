import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/services/guard/guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router){}
  auth(){
    this.router.navigate(['sign-up']);
  }
}
