import { Component, OnInit } from '@angular/core';
import { SgilService } from '../service/sgil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mode = 0;
  private token: string;
  constructor(private sg : SgilService, private router: Router) {

  }
  onLogin(user) {
    this.sg.login(user).subscribe(
      rep => {
        this.mode = 0;
        this.token = rep.headers.get('Authorization');
        this.sg.saveToken(this.token);
        this.router.navigateByUrl('/livreurs');
      },
      error1 => {
        this.mode = 1;
      }
    );
  }

  ngOnInit() {
  }

}
