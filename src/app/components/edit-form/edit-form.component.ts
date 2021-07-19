import { Component, OnInit } from '@angular/core';
import {Http , Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { User_model } from './../../models/user_model';
import { AccountService} from '../../../services/account.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  public userModel: User_model = new User_model;
  public getId: any = [];
  [x: string]:any;
  record:any=[];
  name:string="";
  lastname:string="";
  email:string="";
  phoneno:number;
;
  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: Http) { }
  // constructor(){}



  ngOnInit(): void {
    this.userModel=<User_model><unknown>{
      name: '',
      lastname:'',
      email:'',
      phoneno:'',
      user_id:'',

    }
    // this.route.params.subscribe(params => {
    //   this.getId = this.userModel.user_id = params['user_id'];
    //   this.getPhone = this.userModel.phoneno = params['phone_no'];

    // });
    this.userModel.user_id =  this.route.snapshot.params.user_id;
    this.userModel.phoneno = this.route.snapshot.params.phoneno;
    this.getRecordBasedOnId()

    //this.getId, this.getPhone);
  }

  getRecordBasedOnId(){
    console.log('check data:', this.userModel);
    debugger;
    this.accountService.getRecordUrl(this.userModel.user_id, this.userModel.phoneno).then((response: any)=>{
      debugger;
      this.record=response.result;
      this.userModel.name=this.record.name;
      this.userModel.lastname=this.record.lastname;
      this.userModel.email=this.record.email;
      this.userModel.phoneno=this.record.phoneno;
      //this.User_model.name=this.record.name;
      console.log(this.record[0].name);
    });
  }

  editData(){
    // alert("xyz")
    debugger;
    // this.userModel.userid=this.getId;
    // this.userModel.phoneno=this.phoneno;

    this.accountService.update_data_url(this.userModel).then((response: any)=>{
      console.log(response);
      console.log('update working');
      // this.router.navigate(['/formdata']);
    });
  }

}
