import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(public http: HttpClient) { }

 

  getCorridas(){
    return this.http.get('http://127.0.0.1:8000/api.corridasapp.com/v1/corridas/');
  }
  getUsuarios(){
    return this.http.get('http://localhost:8000/api.corridasapp.com/v1/usuarios');
  }
  getAdmin(){
    return this.http.get('http://localhost:8000/api.corridasapp.com/v1/admin');
  }
  getBoletos(){
    return this.http.get('http://localhost:8000/api.corridasapp.com/v1/boletos');
  }
  getBusline(){
    return this.http.get('http://localhost:8000/api.corridasapp.com/v1/busline');
  }
}
