import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCorridas(){
    return this.http.get('http://localhost:8000/api.corridasapp.com/v1/corridas');
  }
  getUsuarios(){
    return this.http.get('http://localhost:8000/api.corridasapp.com/v1//usuarios');
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
