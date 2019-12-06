import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   
  menu = true;
  constructor(private location: Location, private router: Router) {}
  ngOnInit(): void {
      if (this.location.path().startsWith("/login")) {
        console.log(this.location.path());
             this.menu = true;
    }else{
      this.menu = false;
    }
  }
}
