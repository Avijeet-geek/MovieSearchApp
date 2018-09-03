import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  apiBaseurl:string='';
  constructor(public http: HttpClient,public localStorage: LocalStorage) {

    this.apiBaseurl='  http://www.omdbapi.com/?apikey=5a74bec3';
   
   }
  searchMovie(value,info){
    // const headers = new HttpHeaders().set('Authorization', 'auth-token');
    // i=tt3896198&
    const encodedName = encodeURI('='+info);

    console.log(this.apiBaseurl+'&'+value+encodedName);
     return this.http.get(this.apiBaseurl+'&' + value +encodedName);
  }
}
