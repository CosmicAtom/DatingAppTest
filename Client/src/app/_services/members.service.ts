import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { members } from '../_model/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getMembers(){
    return this.http.get<members[]>(this.baseUrl + 'users');
  }

  getMember(username : string){
    return this.http.get<members>(this.baseUrl + 'users/' + username);
  }
  
  updateMember(members : members) {
    return this.http.put(this.baseUrl + 'users', members);
  }
}
