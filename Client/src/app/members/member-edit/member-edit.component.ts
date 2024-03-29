import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { members } from 'src/app/_model/members';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm : NgForm;
  member : members;
  user : User;

  constructor(private accountService :  AccountService, private memberService : MembersService,
    private toastr:ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user =>  this.user = user);
   }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService.getMember(this.user.userName).subscribe(member => {
      this.member = member;
    });
  }

  updateMember() {
    console.log(this.member);
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile Update Succesfully');
      this.editForm.reset(this.member);
    });
  }
}
