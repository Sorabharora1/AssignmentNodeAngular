import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  private headers = new Headers({
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
  'Content-Type': 'application/json',
  'Accept': 'application/json' });

    private authHeaderAdded: boolean = false
    constructor(private http: Http) { }

    GetHeaders(): Headers {
      return this.headers;
    }

    Post(url: string, model: any) {

      return this.http.post(url, model, { headers: this.headers }).toPromise();
    }

  Put(url: string, model: any) {
      return this.http.put(url, model, { headers: this.headers }).toPromise();
  }

  Get(url: string) {
      return this.http.get(url, { headers: this.headers }).toPromise();
  }
  Delete(url: string) {
      return this.http.delete(url, { headers: this.headers }).toPromise();
  }
}
