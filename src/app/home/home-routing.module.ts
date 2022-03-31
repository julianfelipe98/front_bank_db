import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { FormAccountComponent } from './components/form-account/form-account.component';
import { FormComponent } from './components/form/form.component';
import { TransferTableComponent } from './components/transfer-table/transfer-table.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{
path:'',
component:NavbarComponent,children:[{path:'customer/register',component:FormComponent},
{path:'account/register', component:FormAccountComponent},
{path:'customer/show', component:CustomerTableComponent},
{path:'transfer/show', component:TransferTableComponent},
{path:'account/show', component:AccountsTableComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
