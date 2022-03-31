import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ITransaction } from '../../models/transaction.model';
import { TransactionService } from './../../services/transaction.service';
export interface Transfer {
  code: string;
  origin: string;
  target:string,
  amount:number
  coin: string;
  commission: number;
  state: string;
}

@Component({
  selector: 'app-transfer-table',
  templateUrl: './transfer-table.component.html',
  styleUrls: ['./transfer-table.component.css']
})
export class TransferTableComponent{
  displayedColumns: string[] = ['code', 'origin', 'target', 'amount','coin','commission','state'];
  dataSource !: MatTableDataSource<any>;
  transactions!:ITransaction[];
  constructor(private transactionService:TransactionService) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions()
    .subscribe((transactions:ITransaction[]) => {
      this.transactions = transactions;
      let utilData = this.transactions.map(tr => ({code:tr.ID,origin:tr.ORIGIN_ACCOUNT.ID,target:tr.TARGET_ACCOUNT.ID,amount:tr.AMOUNT,coin:tr.TRANSACTION_COIN.NAME,commission:tr.COMMISSION,state:tr.STATE}));
      console.log(utilData);
      this.dataSource=new MatTableDataSource(utilData);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
