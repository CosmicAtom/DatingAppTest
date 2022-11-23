import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'The Dating App ASP';
  users:any;

  constructor (private http: HttpClient){}
  //https://localhost:7004/api/Users

  ngOnInit() {
    //throw new Error('Method not implemented.');
    this.getUser();
  }

  getUser(){
    this.http.get('https://localhost:7004/api/Users').subscribe(response => {
      this.users = response;
    },error =>{
      console.log(error);
    });
  }
}
