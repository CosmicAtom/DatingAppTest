import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  //users:any;

  constructor() { }

  ngOnInit(): void {
    //this.getUser();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  // getUser(){
  //   this.http.get('https://localhost:7004/api/Users').subscribe(user => this.users = user)
  // }

  cancelRegisterMode(event : boolean){
    this.registerMode = event;
  }
}
