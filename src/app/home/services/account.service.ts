import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlAccount = `${environment.urlEndpoint}/account`;

  constructor(private http:HttpClient) { }

  public getAccounts(): Observable<IAccount[]>{
    return this.http.get<IAccount[]>(this.urlAccount)
  }

  public sendCreateData(account:any){
    return this.http.post(this.urlAccount, account);
  }

  public transferMoney(transfer:any){
    return this.http.post(this.urlAccount +"/transfer", transfer);
  }
}
