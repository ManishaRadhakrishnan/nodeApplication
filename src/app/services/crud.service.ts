import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //base api url
  public url = 'http://localhost/web_api/';
  constructor(private http: HttpClient) { }
  
  submitLog(id){
  return this.http.post(this.url + 'login?id=', id);
}
}
