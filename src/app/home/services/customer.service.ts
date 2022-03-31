import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  urlCustomer = `${environment.urlEndpoint}/customer`;

  constructor(private http:HttpClient) { }

  public getCustomers(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.urlCustomer);
  }

  public createCustomer(bodyCustomer:any) {
    return this.http.post(this.urlCustomer, bodyCustomer);
  }

  public createdAssociated(bodyAssociated: any){
    return this.http.post(this.urlCustomer+"/associated", bodyAssociated);
  }
}
