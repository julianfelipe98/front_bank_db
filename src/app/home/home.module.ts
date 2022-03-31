import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './components/form/form.component';
import { FormAccountComponent } from './components/form-account/form-account.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { TransferTableComponent } from './components/transfer-table/transfer-table.component';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { AssociatedComponent } from './components/associated/associated.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FormComponent,
    FormAccountComponent,
    CustomerTableComponent,
    TransferTableComponent,
    AccountsTableComponent,
    TransferComponent,
    AssociatedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    // HttpClientModule
  ]
})
export class HomeModule { }
