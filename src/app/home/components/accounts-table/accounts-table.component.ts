import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TransferComponent } from '../transfer/transfer.component';
import { IAccount } from '../../models/account.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})

export class AccountsTableComponent {

  transfer!:ITransfer;
  accounts!:IAccount[];

  displayedColumns: string[] = ['customer','number', 'type', 'balance', 'coin','transfer'];
  dataSource !: MatTableDataSource<any>;

  constructor(public dialog:MatDialog, private accountService:AccountService, private router:Router) {
  }

  ngOnInit(): void {
    this.accountService.getAccounts()
    .subscribe((accounts:IAccount[]) => {
      this.accounts = accounts;

      let utilData = this.accounts.map(ac => ({customer: ac.OWNER.CUSTOMER_INFO.FIRST_NAME +' ' +ac.OWNER.CUSTOMER_INFO.LAST_NAME, number: ac.ID, type: (ac.ACCOUNT_TYPE === "PR")? "PREMIUM": "REGULAR", balance: ac.BALANCE, coin: ac.ACCOUNT_COIN.NAME}));
      console.log(utilData);
      this.dataSource=new MatTableDataSource(utilData);
    })
  }

  openDialog(element:any): void {
    const dialogRef = this.dialog.open(TransferComponent, {
      width: '600px',
      data: element,
    });

    console.log(element);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.transfer = result;
      this.transfer.origin_account = element.number;

      this.accountService.transferMoney(this.transfer)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/transfer/show');
      })
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface ITransfer {
  amount: number,
  account_number: string,
  origin_account: string
}


