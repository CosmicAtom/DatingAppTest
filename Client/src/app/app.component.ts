import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'The Dating App ASP';
  users:any;

  constructor (private http: HttpClient, private accoutservice:AccountService){}
  //https://localhost:7004/api/Users

  ngOnInit() {
    //throw new Error('Method not implemented.');
    //this.getUser();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accoutservice.setCurrentUser(user);
  }

  // getUser(){
  //   this.http.get('https://localhost:7004/api/Users').subscribe(response => {
  //     this.users = response;
  //     //console.log(response);
  //   },error =>{
  //     console.log(error);
  //   });
  // }
}
