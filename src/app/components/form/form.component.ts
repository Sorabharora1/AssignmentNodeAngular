import { Component, OnInit } from '@angular/core';
import {Http , Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { User_model } from './../../models/user_model';
import { AccountService} from '../../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  item_Model: User_model;
  constructor(private accountService: AccountService, private router: Router, private http: Http) { }
  ngOnInit(): void {
    this.item_Model = ({
      name: '',
      lastname: '',
      email: '',
      phoneno: '',
    } as unknown as User_model);
  }

  // tslint:disable-next-line: typedef
  addUser(){
    this.accountService.addUser(this.item_Model).then((response) => {
      // tslint:disable-next-line: no-debugger
      debugger;
      this.router.navigate(['/user-list']);
      console.log('add working');
    });
  }
}


