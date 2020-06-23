import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  consulta(url: string) {
    return this.httpClient.get(url);
    }
    consultaPorId(url:string){
    return this.httpClient.get(url);
    }
    alta2(url:string,body:any){
    return this.httpClient.post(url, body).toPromise()
    }
    alta(url:string, name:string, lastname:string, contact:string, cellphone:string ){
    const body = new HttpParams()
    .set('name', name)
    .set('lastname', lastname)
    .set('contact', contact)
    .set('cellphone', cellphone)
    return this.httpClient.post(url, body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    })
    }
}
