import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, ObservedValueTupleFromArray } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={}
  //currentUser$ : Observable<User>;

  constructor(public accountServices : AccountService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.currentUser$ = this.accountServices.currentUser$;
    //console.log(this.currentUser$);
  }

  login() {
    //console.log(this.model);
    this.accountServices.login(this.model).subscribe(response => {
      //console.log(response);
      this.router.navigateByUrl('/members');
    // }, error => {
    //   console.log(error);
    //   this.toastr.show(error.error);
    })
  }

  logout(){
    this.accountServices.logout();
    this.router.navigateByUrl('/');
  }
}
