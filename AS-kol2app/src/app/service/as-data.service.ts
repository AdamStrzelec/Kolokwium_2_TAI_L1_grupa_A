import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ASDataService {


  private url = 'https://kol2tai.herokuapp.com/api/blog/posts';
  
  constructor(private http: HttpClient) { 

  }

  getAll(){
    return this.http.get(this.url);
  }
}
