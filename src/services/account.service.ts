import { environment } from './../environments/environment';
import { Injectable, Input } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { User_model } from 'src/app/models/user_model';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  [x: string]: any;
  private adduserurl = environment.apiBaseUrl + 'users';
  private getuserurl = environment.apiBaseUrl + 'usersList';
  private deleteUserurl = environment.apiBaseUrl + 'users';
  private updateurl = environment.apiBaseUrl + 'users';
  private getUserByIDUrl = environment.apiBaseUrl + 'users';
  constructor(private baseHttpService: BaseHttpService) { }

  // tslint:disable-next-line: variable-name
  addUser(user_model: User_model): Promise<any>{
    return this.baseHttpService.Post(this.adduserurl, user_model)
    .then(function(response){
        return response.json();
    });
  }

  userList(user_model: User_model): Promise<any>{
    return this.baseHttpService.Get(this.getuserurl)
    .then(function(response){
        return response.json();
    });
  }

  delete_user(userid: any): Promise<any>{
    // let params = new HttpParams();
    return this.baseHttpService.Delete(this.deleteUserurl+"/"+userid)
      .then(function(response){
      });
  }

  // tslint:disable-next-line: variable-name
  getRecordUrl(user_id: string, phoneno: string): Promise<any>{
    return this.baseHttpService.Get(this.getUserByIDUrl+"?user_id="+user_id+"&phoneno="+phoneno)
      .then(function(response){
        return response.json();
      });
  }

  update_data_url(user_model: User_model): Promise<any>{
    const params = new HttpParams();
    return this.baseHttpService.Patch(this.updateurl, user_model)
    .then(function(response){
        return response.json();
    });
  }

}

