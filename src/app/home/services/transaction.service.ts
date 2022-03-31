import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  urlTransaction = `${environment.urlEndpoint}/transaction`;

  constructor(private http:HttpClient) {}
  public getTransactions(): Observable<ITransaction[]>{
    return this.http.get<ITransaction[]>(this.urlTransaction)
  }
}
