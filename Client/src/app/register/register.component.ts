import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() userFromHomeComponet : any;
  @Output() cancelRegister = new EventEmitter();
  model:any ={}

  constructor(private acccoutService:AccountService) { }

  ngOnInit(): void {
    console.log(this.userFromHomeComponet);
  }

  register(){
    //console.log(this.model);
    this.acccoutService.register(this.model).subscribe(response =>
      {
        console.log(response);
        this.cancel();
      },
      error => {
        console.log(error);
      })
  }

  cancel(){
    //console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
