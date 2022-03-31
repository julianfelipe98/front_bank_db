import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ICustomer } from '../../models/customer.model';
import { AssociatedComponent } from '../associated/associated.component';
import { CustomerService } from './../../services/customer.service';



@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent{
  displayedColumns: string[] = ['First name', 'Last name', 'Document type', 'Id','Neighboorhod', 'Associated'];
  dataSource !: MatTableDataSource<any>;
  transfer!:ITransfer;
  customers!:ICustomer[];

  constructor(private customerService:CustomerService,public dialog:MatDialog, private router:Router) {}
  ngOnInit(): void {
    this.customerService.getCustomers()
    .subscribe((customers:ICustomer[]) => {
      this.customers = customers;
      let utilData = this.customers.map(cus => ({firstName:cus.CUSTOMER_INFO.FIRST_NAME,lastName:cus.CUSTOMER_INFO.LAST_NAME,documentType:cus.CUSTOMER_INFO.IDTYPE,id:cus.CUSTOMER_INFO.ID,neighboorhood:cus.DIRECTION.NEIGHBOORHOOD}));
      console.log(utilData);
      this.dataSource=new MatTableDataSource(utilData);
    })
  }

  openDialog(element:any): void {
    const dialogRef = this.dialog.open(AssociatedComponent, {
      width: '600px',
      data: element,
    });

    console.log(element);

    dialogRef.afterClosed().subscribe(result => {
      this.transfer = result;

      this.transfer.idCustomer = element.id;
      console.log('Transfer', this.transfer);
      this.customerService.createdAssociated(this.transfer)
      .subscribe(res => {
        console.log(res);
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


export interface ITransfer {
  idCustomer: string,
  accountNumber: string,
  documentType: string,
  firstName: string,
  id: string,
  lastName: string
}
