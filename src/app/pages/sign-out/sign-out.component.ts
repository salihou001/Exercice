import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {
  constructor(private router:Router){}
  onDashboard(){
    this.router.navigate(['dashboard'])
  }
}
