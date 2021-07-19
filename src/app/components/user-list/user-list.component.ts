import { Component, OnInit } from '@angular/core';
import {Http , Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { User_model } from './../../models/user_model';
import { AccountService} from '../../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userModel: User_model;
  // userModel: any;
  record: any = [];
  constructor(private accountService: AccountService, private router: Router, private http: Http) { }

  ngOnInit(): void {
    this.userList();
  }


  userList(){
    this.accountService.userList(this.userModel).then((response) => {
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(response);
      this.record = response.result;
    });
  }
  delete_user(userid: any){
    console.log(userid);
    this.accountService.delete_user(userid).then((response: { code: number; }) => {
    this.router.navigate(['/user-list']);
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    console.log('working');
    this.userList();
   });
 }

 gotoEdit(userid, phoneno){
   console.log("user====" , userid, phoneno);
  this.router.navigate(['/edit-form/'+ userid+"/"+ phoneno])
 }

}



